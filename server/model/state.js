import { Schema, model } from 'mongoose';

const stateSchema = new Schema({
  name: String
});

export default model('State', stateSchema);