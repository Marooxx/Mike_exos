$(function(){
	
	let index = 0;
	let tableuImg = ["images/zoro.png","images/usoppkabuto.png","images/sanji.png","images/nami.png","images/chopper.png","images/robin.png","images/francky.png","images/brook.png","images/luffy.jpg"];
	

	setInterval(function(){
		
		$("#slider-img").attr("src", tableuImg[index]);
		
		index++;
		
		if(index == (tableuImg.length))
			index =0;
	},3000)
	
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
	
	$(".more").click(function(){
		event.preventDefault();
		
		$(this).text("Nunc non diam erat. In fringilla massa ut nisi ullamcorper.");	
	})
})