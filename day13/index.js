var SCISSOR = 0
var STONE = 1
var PAPER = 2

var botArea = document.getElementById('bot-area');
var result = document.getElementById('result');

function punch(you){
	var bot = botPunch();
	renderBot(bot);

	if 	(you == bot){
		result.innerHTML='Draw'
	}	else if (you == (bot+1)%3){
		result.innerHTML = 'You Win!'
	}	else {
		result.innerHTML = 'You Loss!'
	}  
	

	// switch(value){
	// 	case SCISSOR:
	// 	result.innerHTML ='剪刀';
	// 	break;
	// 	case STONE:
	// 	result.innerHTML ='石頭';
	// 	break;
	// 	case PAPER:
	// 	result.innerHTML ='布';
	// 	break;
	// 	default:
	// 	result.innerHTML='不知道你在出甚麼啦!';
	// 	break;
	// }

	// if (value =='s')
	// result.innerHTML ='剪刀';
	// else if(value =='n')
	// result.innerHTML ='石頭';
	// else if(value =='p')	
	// result.innerHTML ='布';
	// else
	// result.innerHTML ='不知道你在出甚麼啦!';
}

function botPunch(){
	return Math.floor(Math.random()*3);
}

function renderBot(bot){
	var img = document.createElement('img');
	img.classList.add('img');
	switch(bot){
		case PAPER:
		img.src='img/p.png'
		break;
		case SCISSOR:
		img.src='img/s.png'
		break;
		case STONE:
		img.src='img/n.png'
		break;
		default:
		break;
	}
	botArea.innerHTML = '';
	botArea.appendChild(img);
}