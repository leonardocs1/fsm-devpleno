const http = require('http')
const server = http.createServer((req, res) => {
  res.end(`<html>

  <head>
    <title>PureCSS</title>
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css"
      integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossorigin="anonymous">
  </head>
  
  <body>
    <h1>PureCSS </h1>
    <p>
      <a class="pure-button" href="#">A Pure Button</a>
    </p>
    <table class="pure-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Honda</td>
          <td>Accord</td>
          <td>2009</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Toyota</td>
          <td>Camry</td>
          <td>2012</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Hyundai</td>
          <td>Elantra</td>
          <td>2010</td>
        </tr>
      </tbody>
    </table>
  </body>
  
  </html>`)
})
server.listen(3000)