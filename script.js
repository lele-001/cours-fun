"use strict";

//Bouton de validation
$(document).ready(() => {
    $("#valider").on("click", () => {
        let taille = +$("[name=taille]").val();
        let tailleC = Math.pow(taille, 2);
        let poids = +$("[name=poids]").val();

        let result = poids / tailleC;
        
        //Suppression de la classe .ligneTab
        $(".ligneTab").removeClass("ligneTab");

        //Description IMC + ajout classe .ligneTab -> couleur de la ligne du tableau
        let desc = "";

        if(result < 16.5){
            desc = "dénutrition";
            $("#row1").addClass("ligneTab");
        }
        else if(result >= 16.5 && result < 18.5){
            desc = "maigreur";
            $("#row2").addClass("ligneTab");
        }
        else if(result >= 18.5 && result < 25){
            desc = "poids normal";
            $("#row3").addClass("ligneTab");
        }
        else if(result >= 25 && result < 30){
            desc = "surpoids";
            $("#row4").addClass("ligneTab");
        }
        else if(result >= 30 && result < 35){
            desc = "obésité modéré";
            $("#row5").addClass("ligneTab");
        }
        else if(result >= 35 && result < 40){
            desc = "obésité sévère";
            $("#row6").addClass("ligneTab");
        }
        else if(result >= 40){
            desc = "obésité morbide";
            $("#row7").addClass("ligneTab");
        }

        //Ajout du résultat
        $("#res").text(`Vous faites : ${taille}m pour ${poids}kg. Votre indice de masse corporelle est donc de ${result.toFixed(1)} ce qui équivaut à ${desc}`);

        //Ajout du tableau dynamique
        const cache = $(".hidden");
        $(cache).removeClass("hidden");

        //Valeurs poids
        let vPoids = {
            valeur1: (16.5*tailleC).toFixed(0),
            valeur2: (18.5*tailleC).toFixed(0),
            valeur3: 25*tailleC.toFixed(0),
            valeur4: 30*tailleC.toFixed(0),
            valeur5: 35*tailleC.toFixed(0),
            valeur6: 40*tailleC.toFixed(0),
        };

        $(".valeur1").text(`${vPoids.valeur1}`);
        $(".valeur2").text(`${vPoids.valeur2}`);
        $(".valeur3").text(`${vPoids.valeur3}`);
        $(".valeur4").text(`${vPoids.valeur4}`);
        $(".valeur5").text(`${vPoids.valeur5}`);
        $(".valeur6").text(`${vPoids.valeur6}`);

        //localStorage
        function appendToStorage(val1, val2){
            

        }
    });
    
});