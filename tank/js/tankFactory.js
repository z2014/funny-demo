function createTank(factory) {
    var tank = {
    	dir :'bottom',
	    create : function(){
			var tankDiv = document.createElement('div');
		    tankDiv.className = 'ermyTank';
		    tankDiv.style.top = '0px';
		    tankDiv.style.left = '5px'
		    tankDiv.run = function() {
		    	var moveTimer = setInterval(function(){
		    		var x = tankDiv.offsetLeft;
		    		var y = tankDiv.offsetTop;
		    		var n = Math.ceil(y/60);
		    		var m = Math.ceil(x/60);
		    		// console.log(n,m);
		    		if (y < 540) {
		    			// if (factory == factorytank[0]) {
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
			    		}
			    	}
		    	},50);
		    }
		    tankDiv.fire = function(yourtank) {
		    	var fireTimer = setInterval(function() {
		    		console.log(1);
	            	if (yourtank) {
	            		createBullet(factory,tankDiv);
	            	}
	            	else{
	            		clearInterval(fireTimer);
	            	}
	            	// new Promise(function(resolve){
	            	// 	resolve(function(){
	            	// 		return value == false;
	            	// 	});
	            	// }).then(clearInterval(fireTimer));
			    },1000);
		    }
		    factory.appendChild(tankDiv);
		    return tankDiv;
	    }
    };
    return tank;
}
function createBullet(factory,tankDiv) {
	if (tankDiv.offsetTop < 540) {
		var bullet = document.createElement('div');
		bullet.className = 'ermybullet';
		bullet.style.top = tankDiv.offsetTop + 40 + 'px';
		bullet.style.left = tankDiv.offsetLeft + 15 + 'px';
		factory.appendChild(bullet);
		var timer3 = setInterval(function() {
			// var goDir = (tank.dir == 'bottom') ? top : left;
			var m = bullet.offsetLeft;
		    var x = Math.floor(m/60);
			var n = bullet.offsetTop;
			var y = Math.ceil(n/60)*10;
			bullet.style.top = bullet.offsetTop + 10 + 'px';
			// console.log(x,y);
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
			}
		},50);
	}else{
		var bullet = document.createElement('div');
		bullet.className = 'ermybullet';
		bullet.style.top = tankDiv.offsetTop + 15 + 'px';
		bullet.style.left = tankDiv.offsetLeft + 40 + 'px';
		factory.appendChild(bullet);
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
			}
		},50);
	}
}