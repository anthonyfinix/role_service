import Role, { RoleInterface } from "../models/role";

export interface ICreateRoleResponse {
    error?: Error,
    message: string,
    result?: RoleInterface
}

export default async (newRole: RoleInterface): Promise<ICreateRoleResponse> => {
    try {
        let role = await new Role(newRole).save();
        return { message: "success", result: role }
    } catch (e) {
        return { error: <Error>e, message: "unsuccessful" }
    }
}