<?php

//require'crudd.php';
// créé une instance ==> $variable = new nom_de_la_class
$mydb = new Crud("localhost","root","","vehicule");

if(!empty($_POST))// GET et POST existeront tjs donc on verifie si les champs sont remplis avec "empty()"
		{
			if(empty($_POST['modele']))
			{
				echo " Veuillez remplir le champs 'modele' ";
			}

			elseif(empty($_POST['nbr_porte']))
			{
				echo " Veuillez informer le champs 'nombre de porte' ";
			}

			elseif(empty($_POST['nbr_place']))
			{
				echo " Veuillez indiquer le nombre de place ";
			}

			elseif(empty($_POST['marque'])
			{
				echo " Veuillez renseigner la marque de votre voiture";
			
			}
			
			elseif(empty($POST['couleur']))
			{
				echo " quelle est la couleur de votre véhicule";
			}
			
			elseif(empty($POST['annee'])
			{
				echo "quelle est l\'année de votre véhicule ?";
			}
			
			else
			{
				require"crudd.php";
			    $mydb = new Crud("localhost", "root", "", "vehicule");
			    $mydb->create($_POST, "voiture");
			      echo '<ul class="list-group">
                    <li class="list-group-item list-group-item-success">Votre formulaire  a été validé</li>
                </ul>';
			}
				


			   
			    
		}



		class voiture
		{
			private $modele;
			private $nbre_porte;
			private $nbr_place;
			private $marque;
			private $couleur;
			private $annee;
			

		public function __construct($new_modele,$new_nbre_porte,$new_nbre_place,$new_marque,$new_couleur,$new_annee)

			$this->modele=$new_modele;
			$this->nbre_porte=$new_nbre_porte;
			$this->nbr_place=$new_nbre_place;
			$this->marque=$new_marque;
			$this->couleur=$new_couleur;
			$this->annee=$new_annee;
			
		$resultat = $mysqli->query("INSERT INTO voiture(modele,nbre_porte,nbre_place,marque,couleur,annee) VALUES('$_POST[modele]','$_POST[nbre_porte]','$_POST[nbr_place]','$_POST[marque]','$_POST[couleur]','$_POST[annee]')");
			if($resultat)
			{
				$msg .= '<p style="color:write;background:green;padding:5px;"> Le formualire '.$_POST.' a bien été ajouté à la base de donnée ! </p>';
			}

		}
		
		

?>


