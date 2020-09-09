import app from './server'

// Routers
app.use('/', require('./routes/index').default)
app.use('/users', require('./routes/users').default)
app.use('/account', require('./routes/account').default)

// 404 Error page
app.use((req, res) => {
   res.status(404)
   res.render('error', {layout: 'error.hbs', url: req.url})
})

// Listening the port
app.listen(app.get('port'), () => {
   console.log(`Listening on port ${app.get('port')}`);
})
