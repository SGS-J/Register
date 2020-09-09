import express from 'express'
import { join } from 'path'
import logger from 'morgan'
import { urlencoded, json } from 'body-parser'
import session from 'express-session'
import exphbs from 'express-handlebars'
import passport from 'passport'

// Initializations
import './config/passport'
const server = express()

// Settings
server.set('port', process.env.PORT || 3000)
server.set('views', join(__dirname, '/app/views'))
server.set('view engine', 'hbs')
server.engine('hbs', exphbs({
   extname: 'hbs',
   defaultLayout: 'main.hbs',
   layoutsDir: join(__dirname, '/app/views/layouts'),
   partialsDir: join(__dirname, '/app/views/partials')
})) 
   
// Middlewares
server.use(logger('dev'))
server.use(urlencoded({extended: false}))
server.use(json())
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
server.use(express.static(join(__dirname, '/public')))

export default server
