var start = document.getElementById('start');
start.onclick = function () {
	var tank = createTank(center);
	var tank1 = tank.create();
	tank1.run();
	tank1.fire(tank1);
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
						var ermyTankY = tank1.offsetTop;
	                    var ermyTankX = tank1.offsetLeft;
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
	                        // value = false;
					    }else {
	                        console.log(1);
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








// var p = new Promise(function() {
// 	return btn == true;
// });
// p.then(function(msg){
// 	console.log(1);
// },function(){
// 	console.log(msg);
// })

// setTimeout(function(){console.log(bullet);},10000);
	            // addHit(bullet);
                
                // switch(myTank.direct) {
                // 	case 'top': bullet.style.left = 15 + 'px';
                // 	            bullet.style.top = -5 + 'px';
                // 	            setInterval(function(){
                // 	           	    if (bullet.offsetTop <= -600) {
                // 	           	        myTank.removeChild(bullet);
                // 	           	    }else{
                // 	           	   	    bullet.style.top = bullet.offsetTop - 10 +'px';
                // 	           	    }
                // 	            },50);
                // 	            break;
                	// case 'left':bullet.style.left = -5 + 'px';
                	//             bullet.style.top = 15 + 'px';
                	//             setInterval(function(){
                	//            	    if (bullet.offsetLeft <= -600) {
                	//            	        myTank.removeChild(bullet);
                	//            	    }else{
                	//            	   	    bullet.style.left = bullet.offsetLeft - 10 +'px';
                	//            	    }
                	//             },50);
                	//             break;
                	// case 'right':bullet.style.left = 40 + 'px';
                	//              bullet.style.top = 15 + 'px';
                	//              break;
                	// case 'bottom':bullet.style.left = 15 + 'px';
                	//               bullet.style.top = 40 + 'px';
                	//               break;
                // }


	// var timer2 = setInterval(function(){
	// 	var tankX = myTank.offsetLeft + 195;
	// 	var tankY = myTank.offsetTop + 540;
	// 	// console.log(tankX,tankY);
	// 	var n = Math.floor(tankY/60)*10;
	// 	var m = Math.ceil(tankX/60);
	// 	switch(tdList[n+m].className){
	// 		case 'block':
	// 	}
	// },50);