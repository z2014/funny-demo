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
			    		factory.removeChild(tankDiv);
			    		clearInterval(moveTimer);
			    	}
		    	},50);
		    }
		    tankDiv.fire = function() {
            	// console.log('fire');
            	// var fireTimer = setInterval(function() {
            		createBullet(factory,tankDiv);
            		console.log(2);
            	// },1000)
		    };
		    factory.appendChild(tankDiv);
		    setTimeout(function() {
		    	console.log(1);
		    	var tank1 = createTank(center);
		    	// tank1.run();
		    	// tank1.fire();
		    },500);
		    return tankDiv;
	    }
    };
    return tank;
}
function createBullet(factory,tankDiv) {
	var bullet = document.createElement('div');
	bullet.className = 'ermybullet';
	bullet.style.top =  tankDiv.offsetTop + '40px';
	bullet.style.left = tankDiv.offsetLeft + '15px';
	factory.appendChild(bullet);
	var timer3 = setInterval(function() {
		bullet.style.top = bullet.offsetTop + 10 + 'px';
		if (bullet.offsetTop > 560) {
			clearInterval(timer3);
		}
	},50);
}