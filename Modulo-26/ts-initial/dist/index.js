var tulio = {
    nome: 'Tulio',
    sexo: 'm',
    idade: '10',
    teste: 10
};
function ola(pessoa) {
    console.log('ola', pessoa.nome);
}
ola({ nome: 'teste', sexo: 'm', idade: 10 });
