$(document).ready(function(){

	var answers = ["Without a doubt", "My sources say no", "As I see it, yes",
				  "You may rely on it", "Concentrate and ask again", 
				  "Outlook not so good", "It is decidedly so",
				  "Better not tell you now", "Very doubtful", "Yes - definitely",
				  "It is certain", "Cannot predict now", "Most likely",
				  "Ask again later", "My reply is no", "Outlook good",
				  "Don't count on it"];

	$('button').on('click', function(e){
		e.preventDefault();
		if ($('input').val()) {
			makeAnswer();
		} else {
			noAnswer();	
		} 
	});

	function makeAnswer(){
		var answer = answers[Math.floor(Math.random() * answers.length)]
		$('input').val('');
		$('.tile-div').fadeOut('500', function(){
			$('.big-answer').text(answer).fadeIn('1500');
		});
		setTimeout(function(){
			$('.tile-div').fadeIn();
		});
	}

	function noAnswer(){
		$('.tile-div').fadeOut('500', function(){
			$('.big-answer').text('Ask something for God\'s sake!');
		});
		setTimeout(function(){
			$('.tile-div').fadeIn();
		});
	}


});