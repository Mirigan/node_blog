var User = require('./user');

module.exports.index = function(req, res, next){
  User.find()
    .exec((err, users) => res.json(users));
};

module.exports.find = function(req, res, next){
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch(() => res.sendStatus(404));
};

module.exports.create = function(req, res, next){
  const user = new User(req.body);
  user.save()
    .then((user) => res.json(user))
    .catch((err) => res.status(422).json(err));
};

module.exports.update = function(req, res, next){
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((user) => res.json(user))
    .catch((err) => res.status(422).json(err));
};

module.exports.destroy = function(req, res, next){
  User.findByIdAndRemove(req.params.id)
    .then(res.json({ status: 'ok' }))
    .catch((err) => res.status(422).json(err));
};
