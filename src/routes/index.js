const router = require('express').Router()
const {renderIndex} = require('../app/controllers/index.controller')

router.get('/', renderIndex)

module.exports = router