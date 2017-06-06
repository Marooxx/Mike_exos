$(function()
	{
		
	$("#main_img").on("click",function()
		{
			
			if ($('#main_img').attr('src')== "images/demo/960x360.gif") {

				$('#main_img').attr('src', 'https://www.w3schools.com/w3images/fjords.jpg');
			}
			else{

				$('#main_img').attr('src', 'images/demo/960x360.gif');
			}

			
		});
	});


