	$(function () 
	{
		$("form").on("submit",function(e)
			{// pour choisir quand est ce que je veux déclencher l'action de la fonction , je place un event default.
			//syntax : 
			e.preventDefault();// il est obligatoire lorsque l'on fait de l' Ajax.
			alert("Mike");

			if($("#prependedtext").val()=="")// pour récupérer une valeur en Jquery, on utilise la fonction "val()"
				{
				//console.log("Fail input");
				alert( "Fail input");
				$("#danger").removeClass("hidden");
				

				}

			  else if($("#textarea").val()=="default text" || $("#textarea").val()==" "  )// on met ce qui est dans  l'attribut "value" pour controler le textarea
				{
				//console.log("Fail");
				alert(" Veuillez remplir le texte area");
				$("#danger").removeClass("hidden");
				
				}
			else if($("#selectmultiple").val()== null)
				{// Autre solution => if($("#selectmultiple option : selected").text())
					//console.log("Fail 2");
					alert("Veuillez faire votre séléction");
					$("#danger").removeClass("hidden");
				
				}
				else {
				$("#success").removeClass("hidden");
				}


				
		})

		
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		// A chaque sélection de fichier
		$('#theForm').find('input[name="image"]').on('change', function (e) {
			var files = $(this)[0].files;
	 
			if (files.length > 0) {
				// On part du principe qu'il n'y a qu'un seul fichier
				// étant donné que l'on a pas renseigné l'attribut "multiple"
				var file = files[0],
					$image_preview = $('#image_preview');
	 
				// Ici on injecte les informations recoltées sur le fichier pour l'utilisateur
				$image_preview.find('.thumbnail').removeClass('hidden');
				$image_preview.find('img').attr('src', window.URL.createObjectURL(file));
				$image_preview.find('h4').html(file.name);
				$image_preview.find('.caption p:first').html(file.size +' bytes');
			}
		});
	 
		// Bouton "Annuler" pour vider le champ d'upload
		$('#image_preview').find('button[type="button"]').on('click', function (e) {
			e.preventDefault();
	 
			$('#theForm').find('input[name="image"]').val('');
			$('#image_preview').find('.thumbnail').addClass('hidden');
		});
	});