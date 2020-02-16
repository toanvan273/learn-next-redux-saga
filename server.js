const next = require('next')
const routes = require('./routes')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)

// express
const express = require('express')
app.prepare()
    .then(() => {
        const server = express()
        // server.use(handler).listen(3000)
        server.use(handler)
        server.get('*', (req, res) => {
            return handler(req, res)
        })
        server.get('/about/:id', (req, res) => {
            const params = { id: req.params.id };
            return app.render(req, res, '/about', params);
        });

        server.listen(9000, err => {
            if (err) throw err
            console.log(`Hello Ready on http://localhost:9000`);
        })
    }
    )

// // no need express
// const {createServer}=require('http')
// app.prepare().then(()=>{
//     createServer(handler).listen(3000)
// })

//------------------

// const express = require('express') // Sử dụng framework express
// const next = require('next') // Include module next

// const port = parseInt(process.env.PORT, 10) || 3000 // Port để chạy app Nextjs, cũng là server nodejs
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   const server = express()

// //Tạo ra các router. Dòng này có ý nghĩa khi gửi request đến path /a . Sẽ render file /a.js trong thư mục pages/a.js của Nextjs
//   server.get('/', (req, res) => {
//     return app.render(req, res, '/', req.query)
//   })

// // Nếu các bạn muốn các routing tự động liến kết đến route files giống với cấu trúc của Nextjs thì chỉ cần thêm 3 dòng bên dưới
// // https://nextjs.org/docs/routing/introduction
//   server.all('*', (req, res) => {
//     return handle(req, res)
//   })

//   server.listen(port, err => {
//     if (err) throw err
//     console.log(`> Ready on http://localhost:${port}`)
//   })
// })