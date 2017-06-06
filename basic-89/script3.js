

							


							// Exercice 3 \\
				let source0 ; 
				let source1 = "images/spiderman.jpg";
				let source2 = "images/27_spiderman.gif";
				let source3 = "images/inspiration-gif-design-5.gif";
				$(img_une).attr('src',source1);
				$(img_deux).attr('src',source2);
				$(img_trois).attr('src',source3);

			$('.one_third').on("click",function()
			{


				source0 = source1;
				source1 = source2;
				source2 = source3;
				source3 = source0;
				$(img_une).attr('src',source1);
				$(img_deux).attr('src',source2);
				$(img_trois).attr('src',source3);
			});







/************ Autre solution Exercice 1 *************\
$function()
{
	$(#slider).click('click',function()
	{
		$('#image_slide').attr('src','notre_image')
	
	})
})
*/

/* AUTRE SOLUTIONS :  

$("#slider").click(function() {
        $("#image_slide").attr("src", "https://aboutme.imgix.net/background/users/m/i/k/mikesylvestre_1466689587_94.jpg?q=80&dpr=1&auto=format&fit=max&w=1024&h=512&rect=0,122,1024,512");
    });

    $(".one_third").click(function() {
        /* Execice 1
        let id = $(this).children().attr("id");
        let source;

        if (id == "image1")
            source = "http://totoofficial.com/splash/images/toto-logo.jpg";
        else if (id == "image2")
            source = "http://www.ilovegenerator.com/large/jtm-love-toto-132082952652.png";
        else
            source = "http://www.lmpt.univ-tours.fr/~manu/pages_perso/toto.jpg";

        $(this).children().attr("src", source);

        /* Execice 2 
        let omar = $("#image1").attr("src");
        $("#image1").attr("src", $("#image3").attr("src"));
        $("#image3").attr("src", $("#image2").attr("src"));
        $("#image2").attr("src", omar);
    });
})

*/













