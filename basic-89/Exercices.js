$(function() {

    $("#slider").click(function() {
        $("#image_slide").attr("src", "https://aboutme.imgix.net/background/users/m/i/k/mikesylvestre_1466689587_94.jpg?q=80&dpr=1&auto=format&fit=max&w=1024&h=512&rect=0,122,1024,512");
    });

    $(".one_third").click(function() {
        /* Exercice 1
        let id = $(this).children().attr("id");
        let source;

        if (id == "image1")
            source = "http://totoofficial.com/splash/images/toto-logo.jpg";
        else if (id == "image2")
            source = "http://www.ilovegenerator.com/large/jtm-love-toto-132082952652.png";
        else
            source = "http://www.lmpt.univ-tours.fr/~manu/pages_perso/toto.jpg";

        $(this).children().attr("src", source);*/

        /* Execice 2 */
        let omar = $("#image1").attr("src");
        $("#image1").attr("src", $("#image3").attr("src"));
        $("#image3").attr("src", $("#image2").attr("src"));
        $("#image2").attr("src", omar);
    });


})