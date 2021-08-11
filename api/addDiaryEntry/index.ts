import { AzureFunction, Context } from '@azure/functions';

const mongoose = require('mongoose');

console.log('running!');

mongoose.connect(
  process.env.CONNECTION_STRING, // Retrieve connection string
  {
    // boiler plate values
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const entrySchema = new mongoose.Schema({
  portionSize: String,
  // mealTypes: [String],
});
const EntryModel = mongoose.model('entry', entrySchema);

// eslint-disable-next-line func-names
const httpTrigger: AzureFunction = async function (
  context: Context
): Promise<void> {
  console.log('running as well!');

  const { body } = context.req;
  const task = await EntryModel.create(body);
  context.res = {
    header: {
      'Content-Type': 'application/json',
    },
  };
  context.res.status = 201;
  context.res.body = task;
};

export default httpTrigger;
