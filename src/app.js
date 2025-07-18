const path = require('path')
const express = require('express')
const { route } = require('./routes')
const handlebars = require('express-handlebars')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Connect to db before handle request
// require('./configs/db')

//Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('view', path.join(__dirname, 'views'))

// Public static folder
app.use(express.static(path.join(__dirname, 'public')))

//Router
route(app);

module.exports = app;