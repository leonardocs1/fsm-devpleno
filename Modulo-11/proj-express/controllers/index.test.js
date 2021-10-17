const indexController = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index controller', () => {
  it('home', () => {
    let res = {
      render: function () { }
    }
    let data =
    {
      time: 10,
      lista: ['Tulio', 'Faria', 'Teste'],
      animais: [
        { name: 'Teca' },
        { name: 'Tica' },
        { name: 'Branca' },
        { name: 'Tiazinha' },
        { name: 'Bolinha' }
      ]
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('home', data)
    indexController.home({}, res)
  })
  it('pagina1', () => {
    let res = {
      send: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Fullstack Master')
    indexController.pagina1({}, res)
  })
  it('handles without num1 and num2', () => {
    let res = {
      render: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('erro')
    indexController.calc({ query: {} }, res)
  })
  it('handles witout num1', () => {
    let res = {
      render: function () { }
    }
    let req = {
      query: {
        num2: '10'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('erro')
    indexController.calc(req, res)
  })
  it('handles witout num2', () => {
    let res = {
      render: function () { }
    }
    let req = {
      query: {
        num1: '10'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('erro')
    indexController.calc(req, res)
  })
  it('calcs', () => {
    let res = {
      render: function () { }
    }
    let req = {
      query: {
        num1: '10',
        num2: '20'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('calc', { soma: 30 })
    indexController.calc(req, res)
  })
})