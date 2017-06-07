// Code récupérer sur sharecode de Komakan

$(function(){
	
	let index = 0;
	let dataJson;
	let tableuImg = ["images/zoro.png","images/usoppkabuto.png","images/sanji.png","images/nami.png","images/chopper.png","images/robin.png","images/francky.png","images/brook.png","images/luffy.jpg"];
	

	setInterval(function(){
		
		$("#slider-img").attr("src", tableuImg[index]);
		
		index++;
		
		if(index == (tableuImg.length))
			index =0;
	},2000)
	
	$(".one_third").click(function(){
		let source;
		let first = $("#image1").attr("src");
		let second = $("#image2").attr("src");
		let third = $("#image3").attr("src");
		
		source = first;
		$("#image1").attr("src", third);
		$("#image3").attr("src", second);
		$("#image2").attr("src", source);
	
	})
	
	
	$(".more").click(function(e){
		e.preventDefault();
		if($(this).children().text() != "<< Less"){
			$(this).children().text("<< Less");
			let text = $(this).prev().text();
			for (let a = 0; a < 4; a++){
				if (text == dataJson[a].body.substring(0, 50) + "..."){
					$(this).prev().text(dataJson[a].body)
					break;
				}
			}	
		}
		else{
			initText();
		}
	})
	
		// $(this).text("rit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla");	
	
	

	function initText(){
		$.ajax({
			url: "http://jsonplaceholder.typicode.com/posts",
			method: "GET"
		})
		.done(function(data){	
			// console.log($(".one_quarter > strong")[0]); en Jquery on ne peut pas utiliser les [] pour utiliser une fonction nous devons utiliser .eq(valeur) pour parcourir un array
			$(".one_quarter > strong").eq(0).text(data[0].title);
			$(".one_quarter > strong").eq(1).text(data[1].title);
			$(".one_quarter > strong").eq(2).text(data[2].title);
			$(".one_quarter > strong").eq(3).text(data[3].title);
			
			$(".desc").eq(0).text(data[0].body.substring(0, 50) + "...");
			$(".desc").eq(1).text(data[1].body.substring(0, 50) + "...");
			$(".desc").eq(2).text(data[2].body.substring(0, 50) + "...");
			$(".desc").eq(3).text(data[3].body.substring(0, 50) + "...");
			
			dataJson = data;
			
			$(".more > a").eq(0).text("Read more >>");
			$(".more > a").eq(1).text("Read more >>");
			$(".more > a").eq(2).text("Read more >>");
			$(".more > a").eq(3).text("Read more >>");
		
		});
	};

	
	initText();
	
	
	
		
})