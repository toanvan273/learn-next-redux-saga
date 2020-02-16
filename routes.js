const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index','/')
routes.add('post', '/blog/:slug')
routes.add('about')
routes.add({name:'users',pattern:'/users',page:'users'})
routes.add({name:'addUser',pattern:'/users/add',page:'users/add'})
routes.add('clock')