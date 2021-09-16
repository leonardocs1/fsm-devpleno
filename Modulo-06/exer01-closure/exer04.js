/*
4) O que sairá no console neste exemplo a seguir:

var a = 1
function b() {
    a = 10
    return;
    function a() {}
}
b()
console.log(a)
 **/

/*
  R: 1
  Na chamada 'b()', a variavél 'a' se refere a 'function a()' que está dentro de 'function b()', ou seja,
  a variável 'a' externa não tem relação com 'function a()' declarada dentro da função.
**/