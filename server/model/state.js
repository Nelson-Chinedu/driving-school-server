import { Schema, model } from 'mongoose';

const stateSchema = new Schema({
  name: String,
  landmark: String
});

export default model('State', stateSchema);