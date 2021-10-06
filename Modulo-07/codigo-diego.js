const fs = require('fs')
const path = './'

console.log(fs.readdirSync(path), 'Síncrono')

fs.readdir(path, ver.bind(null, path, 'outro'))
fs.readdir(path, (err, sucess) => ver('', '', err, sucess))

function ver(caminho, outro, err, sucess) {
  console.log('listing path', caminho, outro)
  if (err) {
    console.log(err)
  } else {
    console.log(sucess)
  }
}
