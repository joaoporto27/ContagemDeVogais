let frase = 'Pneumoultramicroscopicossilicovulcanoconiótico';

let letras = frase.split('');

let vogais = letras.filter((Letra) => ['a', 'e', 'i', 'o', 'u'].includes(Letra.toLowerCase()));

console.log('As vogais são: ' + vogais.join(', '));

console.log('O número total de vogais é: ' + vogais.length);

//Lógica Escrita:
//1 . Definimos a frase queríamos
//2 . Separamos a frase letra por letra
//3 . Depois criamos a variável vogais e usamos o .filter() para filtrar as vogais, em seguida usamos o .incluedes() que serve para incluir a letra maiúscula no array e o .toLowerCase() para mudar tudo para letra minúscula
//4 . Enfim criamos o console.log() para exibir as vogais junto com a mensagem
//5 . E depois criamos outro console.log() para exibir o total de vogais junto com a mensagem