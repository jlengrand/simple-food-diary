import { AzureFunction, Context } from '@azure/functions';

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const entrySchema = new mongoose.Schema({
  portionSize: String,
  mealTypes: [String],
  ts: Date,
});

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  identityProvider: { type: String, required: true },
  userDetails: { type: String, required: true },
  entries: [entrySchema],
});

const UserModel = mongoose.model('user', userSchema);

const httpTrigger: AzureFunction = async function (
  context: Context
): Promise<void> {
  const { body } = context.req;
  let user;
  try {
    user = await UserModel.create(body);
  } catch (err) {
    console.log(err);
  }

  context.res = {
    header: {
      'Content-Type': 'application/json',
    },
  };
  context.res.status = 201;
  context.res.body = user;
};

export default httpTrigger;
