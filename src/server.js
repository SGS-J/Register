const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')
const exphbs = require('express-handlebars')
const passport = require('passport')

// Initializations
const server = express()
require('./config/passport')

// Settings
server.set('port', process.env.PORT || 3000)
server.set('views', path.join(__dirname, '/views'))
server.set('view engine', 'hbs')
server.engine('hbs', exphbs({
   extname: 'hbs',
   defaultLayout: 'main.hbs',
   layoutsDir: path.join(__dirname, '/views/layouts'),
   partialsDir: path.join(__dirname, '/views/partials')
})) 
   
// Middlewares
server.use(logger('dev'))
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(session({
   secret: 'secret',
   resave: true,
   saveUninitialized: true 
}))
server.use(passport.initialize())
server.use(passport.session())

// Local Variables
server.use((req, res, next) => {
   res.locals = {
      user: req.user || null
   }
   next()
})

// Static files
server.use(express.static(path.join(__dirname, '/public')))

module.exports = server
