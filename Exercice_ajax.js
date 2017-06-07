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

<?php

require"crudd.php";// on met le require au dessus pour recuperer les categories
  $mydb = new Post("localhost", "root", "", "vehicule");

   if(!empty($_POST))
   	{  
   		echo " <p> Votre formulaire a été validé ";

   	}
   	else
   	{
   		echo "<p> Veuillez remplir les champs vides";
   	}