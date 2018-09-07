const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String
  },
  googleId: {
    type: String
  },
  githubId: String,
  email: {
    type: String
  },
  age: {
    type: Number
  },
  image: {
    type: String
  }
});

module.exports = User = mongoose.model("user", UserSchema);
