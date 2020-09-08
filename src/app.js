const app = require('./server')

// Routers
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))
app.use('/crud', require('./routes/crud'))

// 404 Error page
app.use((req, res) => {
   res.status(404)
   res.render('error', {layout: 'error.hbs', url: req.url})
})

// Listening the port
app.listen(app.get('port'), () => {
   console.log(`Listening on port ${app.get('port')}`);
})
