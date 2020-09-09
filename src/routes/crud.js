const router = require('express').Router()
const {checkAuth} = require('../helpers/auth')
const {renderCrud} = require('../app/controllers/crud.controller')

router.get('/', checkAuth, renderCrud)

module.exports = router