const router = require('express').Router()
const {checkAuth} = require('../helpers/auth')

router.get('/', checkAuth, (req, res) => {
   res.render('crud', {username: req.user.username})
})

module.exports = router