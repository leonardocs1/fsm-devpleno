// global scope
// local

const scopeGlobal = 1

function teste() {
  // local scope #1
  const var0 = 20
  function outroTeste() {
    const var1 = 10
    console.log(var0, var1)
  }
  if (var0 === 20) {
    // scope #3
    const scope3 = 1122
  }
  for (let i = 0; i < 10; i++) {
    // scope #4
    console.log(i)
  }
  // console.log(scope3)
  outroTeste()
}
teste()
