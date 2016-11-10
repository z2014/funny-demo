function hit(n,m,dir) {
	switch(tdList[n+m].className) {
		case 'block':myTank.style[dir] = 'myTank.offset' + upcase(dir);
		             break;
		case 'wall':myTank.style[dir] = 'myTank.offset' + upcase(dir);
		             break;      
	}
}

function upcase(a) {
	return a.replace('t','T').replace('l','L');
}