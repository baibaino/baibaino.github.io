var scales = [
new Audio ('melody/do.mp3'),
new Audio ('melody/doh.mp3'),
new Audio ('melody/re.mp3'),
new Audio ('melody/reh.mp3'),
new Audio ('melody/mi.mp3'),
new Audio ('melody/fa.mp3'),
new Audio ('melody/fah.mp3'),
new Audio ('melody/so.mp3'),
new Audio ('melody/soh.mp3'),
new Audio ('melody/la.mp3'),
new Audio ('melody/lah.mp3'),
new Audio ('melody/si.mp3'),
new Audio ('melody/doj.mp3')
];

function play(key){
	scales[key].currentTime = 0;
	// currentTime 就是按下後直接撥放
	scales[key].play();
}

document.onkeypress = function(e){
	switch(e.key){
		case'z':
		case'Z':
		  play(0);
		  break;
		case's':
		case'S':
		  play(1);
		  break;
		case'x':
		case'X':
		  play(2);
		  break;
		case'd':
		case'D':
		  play(3);
		  break;
		case'c':
		case'C':
		  play(4);
		  break;
		case'v':
		case'V':
		  play(5);
		  break;
		case'g':
		case'G':
		  play(6);
		  break;
		case'b':
		case'B':
		  play(7);
		  break;
		case'h':
		case'H':
		  play(8);
		  break;
		case'n':
		case'N':
		  play(9);
		  break;
		case'j':
		case'J':
		  play(10);
		  break;
		case'm':
		case'M':
		  play(11);
		  break;
		case',':
		case'<':
		  play(12);
		  break;
		default:
		  break;  
	}
}

document.onkeydown = function(e) {
	var i;
	switch(e.key){
		case'z':
		case'Z':
		  i =0;
		  break;
		case's':
		case'S':
		  i =1;
		  break;
		case'x':
		case'X':
		  i =2;;
		  break;
		case'd':
		case'D':
		  i =3;
		  break;
		case'c':
		case'C':
		  i =4;
		  break;
		case'v':
		case'V':
		  i =5;
		  break;
		case'g':
		case'G':
		  i =6;
		  break;
		case'b':
		case'B':
		  i =7;
		  break;
		case'h':
		case'H':
		  i =8;
		  break;
		case'n':
		case'N':
		  i =9;
		  break;
		case'j':
		case'J':
		  i =10;
		  break;
		case'm':
		case'M':
		  i =11;
		  break;
		case',':
		case'<':
		  i =12;
		  break;
		default:
		  break;  
	}
	var el = document.body.children[i];
	el.classList.add('active');
}
document.onkeyup = function(e){
	var i;
	switch(e.key){
		case'z':
		case'Z':
		  i =0;
		  break;
		case's':
		case'S':
		  i =1;
		  break;
		case'x':
		case'X':
		  i =2;;
		  break;
		case'd':
		case'D':
		  i =3;
		  break;
		case'c':
		case'C':
		  i =4;
		  break;
		case'v':
		case'V':
		  i =5;
		  break;
		case'g':
		case'G':
		  i =6;
		  break;
		case'b':
		case'B':
		  i =7;
		  break;
		case'h':
		case'H':
		  i =8;
		  break;
		case'n':
		case'N':
		  i =9;
		  break;
		case'j':
		case'J':
		  i =10;
		  break;
		case'm':
		case'M':
		  i =11;
		  break;
		case',':
		case'<':
		  i =12;
		  break;
		default:
		  break;  
}
	var el = document.body.children[i];
	el.classList.remove('active');
}