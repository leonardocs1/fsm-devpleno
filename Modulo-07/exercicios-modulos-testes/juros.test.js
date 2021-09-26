const juros = require('./juros.js')

test('jurosSimples', () => {
  const c = 100
  const i = 0.10
  const t = 1
  const jurosEsperado = 10
  const res = juros.jurosSimples(c, i, t)
  expect(res).toBe(jurosEsperado)
})

test('montanteSimples', () => {
  const c = 100
  const i = 0.1
  const t = 1
  const jurosSimples = jest.fn()
  jurosSimples.mockImplementation(() => 10)
  const montanteSimples = juros.pure.montanteSimples({ jurosSimples })
  const montante = montanteSimples(c, i, t)
  expect(jurosSimples.mock.calls[0]).toEqual([c, i, t])
  expect(montante).toBe(110)
})

test('montanteComposto', () => {
  const c = 1000
  const i = 0.10
  const t = 1
  const montanteCompostoEsperado = 1100
  const jurosCalc = juros.montanteComposto(c, i, t)
  expect(jurosCalc).toBe(montanteCompostoEsperado)
})

test('jurosComposto', () => {
  const c = 1000
  const i = 0.10
  const t = 1
  const jurosEsperado = 100
  const montanteComposto = jest.fn()
  montanteComposto.mockImplementation(() => 1100)
  const jurosComposto = juros.pure.jurosComposto({ montanteComposto })
  const jurosCalc = jurosComposto(c, i, t)
  expect(montanteComposto.mock.calls[0]).toEqual([c, i, t])
  expect(jurosCalc).toBe(jurosEsperado)
})
