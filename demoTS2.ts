console.log("Hello from TS !");

class FigureGeometrique {
    private couleur:string;

    constructor(couleur:string) {
    this.couleur = couleur;
    }

    getCouleur():string {
        return this.couleur;
    }

    setCouleur(couleur: string){
        this.couleur = couleur;
    }
}

let figure = new FigureGeometrique("rouge");

console.log(figure.getCouleur());