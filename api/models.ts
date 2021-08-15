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

module.exports = mongoose.model('user', userSchema);
