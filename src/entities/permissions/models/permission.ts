import { Document, Model, model, Schema } from 'mongoose';
export interface PermissionInterface {
    entity: String,
    role:String,
    create:boolean,
    read:boolean,
    update:boolean,
    delete:boolean,
}
export const schema: Schema = new Schema({
    entity: { type: Schema.Types.ObjectId, ref: "Entity", required: true, unique: true },
    role: { type: Schema.Types.ObjectId, ref: "Role", required: true, unique: true },
    create: { type: Boolean, required: true, default: false },
    read: { type: Boolean, required: true, default: false },
    update: { type: Boolean, required: true, default: false },
    delete: { type: Boolean, required: true, default: false },
})
const Permission: Model<PermissionInterface> = model('Permission', schema);
export default Permission;