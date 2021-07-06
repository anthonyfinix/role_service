import mongoose from 'mongoose';
import Entity, { EntityInterface } from '../entities/entity/models/entity';
import Permission from '../entities/permissions/models/permission';
import Role from '../entities/roles/models/role';
import { BadRequest } from '../util/error';
import { entity } from '../util/joi/joi_role';
export interface NewRoleEntity {
    role: string,
    entities: Array<IEntity>
}
export interface IEntity {
    name: string,
    permission: {
        create: boolean,
        read: boolean,
        update: boolean,
        delete: boolean
    }
}
export default async (newRole: NewRoleEntity) => {
    let session = await mongoose.startSession();
    try {
        session.startTransaction();

        // check if entities already exist
        let entitiesNames: Array<string> = getEntityNames(newRole)
        let entities: Array<EntityInterface> = await Entity.find({ name: { $in: entitiesNames } }, null, { session });
        if (entities.length != entitiesNames.length) return { error: new BadRequest({ message: "all entity does not exist", details: [] }) }
        // check if role already exists
        if (await Role.findOne({ name: newRole.role }, null, { session })) return { error: new BadRequest({ message: "provided role already exists", details: [] }) }
        // create role
        let role = await new Role({ name: newRole.role }).save({ session });

        let permissions = [];
        for (let i = 0; i <= (newRole.entities.length - 1); i++) {
            let details: any = { ...newRole.entities[i] };
            delete details.name;
            details.role = role._id;
            details.entity = entities[i]._id
            permissions.push(details)
        }
        let dbPermissions = await Permission.insertMany(permissions, { ordered: true, session });
        await session.commitTransaction();
        session.endSession();
        return {
            message: "unsuccessful", result: {
                role,
                entities,
                permissions: dbPermissions
            }
        }
    } catch (e) {
        await session.abortTransaction();
        session.endSession();
        return { error: e, message: "unsuccessful" }
    }
}


const getEntityNames = (roleObject: NewRoleEntity) => {
    let value = roleObject.entities.map((entity: IEntity) => entity.name);
    return value
}