//Declaration d'une classe mere
let Sport = function(nom, description){
    this.nom = nom;
    this.description = description;

    //definir des fonctions
    this.afficher = function(){
        console.log(this.nom + " " +this.description);
    }
}

//Declaration d'une classe fille
let SportDeCompetition = function(nom, description, niveau){
    //appel au constructeur de la classe mere
    Sport.call(this, nom, description);
    //definition des attributs propres
    this.niveau = niveau;
}

let rugby = new SportDeCompetition("rugby", "sport avec un ballon ovale", "international")
console.log(rugby);
rugby.afficher();

//Cette syntaxe est maintenant depreciee et a evolue vers les normes ECMAScript depuis juin 2007
//Avec la version 6 : Ont notamment été rajoutés la possibilité de de créer des classes, des tableaux, des promesses...
