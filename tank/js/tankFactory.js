function createTank(factory) {
    var tank = {
    	// dir :'bottom',
	    create : function(){
			var tankDiv = document.createElement('div');
		    tankDiv.className = 'ermyTank';
		    tankDiv.style.top = '0px';
		    tankDiv.style.left = '5px';
		    tankDiv.run = function() {
		    	moveTimer = setInterval(function(){
		    		if (!value) {
		    			var x = tankDiv.offsetLeft;
			    		var y = tankDiv.offsetTop;
			    		var n = Math.ceil(y/60);
			    		var m = Math.ceil(x/60);
			    		if (y < 540) {
			    				if (tdList[n*10+m-1].className == 'block' || tdList[n*10+m-1].className == 'wall') {
				                    tankDiv.style.left = x + 5 + 'px';
				    			}else{
				    				tankDiv.style.top = y + 5 + 'px';
				    			}	
				    	}else{
				    		if (x < 540) {
				    			tankDiv.style.left = x + 5 + 'px';
				    		}else{
				    			clearInterval(moveTimer);
				    			factory.removeChild(tankDiv);
				    			tankDiv = null;
				    			value = true;
				    		}
				    	}
		    		}else{
		    			clearInterval(moveTimer);
		    		}
		    	},50);
		    }
		    tankDiv.fire = function() {
		    	fireTimer = setInterval(function() {
	            	if (!value) {
	            		createBullet(factory,tankDiv);
	            	}
	            	else{
	            		clearInterval(fireTimer);
	            	}
	            	// new Promise(delay).then(clearInterval(fireTimer));
			    },1000);
		    }
		    factory.appendChild(tankDiv);
		    return tankDiv;
	    }
    };
    return tank;
}
function createBullet(factory,tankDiv) {
	if (tankDiv) {
		if (tankDiv.offsetTop < 540) {
			var bullet = document.createElement('div');
			bullet.className = 'ermybullet';
			bullet.style.top = tankDiv.offsetTop + 40 + 'px';
			bullet.style.left = tankDiv.offsetLeft + 15 + 'px';
			factory.appendChild(bullet);
			var timer3 = setInterval(function() {
				var m = bullet.offsetLeft;
			    var x = Math.floor(m/60);
				var n = bullet.offsetTop;
				var y = Math.ceil(n/60)*10;
				bullet.style.top = bullet.offsetTop + 10 + 'px';
				if(n > 540) {
					factory.removeChild(bullet);
					bullet = null;
					clearInterval(timer3);
				}else if(tdList[x+y].className == 'block') {
					factory.removeChild(bullet);
					bullet = null;
					tdList[x+y].className = 'default';
					clearInterval(timer3);
				}else if (tdList[x+y].className == 'wall') {
	                factory.removeChild(bullet);
					bullet = null;
					clearInterval(timer3);
				}else if (x > 4 && x <7 && y == 100) {
					alert('YOU LOSE');
					factory.removeChild(bullet);
					clearInterval(timer3);
					clearInterval(moveTimer);
					clearInterval(createTimer);
					clearInterval(fireTimer);
					bullet = null;
				}
			},50);
		}else{
			var bullet = document.createElement('div');
			bullet.className = 'ermybullet';
			bullet.style.top = tankDiv.offsetTop + 15 + 'px';
			bullet.style.left = tankDiv.offsetLeft + 40 + 'px';
			factory.appendChild(bullet);
			//在元素还没有appendchild进dom时，他的left和top坐标值为0
			var timer3 = setInterval(function() {
				// var goDir = (tank.dir == 'bottom') ? top : left;
				var m = bullet.offsetLeft;
			    var x = Math.ceil(m/60);
				var n = bullet.offsetTop;
				var y = Math.floor(n/60)*10;
				bullet.style.left = bullet.offsetLeft + 10 + 'px';
				// console.log(x,y);
				if(m > 540) {
					factory.removeChild(bullet);
					bullet = null;
					clearInterval(timer3);
				}else if(tdList[x+y].className == 'block') {
					factory.removeChild(bullet);
					bullet = null;
					tdList[x+y].className = 'default';
					clearInterval(timer3);
				}else if (tdList[x+y].className == 'wall') {
	                factory.removeChild(bullet);
					bullet = null;
					clearInterval(timer3);
				}else if (x > 4 && x <7 && y == 90) {
					alert('YOU LOSE');
					clearInterval(timer3);
					clearInterval(moveTimer);
					clearInterval(createTimer);
					clearInterval(fireTimer);
					factory.removeChild(bullet);
					bullet = null;
				}
			},50);
		}
	}
}