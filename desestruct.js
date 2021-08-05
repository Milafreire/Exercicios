const pessoa = {
nome: 'Camila',
sobrenome: 'Barros',
idade: 29,
profissao: 'Contadora'
};
console.log(pessoa);

//1ª forma
//let nome = pessoa.nome;
//let sobrenome = pessoa.sobrenome;
//let idade = pessoa.idade;
//let profissao = pessoa.profissao;

//usando o desestruct:
let { nome, sobrenome, idade, profissao } = pessoa;
console.log(nome, sobrenome, idade, profissao);

