import { AzureFunction, Context } from '@azure/functions';

const mongoose = require('mongoose');

console.log('running!');

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
  console.log('running as well!');

  const { body } = context.req;
  const task = await EntryModel.create(body);
  context.res.status = 201;
  context.res.body = task;
};

export default httpTrigger;
