var tdList = document.getElementsByTagName('td');
var center = document.getElementsByClassName('center')[0];
function choseTd() {
	var arr = [];
	arr[0] = create();
	arr[1] = create();
	arr[2] = create();
	arr[3] = create();
	arr[4] = create();
	arr[5] = create();
	init(arr);
}

function create() {
	var t = Math.floor(Math.random()*80);
	if (t < 10) {
		t = t + 10;
	}
	if (t > 90) {
        t = t - 10;
	}
	var obj = {
		num:t,
		td:tdList[t]
	}
	return obj;
}

function init(list) {
    drawGrass([list[0],list[1]]);
    drawBlock([list[2],list[3]]);
    drawWall([list[4],list[5]]);
}

function drawGrass(arr) {
	var i = arr.length;
    var t = arr[i-1].num;
    tdList[t].className = 'grass';
    tdList[t+10].className = 'grass';
    if (isparentNode(tdList[t],tdList[t-1])) {
    	tdList[t-1].className = 'grass';
    	tdList[t+9].className = 'grass';
    }
    else{
    	tdList[t+1].className = 'grass';
    	tdList[t+11].className = 'grass';
    }
    if (i-1 > 0) {
    	drawGrass(arr.slice(0,i-1));
    }
}

function isparentNode(a,b) {
    if (a.parentNode == b.parentNode) {
    	return true
    }
    return false;
}

function drawBlock(arr) {
    var i = arr.length;
    var t = arr[i-1].num;
    tdList[t].className = 'block';
    if (isparentNode(tdList[t],tdList[t-1])) {
    	tdList[t-1].className = 'block';
    }
    else{
    	tdList[t+1].className = 'block';
    }
    if (i-1 > 0) {
    	drawBlock(arr.slice(0,i-1));
    }
}

function drawWall(arr) {
	var i = arr.length;
    var t = arr[i-1].num;
    tdList[t].className = 'wall';
    if (isparentNode(tdList[t],tdList[t-1])) {
    	tdList[t-1].className = 'wall';
    }
    else{
    	tdList[t+1].className = 'wall';
    }
    if (i-1 > 0) {
    	drawWall(arr.slice(0,i-1));
    }
}

function createMytank() {
    var myTank = document.createElement('div');
    myTank.className = 'mytank';
    myTank.direct = 'top';
    center.appendChild(myTank);
    return myTank;
}
document.getElementById('init').onclick = choseTd;
var myTank = createMytank();
// Promise.resolve().then(function(){
// 	var script = document.createElement('script');
// 	script.src = 'js/controller.js';
// 	document.body.appendChild(script);
// })
