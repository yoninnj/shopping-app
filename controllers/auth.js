const user = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login'
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("60e2f5db6a7bcafde0cadcd6")
  .then(user => {
    req.session.isLoggedIn =true;
    req.session.user = user;
    res.redirect('/');
  })
  .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err)=>{
      res.redirect('/');
  })
};
