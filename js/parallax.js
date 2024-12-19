$(document).ready(function(){
	$(window).scroll(function(){
		var windowWidth = $(window).width();
		if (windowWidth > 800){
			var scroll = $(window).scrollTop();
			//Cada vez que hay un scroll
			$('header .textos').css({
				'transform': 'translate(0px,' + scroll / 2 + '%)'
			});

			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 4 + '%)'
			});
		}
	});

	//Cuando cambie el tamaño de pantalla regresar el article a su posicion original
	$(window).resize(function(){
		var windowWidth = $(window).width();
		if (windowWidth < 800){
			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)'
			});
		}
	});
});