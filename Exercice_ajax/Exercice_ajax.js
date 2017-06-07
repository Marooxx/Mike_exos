/*Créer un formulaire premettant d'ajouter des voitures dans la base de donnée
// Champs: 
-Marque
-Modele
- Année
- Nb de porte
- couleur
- Nb de place

Formulaire soit fait en Ajax et qu'il gère les messages d'erreur et de réussite
*/

$(function(){
	


	$('.form-horizontal').on('submit', function(e) {
        e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire
 
        var $this = $(this);
 
        var modele = $('#model').val();
        var nbr_porte = $('#nbr_porte').val();
        var nbr_place = $('#nbr_place').val();
        var marque = $('#marque').val();
        var couleur = $('#couleur').val();
        var annee = $('#annee').val();
 
        if(modele === '' || mail === '') {
            alert('Les champs doivent êtres remplis');
        } else {
            $.ajax({
                url: 'exercice_ajax.php',
                method : "POST"
                
                dataType: 'json', // JSON
                success: function(json) {
                    if(json.reponse === 'ok') {
                        alert('Tout est bon');
                    } else {
                        alert('Erreur : '+ json.reponse);
                    }
                }
            });
        }
    });
});
















})