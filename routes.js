const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index','/')
routes.add('post', '/blog/:slug')
routes.add('about')
routes.add('users')
routes.add('clock')