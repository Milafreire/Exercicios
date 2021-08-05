const textoNaoEstruturado = 'Meu CPF é 123.456.678-10';
const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');
console.log(textoNaoEstruturado.match(regex));