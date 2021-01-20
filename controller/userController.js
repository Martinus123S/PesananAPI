
const userModel = require('../model/user');
const crypto = require('crypto');

const register = (req,res)=>{
    const newUser = new userModel(req.body);
    var salt = crypto.randomBytes(16).toString('hex');
    console.log('salt -> ' + salt);
    console.log('Password -> ' + req.body.password);
  
    var hash = crypto
      .createHmac('sha256', salt)
      .update(req.body.password)
      .digest('hex');
  
    console.log('hash ->' + hash);
    newUser.password = salt + '$' + hash;

    userModel.findOne(
        {
          email: req.body.email,
        },
        (err, user) => {
          if (err) throw err;
          if (user) {
            res
              .status(400)
              .json({ message: "Can't make account. Email already on system" });
          } else if (!user) {
            newUser.save((err, user) => {
              if (err) {
                return res.status(400).send({ message: err });
              } else {
                user.hashPassword = undefined;
                return res.status(200).json({
                  message: 'Account successfull created',
                  userId: newUser._id,
                });
              }
            });
          }
        }
      );
}

const login = (req,res)=>{
    userModel.findOne(
        {
          email: req.body.email,
        },
        (err, user) => {
          if (err) throw err;
          if (!user) {
            return res
              .status(401)
              .json({ message: 'Authentication failed. No user found!' });
          } else if (user) {
            var passwordField = user.password.split('$');
            var salt = passwordField[0];
            var hash = crypto
              .createHmac('sha256', salt)
              .update(req.body.password)
              .digest('hex');
            if (!(hash === passwordField[1])) {
              return res
                .status(401)
                .json({ message: 'Authentication failed. Wrong password!' });
            } else {
              //jwt
              return res.status(200).json({
                message:'Anda berhasil Login',
                user:user
              });
            }
          }
        }
      );
}

module.exports = {
    login,
    register
}