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