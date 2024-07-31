/*Programação JavaScript*/
window.onload = function () {
    alert("Criamos uma janela de alerta - doc separado JavaScript")
}

prompt("Digite seu nome: ")

origem = prompt("Informe o seu país de origem: ", "Brasil");

resp = confirm("\n\t\bSerá que vai chover hoje?");

// nome = "Rodrigo";

var nome1 = "Paola";
let numero = 1000;
let nome = "Rodrigo";

console.log("Mostrar o valor da variável -- Números inteiros: %d ", numero);
console.log("Mostrar o nome do usuário -- String: %s ", nome);

function mensagem() {
    alert("Olá");
}

function mensagens(quem1, quem2) {
    alert("\nOlá " + quem1 + ", olá " + quem2);
}

/*
<script language="javascript">
    nome1 = "Pedro";
    nome2 = "João";

    mensagens(nome1, nome2);
</script> 
*/

function media(n1, n2, n3) {
    calculo = (n1 + n2 + n3) / 3;
    return calculo;
}

/*
<script language="javascript">
    resultado = media(3,5,9);
    alert (resultado);
</script> 
*/

let frase = "Família 75";

document.write(frase.length);

if (a > 2) {
    alert("A é maior que 2");
    a = 0;
} else {
    alert("A não é maior que 2");
    a = 5;
}