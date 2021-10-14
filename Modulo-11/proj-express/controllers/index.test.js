const indexController = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index controller', () => {
  it('home', () => {
    let res = {
      send: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Fullstack Master')
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
  it('calc', () => {
    let res = {
      send: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Calculadora')
    indexController.calc({ query: {} }, res)
  })
  it('handles witout num1 and num2', () => {
    let res = {
      send: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Calculadora')
    indexController.calc({ query: {} }, res)
  })
  it('handles witout num1', () => {
    let res = {
      send: function () { }
    }
    let req = {
      query: {
        num2: '10'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Calculadora')
    indexController.calc(req, res)
  })
  it('handles witout num2', () => {
    let res = {
      send: function () { }
    }
    let req = {
      query: {
        num1: '10'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Calculadora')
    indexController.calc(req, res)
  })
  it('calcs', () => {
    let res = {
      send: function () { }
    }
    let req = {
      query: {
        num1: '10',
        num2: '20'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Soma: 30')
    indexController.calc(req, res)
  })
})