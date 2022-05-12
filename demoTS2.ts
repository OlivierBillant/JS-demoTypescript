console.log("Hello from TS !");

abstract class FigureGeometrique {
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

    abstract calculAire():number;
}

class Carre extends FigureGeometrique{
    private cote:number;

    constructor(couleur:string, cote:number) {
        super(couleur);
        this.cote = cote;
    }

    getNombreCote():number{
        return this.cote;
    }

    calculPerimetre():number{
        return 4*this.cote;
    }

    calculAire(): number {
        return this.cote*this.cote;
    }
}

//Ayant passe la classe Figure en abstract, on ne peut plus l'instancier
// let figure = new FigureGeometrique("rouge");
// console.log(figure.getCouleur());

let nouveauCarre = new Carre("bleu", 3);
console.log("Le périmètre du carré est de : "
            +nouveauCarre.calculPerimetre()+" et sa couleur est : "
            +nouveauCarre.getCouleur()+" et sa surface est de "
            +nouveauCarre.calculAire());
