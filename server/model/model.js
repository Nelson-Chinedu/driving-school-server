import { Schema, model } from 'mongoose';

const schoolSchema = new Schema({
  accreditationNumber: String,
  name: String,
  address: String,
  state: String
});

export default model('School', schoolSchema);


