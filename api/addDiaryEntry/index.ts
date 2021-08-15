import { AzureFunction, Context } from '@azure/functions';

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserModel = require('../models.js');

// eslint-disable-next-line func-names
const httpTrigger: AzureFunction = async function (
  context: Context
): Promise<void> {
  const { body } = context.req;
  const user = await UserModel.findOne({ userId: body.user.userId });
  user.entries.push(body.meal);

  const newUser = user.save();

  context.res = {
    header: {
      'Content-Type': 'application/json',
    },
  };
  context.res.status = 201;
  context.res.body = newUser;
};

export default httpTrigger;
