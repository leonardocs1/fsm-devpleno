/*
3) Qual o resultado? Explique sua resposta.

var fullname = 'Tulio Faria'
var obj = {
   fullname: 'Jose Silva',
   prop: {
      fullname: 'Nome Sobrenome',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname())

var test = obj.prop.getFullname

console.log(test())
**/
/*
  R: 'Nome Sobrenome, undefined'.
  Quando o 'console.log(obj.prop.getFullname())' é chamado, o resultado será 'Nome Sobrenome', pois o 'this' está no contexto de 'obj.prop'.
  Quando test() é chamado, o resultado será 'undefined', pois 'this' está com o valor de contexto global e no mesmo não existe valor.
 **/