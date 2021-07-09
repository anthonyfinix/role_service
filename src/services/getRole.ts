import Role from "../entities/roles/models/role"
import { BadRequest } from "../util/error";

export default async (filter: any) => {
    let { name } = filter;
    if (name) {
        try {
            let result = await Role.aggregate([
                { $match: { "name": name } },
                {
                    $lookup: {
                        "from": "permissions",
                        "localField": "_id",
                        "foreignField": "role",
                        "as": "permissions"
                    }
                },
                {
                    $lookup: {
                        "from": "entities",
                        "localField": "permissions.entity",
                        "foreignField": "_id",
                        "as": "entity"
                    }
                }
            ]);
            return { message: "successful", result }
        } catch (e) {
            return { error: e }
        }
    } else {
        return { error: new BadRequest({ message: "requires id" }) }
    }
}