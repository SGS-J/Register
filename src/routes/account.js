const router = require('express').Router()
const {checkAuth} = require('../helpers/auth')
const {renderAccount, logoutUser} = require('../app/controllers/account.controller')

router.get('/main', checkAuth, renderAccount)
router.get('/logout', logoutUser)

module.exports = router