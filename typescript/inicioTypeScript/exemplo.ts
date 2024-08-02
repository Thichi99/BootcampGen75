const constante: number = 2;
let umaVariavel;

let x = function () {
    return "Quero mais férias!!!";
}

interface Magico {
    nome: string;
    nivel: number;

    fazerMagica: (magia: string) => string
}

const joao: Magico = {
    nome: "Joao",
    nivel: 20,
    fazerMagica: (magia: string) => {
        return 'Lançamento ${magia}...';
    }
}

class FrangoFrito {
    sabor: string;
    quantidadeTiras: number;

    constructor(sabor: string, quantidadeTiras: number) {
        this.sabor = sabor;
        this.quantidadeTiras = quantidadeTiras;
    }

    servir(): void {
        console.log('Servindo um frango frito em tiras com sabor ${this.sabor} e uma quantidade de ${this.quantidadeTiras} tiras.')
    }
}

let frangoApimentado = new FrangoFrito("apimentado", 5);
frangoApimentado.servir();