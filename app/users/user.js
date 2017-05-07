var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  nickname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true }
  // password: {
  //     type: String,
  //     required: true,
  //     select: false,
  //     minlength: [6, 'Password must be at least 6 chars long']
  // }
});

var User = mongoose.model('User', userSchema);

module.exports = User
