import mongoose from 'mongoose';

mongoose.connect(
  "mongodb://mongo:mongo@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

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

const EntryModel = mongoose.model('entry', entrySchema);
const UserModel = mongoose.model('user', userSchema);


const testData1 = {
  portionSize: "L",
  mealTypes: ["Lunch", "Dinner"],
  ts: new Date(),
}

const testData2 = {
  portionSize: "S",
  mealTypes: ["Dinner", "Appetizer"],
  ts: new Date(),
}

const testUser0 = {
  userId: "testUser",
  identityProvider: "testIdentityProvider",
  userDetails: "testUserDetails",
}

const testUser = {
  userId: "testUser",
  identityProvider: "testIdentityProvider",
  userDetails: "testUserDetails",
  entries: [
    testData1,
  ]
}

const testUser2 = {
  userId: "testUser",
  identityProvider: "testIdentityProvider",
  userDetails: "testUserDetails",
  entries: [
    testData2,
  ]
}


// console.log(await UserModel.create(testUser0));
// console.log(await UserModel.create(testUser));

const user = await UserModel.findOne({ userId: "testUser" });
user.entries.push(testData2);
const betterUser = await user.save();
betterUser.entries.push(testData1);
const betterUser2 = await betterUser.save();

console.log(betterUser2);
// console.log(await UserModel.create(testUser2));

process.exit()
