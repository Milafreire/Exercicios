let meuNome = 'Camila';
let meuSobrenome = 'Freire';
let minhaProfissao = 'Contadora';

//sem template string
console.log(
    'Olá, eu sou ' +
    meuNome =
    ' ' +
    meuSobrenome +
    ' minha profissão é? ' +
    minhaProfissão
    );

//com template string
console.log(`Olá, meu nome é ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProfissao}`);

//operações
console.log(`O resultado da soma de 1 = 1 = ${1+1}`);

//objeto
console.log(`O objeto json ${{chave:'valor'}}`);

let meuObjeto = {
    chave: 'novo valor'
}