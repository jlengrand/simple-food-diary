import { AzureFunction, Context } from '@azure/functions';

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING);

const taskSchema = new mongoose.Schema({
  portionSize: String,
  mealtypes: [String],
});
const EntryModel = mongoose.model('entry', taskSchema);

// eslint-disable-next-line func-names
const httpTrigger: AzureFunction = async function (
  context: Context
): Promise<void> {
  // Read the uploaded task
  const { body } = context.req;
  // Save to database
  const task = await EntryModel.create(body);
  // Set the HTTP status to created
  context.res.status = 201;
  // return new object
  context.res.body = task;
};

export default httpTrigger;
