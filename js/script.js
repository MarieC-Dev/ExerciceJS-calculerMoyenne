/* 
Attendre le chargement du DOM
*/

// Déclaration les fonctions au début
//

//
// Ecouteur d'événement
document.addEventListener('DOMContentLoaded', () =>
{
    /*
    - DEMANDER A L'UTILISATEUR UNE NOTE
    - STOCKER DANS UN TABLEAU LES NOTES AJOUTEES PAR L'UTILISATEUR
    - CALCULER LA MOYENNE DES NOTES
        - FAIRE UNE BOUCLE POUR ADDITIONNER TOUTES LES NOTES
        - DIVISER LE TOTAL DES NOTES PAR LE NOMBRE DE NOTES
    */

    // Déclarations
    let subTitle = document.querySelector('h2');
    let addNote = document.querySelector('#addNote');
    let displayAverage = document.querySelector('.displayAverage');
    let noteList = document.querySelector('#noteList'); // Sélectionner class/id dans le html
    let result = document.querySelector('p'); // Balise pour afficher les résultats

    // Variables du script
    let note = []; // Tableau dans lequel on va stocker les notes
    let total = 0; // Total du tableau
    //
    //
    //

    /*--- Fonctions pour calculer la moyenne ---*/
    let setAverage = () =>
    {
        // Mettre à 0 le total de notes
        total =0;

        // Boucle sur le tableau de note
        for(let item of note)
        {
            total += item;
        };

        // Calculer la moyenne
        // console.log(total/note.length);
        subTitle.innerHTML = '<em>' + total / note.length + ' sur 20<em>';

        // Ajouter la class open sur la balise subTitle
        subTitle.classList.add('open');
    };
    //
    //
    //

    /*--- Lancer IHM ---*/ // L'interface homme-machine
    // Capter le clic sur le button addNote pour ajouter une note
    addNote.addEventListener ('click', () => // Déclarer un événement (ici le clic)
    {
        //console.log('Click'); // Affiche dans la console quand on clique sur le bouton

        // Retirer la class open sur la balise subTitle
        subTitle.classList.remove('open');

        // Changer le contenu de la balise
        subTitle.innerHTML = 'La moyennne est de :';

        // Demander à l'utilisateur d'ajouter une note sur 20
        let newNote = prompt('Ajouter une note sur 20');
        console.log(+newNote); // Pour afficher la note dans la console
        console.log(typeof +newNote);
        // typeof : pour savoir quel type de variable c'est. / Le + ajouter devant une variable change le string en number

        // Convertir un texte en entier (ex : '12' devient 12)
        let convertedNote = +newNote; 

        // Ajouter la note dans le tableau de notes/Vérifier la valeur
        if(isNaN(convertedNote)) // La valeur n'est pas un nombre (Not a Number)
        {
            alert('Ajouter un chiffre !');
        }
        else if(+convertedNote > 20)
        {
            alert('Ajouter une note de 0 à 20.')
        }
        else
        {
            // Ajouter la note au tableau
            note.push(+convertedNote); // .push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.
            // console.log(note);

            // Ajouter la note dans la liste
            noteList.innerHTML += '<li>' + convertedNote + '/20<li>';

            // Vérifier s'il y a au moins deux notes dans le tableau
            if(note.length >= 2)
            {
                // Ajouter la class open sur la balise displayAverage
                displayAverage.classList.add('open');
            };
        };

        // Capter le clic sur la balise .displayAverage
        displayAverage.addEventListener('click', () =>
        {
            // Appeler la fonction qui calcule la moyenne
            setAverage();
        });

    }); // Fin Lancer IHM

}); // Fin de la fonction de chargement du DOM

