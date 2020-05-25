import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './schema';

dotenv.config();

const port = process.env.PORT || process.env.port; 

const app = express();
mongoose.connect(process.env.MONGOLAB_URI);
mongoose.connection.once('open', () => {
  console.log('connected to db');
})

// middleware
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});