
// slider ou caroussel\\

$(function()// Toujours mettre "$function()" lorsque l'on utilise jquery 
	{
		let index = 0;
		let tableauImage =['images/spiderman.jpg','images/inspiration-gif-design-5.gif','',];

     setInterval(function(){
     	$('#main_img').attr('src',tableauImage[index]);
     	index++;
     	if(index == tableauImage.length
     		index = 0;


     },3000) 

     $('#slider').click(function())
 	{

 	}
    
            
 

	

	