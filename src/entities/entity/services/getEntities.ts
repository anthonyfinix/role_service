import { FilterQuery } from "mongoose";
import Entity, { EntityInterface } from "../models/entity";

export interface ICreateEntityResponse {
    error?: Error,
    message: string,
    result?: Array<EntityInterface>
}

export default async (query: EntityInterface): Promise<ICreateEntityResponse> => {
    try {
        let entity = await Entity.find(<FilterQuery<EntityInterface>><unknown>query);
        return { message: "success", result: entity }
    } catch (e) {
        return { error: <Error>e, message: "unsuccessful" }
    }
}