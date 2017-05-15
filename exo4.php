<?php
if(!empty($_POST))
	{

		if(!empty($_POST))
	{	

	$mike= explode(" ",rtrim($_POST["Mike"]));
		// rtrim() permet de supprimer les espaces à la fin de la chaîne de caractère
		// trim() permet de supprimer les espaces au début et la fin de la chaîne caractére

	if(count($mike)<2)// sans crochet , c'est qu'il y a qu'une seule instruction
		{
		echo " Nombre de paramètre(s) pas assez important";
		}
	elseif(count($mike)>2)
		{
		echo "Nombre de paramètre(s) sont trop importants";
		}
	elseif($mike[0] !="Mike")
		{
		echo "Premier valeur incorrect";
		}	
	elseif(!ctype_digit($mike[1]))
		{
			echo "Votre paramètre $mike[1] n'est pas correct";
		}
	
	elseif($mike[1]%2)/* on divise le résultat de la variable par 2 -- si c'est un multiple de 2
	on lance le echo*/ 

		{
			echo "C' est impaire";
		}

	else// si le résultat n'est pas un multiple de 2 ** c'est impaire
		{
		echo "C' est paire";
		}
	}
		
		
	}







?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">

		<title> Piscine </title>
		
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	</head>
	<body>
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<form method="post">
					<div class="form-group">
						<label for="text">Entre votre valeur:</label>
						<input type="text" class="form-control" id="Mike" name="Mike">
					</div>
					<button type="submit" class="btn btn-default">Submit</button>
				</form>
			</div>
		</div>
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	</body>
</html>