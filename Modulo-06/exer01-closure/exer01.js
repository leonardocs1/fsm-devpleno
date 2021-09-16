/*
1) Qual o resultado da execução deste trecho de código e porquê?

function test() {
  console.log(a)
  console.log(foo())

   var a = 1
   function foo() {
      return 2
   }
}

test()
**/

/*
Resultado: undefined 2
Quando a variável 'var a' é chamada, no console será exibido 'undefined', pois, no Js ocorre o chamado hosting.
Mesmo 'var a' ter sido chamada antes da declaração, o Js eleva a declaração, sendo assim, não ocorre erro na execução.
**/