console.log("Hello from TS !");
var FigureGeometrique = /** @class */ (function () {
    function FigureGeometrique(couleur) {
        this.couleur = couleur;
    }
    FigureGeometrique.prototype.getCouleur = function () {
        return this.couleur;
    };
    FigureGeometrique.prototype.setCouleur = function (couleur) {
        this.couleur = couleur;
    };
    return FigureGeometrique;
}());
var figure = new FigureGeometrique("rouge");
console.log(figure.getCouleur());
