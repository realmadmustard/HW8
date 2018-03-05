var check = false;
$('document').ready(function () {
	$('body').html('<h1 id="mainHead">Press X to Win</h1>');
	$('#mainHead').css({textAlign: 'center', display: 'none', margin: 'auto', lineHeight: 'calc(100vh - 25px)'});
	$('#mainHead').show('slow');

	$('body').keypress(function(e) {
		if(e.keyCode === 88 || e.keyCode === 120 && check === false) {
			$('h1').hide('slow');
			$('body').append('<div class="wrapper"><div id="viewport"></div><button>Generate</button></div>');
			$('.wrapper').show('slow');
			game();
			check = true;
		}
	});
	$('#block').draggable();
	function game () {
		$('button').on('click', function() {
			if ($('#viewport').children().length == 0) {	
				$('#viewport').append('<div id="block"></div>');
			}

			var randR = Math.floor(Math.random() * 255);
			var randG = Math.floor(Math.random() * 255);
			var randB = Math.floor(Math.random() * 255);

			var randW = (Math.floor(Math.random() * 764)) + 10;
			var randH = (Math.floor(Math.random() * 364)) + 10;

			var randLeft = (Math.floor(Math.random() * 774)) - randW;
			var randTop = (Math.floor(Math.random() * 374)) - randH;
			$('#block').css({width: randW + 'px', height: randH + 'px', top: randTop, left: randLeft, background: 'rgb(' + randR + ',' + randG + ',' + randB + ')'});
		});
	};
});



