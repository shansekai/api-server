require('module-alias/register')
require('dotenv').config()

const { Route } = require('cores/Route')
const { app } = require('./app')

class App extends Route {
    init() {
        const port = process.env.PORT || 4000

        app.enable('trust proxy')
        app.use('/api', super.init())
        app.listen(port, () => {
            console.log(`Server started at port: ${port}`)
        })
    }
}

new App().init()
