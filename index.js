const http = require('http')
const {join} = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // console.log(req.url)
  //
  // res.write('<h1>hello from node js ))0)</h1>')
  // res.write('<h2>hello from node js ))0)</h2>')
  // res.write('<h3>hello from node js ))0)</h3>')
  //
  // res.end(`
  //   <div style="background-color: red; width: 100px; height: 100px;">
  //     <h1>test</h1>
  //   </div>
  // `)

  if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    const sendPage = (file) => {
      fs.readFile(
        join(__dirname, 'views', file),
        'utf-8',
        (err, content) => {
          if (err) throw err

          res.end(content)
        }
      )
    }

    switch (req.url) {
      case '/':
        sendPage('index.html')
        // fs.readFile(
        //   join(__dirname, 'views', ),
        //   'utf-8',
        //   (err, content) => {
        //     if (err) throw err
        //
        //     res.end(content)
        //   }
        // )
        break
      case '/about':
        sendPage('about.html')
        // fs.readFile(
        //   join(__dirname, 'views', 'about.html'),
        //   'utf-8',
        //   (err, content) => {
        //     if (err) throw err
        //
        //     res.end(content)
        //   }
        // )
        break
      case '/api/users':
        res.writeHead(200, {
          'Content-Type': 'text/json'
        })

        const users = [
          {name: 'Tolik', age: 21},
          {name: 'Vika', age: 16}
        ]

        res.end(JSON.stringify(users))
    }
  }
  if (req.method === 'POST') {
    const body = []
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'

    })

    req.on('data', data => {
      body.push(Buffer.from(data))
    })

    req.on('end', () => {
      console.log(body.toString())

      const message = body.toString().split('=')[1]

      res.end(`
        <h1>Ваше повідомлення: ${message}</h1>  
      `)
    })
  }
})

server.listen(3000, () => {
  console.log('server is on')
})