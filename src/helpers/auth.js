const helpers = {}

helpers.checkAuth = (req, res, next) => {
   req.isAuthenticated() ? next() : res.redirect('/users/signin')
}

export default helpers.checkAuth
