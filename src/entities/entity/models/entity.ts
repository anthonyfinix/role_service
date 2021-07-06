import { Document, Model, model, Schema } from 'mongoose';
export interface EntityInterface extends Document {
    name: String,
}
export const schema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
})
const Entity: Model<EntityInterface> = model('Entity', schema);
export default Entity;