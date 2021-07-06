import { InternalError } from "../../../util/error";
import Entity, { EntityInterface } from "../models/entity";

export interface ICreateEntityResponse {
    error?: Error,
    message: string,
    result?: EntityInterface
}

export default async (newEntity: EntityInterface): Promise<ICreateEntityResponse> => {
    try {
        let entity = await new Entity(newEntity).save();
        return { message: "success", result: entity }
    } catch (e) {
        return { error: <Error>e, message: "unsuccessful" }
    }
}