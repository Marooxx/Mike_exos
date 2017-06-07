$(function()
{

	$('a').on('click',function() 
		{
			event.preventDefault();
			$(this).hide();
			let text = $(this).prev().text();
			$(this).prev().text('modification le texte');
			$(this).prev().append('fdhdfhfdshsd');// 
			
			//$(this).text('Omar');// this va agir sur l'élément sur lequel on va  cliquer
		});

});






