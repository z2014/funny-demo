var start = document.getElementById('start');
var value = true;
var moveTimer;
var createTimer;
var fireTimer;
start.onclick = function () {
	createTimer = setInterval(function() {
		if (value) {
			// console.log(1);
			value = false;
			var tank = createTank(center);
		    tank1 = tank.create();
		    tank1.run();
			tank1.fire(tank1);
		}
	},3000);
	document.onkeydown = function(event) {
		var tankX = myTank.offsetLeft;
		var tankY = myTank.offsetTop;
		var tankN = Math.floor(tankY/60)*10;
		var tankM = Math.floor(tankX/60);
		switch(event.keyCode) {
			case 38:myTank.direct = 'top';
			        if (myTank.offsetTop < 0) {
	                    break;
			        }else{
			        	if (tdList[tankN+tankM].className == 'block' || tdList[tankN+tankM].className == 'wall') {
			        		hit(tankN,tankM,'top');
			        		break;
			        	}else{
			        		if (tdList[tankN+tankM].className == 'grass') {
			        			myTank.style.opacity = '0.5';
			        		}else{
			        		    myTank.style.opacity = '1';
			        		}
			        		myTank.style.top = myTank.offsetTop - 5 +'px';
	                        myTank.style.borderRadius = '40px 40px 0 0';
	    			        break;
			        	}
			        }  			         
			case 39:myTank.direct = 'right';
			        if (myTank.offsetLeft > 560) {
				        break;
			        }
			        else{
				        myTank.style.left = myTank.offsetLeft + 5 +'px';
	                    myTank.style.borderRadius = '0 40px 40px 0';
	    			    break;
			        }
			case 40:myTank.direct = 'bottom';
			        if (myTank.offsetTop > 560) {
	    				break;
	    			}
	    			else{
		    		    myTank.style.top = myTank.offsetTop + 5 +'px';
	    			    myTank.style.borderRadius = '0 0 40px 40px';
	    			    break;
	    			}
			case 37:myTank.direct = 'left';
			        if (myTank.offsetLeft < 0) {
				        break;
			        }else{
				        myTank.style.left = myTank.offsetLeft - 5 +'px';
	                    myTank.style.borderRadius = '40px 0 0 40px';
	    			    break;
			        }
			case 32:var bullet = document.createElement('div');     //空格键的处理逻辑 
			        bullet.className = 'bullet';
					bullet.style.left = myTank.offsetLeft + 15 + 'px';
					bullet.style.top = myTank.offsetTop + -5 + 'px';
					center.appendChild(bullet);
					//处理子弹的逻辑
					var timer = setInterval(function(){
						if (tank1) {
							var ermyTankY = tank1.offsetTop;
	                        var ermyTankX = tank1.offsetLeft;
						}
	                    var y = bullet.offsetTop;
	                    var x = bullet.offsetLeft;
					    if (bullet.offsetTop <= 0) {
					        center.removeChild(bullet);
					        bullet = null;         //主动清楚bullet引用，不然他会一直在页面中存在
					        clearInterval(timer);
					    }else if(ermyTankX <= (x+30) && ermyTankX >= (x-30) && ermyTankY >= (y-40)) {
	                        clearInterval(timer);
	                        center.removeChild(bullet);
	                        center.removeChild(tank1);
	                        bullet = null;
	                        tank1 = null;
	                        value = true;
					    }else {
	                        var n = Math.floor(y/60)*10;
	                        var m = Math.floor(x/60);
	                        // console.log(n,m);
	                        bullet.style.top = bullet.offsetTop - 10 +'px';
	                        //碰撞到黄色区域
	                        if (tdList[n+m].className == 'block') {
	                            tdList[n+m].className = 'default';
	                            clearInterval(timer);
	                            center.removeChild(bullet);
	                            bullet = null;
	                        }
	                        if (tdList[n+m].className == 'wall') {
	                        	clearInterval(timer);
	                            center.removeChild(bullet);
	                            bullet = null;
	                        }
	                        //碰到对方老巢
	                        if (n == 0 && (m == 4 || m == 5)) {
	                        	alert("YOU WIN"); 
	                        	clearInterval(createTimer);
	                        	clearInterval(timer);
	                            center.removeChild(bullet);
	                            bullet = null;
	                        }
					    }
					},50);
					break; 
		}
	}
}
