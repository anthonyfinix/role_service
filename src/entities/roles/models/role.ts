import { Document, Model, model, Schema } from 'mongoose';
export interface RoleInterface extends Document {
    name: String,
}
export const schema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
})
const Role: Model<RoleInterface> = model('Role', schema);
export default Role;