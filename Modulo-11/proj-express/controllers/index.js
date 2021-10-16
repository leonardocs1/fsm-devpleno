const home = (req, res) => {
  res.render('home', {
    time: new Date().getTime()
  })
}
const pagina1 = (req, res) => {
  res.send('Fullstack Master')
}
const calc = (req, res) => {
  if (req.query.num1 && req.query.num2) {
    const { num1, num2 } = req.query
    const soma = parseFloat(num1) + parseFloat(num2)
    res.render('calc', { soma })
  } else {
    res.send('Calculadora')
  }
}

const par = (req, res) => {
  const isPar = (req.params.num % 2) === 0
  if (isPar) {
    res.send('O número é par')
  } else {
    res.send('O número é impar')
  }
}

module.exports = {
  home,
  pagina1,
  calc,
  par
}