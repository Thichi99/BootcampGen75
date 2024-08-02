var constante = 2;
var umaVariavel;
var x = function () {
    return "Quero mais férias!!!";
};
var joao = {
    nome: "Joao",
    nivel: 20,
    fazerMagica: function (magia) {
        return 'Lançamento ${magia}...';
    }
};
var FrangoFrito = /** @class */ (function () {
    function FrangoFrito(sabor, quantidadeTiras) {
        this.sabor = sabor;
        this.quantidadeTiras = quantidadeTiras;
    }
    FrangoFrito.prototype.servir = function () {
        console.log('Servindo um frango frito em tiras com sabor ${this.sabor} e uma quantidade de ${this.quantidadeTiras} tiras.');
    };
    return FrangoFrito;
}());
var frangoApimentado = new FrangoFrito("apimentado", 5);
frangoApimentado.servir();
