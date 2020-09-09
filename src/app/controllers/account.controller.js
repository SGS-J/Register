const accountController = {}

accountController.renderAccount = (req, res) => {
   res.render('account', {username: req.user.username})
}; 

accountController.logoutUser = (req, res) => {
  req.logOut();
  res.redirect("/users/signin");
};

module.exports = accountController