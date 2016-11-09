

// function addHit(bullet) {
// 	setInterval(function(){
// 		var x = bullet.offsetLeft;
// 		var y = bullet.offsetTop;
// 		console.log(x,y);
// 		if (true) {};
// 	},50);
// }
function upcase(a) {
	return a.replace('t','T').replace('l','L');
	
}
function hit(n,m,dir) {
	switch(tdList[n+m].className) {
		case 'block':myTank.style[dir] = 'myTank.offset' + upcase(dir);
		             break;
		case 'wall':myTank.style[dir] = 'myTank.offset' + upcase(dir);
		             break;
		// case 'grass':myTank.style.opacity = '0.5';
		//              myTank.style[dir] = 'myTank.offset' + upcase(dir) - '5px';
		//              myTank.style.borderRadius = '40px 40px 0 0';
		//              break;      
	}
}
