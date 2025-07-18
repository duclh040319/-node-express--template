const homeRouter = require('./api/home.route')
function route(app) {
    app.use('/', homeRouter)
}

module.exports = { route }