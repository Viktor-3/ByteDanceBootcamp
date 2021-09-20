const http = require('http')
const fs = require('fs')
http.createServer((request, response) => 
{
  const{url, method} = request
  if (url === '/' && method === 'GET')
  {
    // index.html
    fs.readFile('index.html', (err, data) => 
    {
      if (err)
      {
        response.writeHead(500, 
          {
            'Content-Type': 'text/plain; charset=utf-8'
          })
          response.end('500 The server is down')
          return 
      }
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
  }
  else 
  {
    response.statusCode = 400
    response.setHeader('Content-Type', 'text/plain; charset=utf-8')
    response.end('404 Not found')
  }
})
.listen(3000, () =>
{
  console.log('Server at 3000')
})

function getPrototypeChain(obj)
{
  const protoChain = [];
  while (obj = Object.getPrototypeOf(obj))
  {
    protoChain.push(obj)
  }
  return protoChain
}
