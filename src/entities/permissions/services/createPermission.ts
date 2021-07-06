import { InternalError } from "../../../util/error";
import Role from "../../roles/models/role";
import Permission, { PermissionInterface } from "../models/permission";

export interface ICreateEntityResponse {
    error?: Error,
    message: string,
    result?: PermissionInterface
}

export default async (newPermission: PermissionInterface): Promise<ICreateEntityResponse> => {
    try {
        let entity = await Permission.findOne({ _id: newPermission.entity });
        if (!entity) return { error: new Error("no entity found"), message: "unsuccessful" }
        let role = await Role.findOne({ _id: newPermission.role });
        if (!role) return { error: new Error("no role found"), message: "unsuccessful" }
        let permission = await new Permission(newPermission).save();
        return { message: "success", result: permission }
    } catch (e) {
        return { error: <Error>e, message: "unsuccessful" }
    }
}