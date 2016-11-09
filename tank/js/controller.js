    var tankBlock = document.getElementsByClassName('tank')[0];
    var myTank = document.createElement('div');
    myTank.className = 'mytank';
    myTank.direct = 'top';
    tankBlock.appendChild(myTank);
    var start = document.getElementById('start');
    start.onclick = function () {
    	document.onkeydown = function(event) {
    		// console.log(event.keyCode);
    		var tankX = myTank.offsetLeft + 195;
    		var tankY = myTank.offsetTop + 540;
    		// console.log(tankX,tankY);
    		var tankN = Math.floor(tankY/60)*10;
    		var tankM = Math.floor(tankX/60);
    		switch(event.keyCode) {
    			case 38:myTank.direct = 'top';
    			        if (myTank.offsetTop <= -540) {
                            break;
    			        }else{
    			        	// console.log(tankN,tankM);
    			        	if (tdList[tankN+tankM].className == 'block' || tdList[tankN+tankM].className == 'wall') {
    			        		// console.log(tankN,tankM);
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
    			        if (myTank.offsetLeft >= 380) {
    				        break;
    			        }
    			        else{
    			        	// if (tdList[tankN+tankM].className == 'block' || tdList[tankN+tankM].className == 'wall') {
    			        	// 	// console.log(tankN,tankM);
    			        	// 	hit(tankN,tankM,'left');
    			        	// 	break;
    			        	// }else{
    			        	// 	if (tdList[tankN+tankM].className == 'grass') {
    			        	// 		myTank.style.opacity = '0.5';
    			        	// 	}else{
    			        	// 	    myTank.style.opacity = '1';
    			        	// 	}
	    			         	myTank.style.left = myTank.offsetLeft + 5 +'px';
		                        myTank.style.borderRadius = '0 40px 40px 0';
		    			        break;
		    			    // }
    			        }
    			case 40:myTank.direct = 'bottom';
    			        if (myTank.offsetTop >= 18) {
		    				break;
		    			}
		    			else{
		    				// if (tdList[tankN+tankM].className == 'block' || tdList[tankN+tankM].className == 'wall') {
    			   //      		// console.log(tankN,tankM);
    			   //      		hit(tankN,tankM,'top');
    			   //      		break;
    			   //      	}else{
    			   //      		if (tdList[tankN+tankM].className == 'grass') {
    			   //      			myTank.style.opacity = '0.5';
    			   //      		}else{
    			   //      		    myTank.style.opacity = '1';
    			   //      		}
			    			 	myTank.style.top = myTank.offsetTop + 5 +'px';
		    			        myTank.style.borderRadius = '0 0 40px 40px';
		    			        break;
		    			    // }
		    			}
    			case 37:myTank.direct = 'left';
    			        if (myTank.offsetLeft <= -178) {
    				        break;
    			        }else{
    			        	// if (tdList[tankN+tankM].className == 'block' || tdList[tankN+tankM].className == 'wall') {
    			        	// 	// console.log(tankN,tankM);
    			        	// 	hit(tankN,tankM,'left');
    			        	// 	break;
    			        	// }
    			        	// else{
    			        	// 	if (tdList[tankN+tankM].className == 'grass') {
    			        	// 		myTank.style.opacity = '0.5';
    			        	// 	}else{
    			        	// 	    myTank.style.opacity = '1';
    			        	// 	}
	    			        	myTank.style.left = myTank.offsetLeft - 5 +'px';
		                        myTank.style.borderRadius = '40px 0 0 40px';
		    			        break;
		    			    // }
    			        }
    			case 32:var bullet = document.createElement('div');     //空格键的处理逻辑 
    			        bullet.className = 'bullet';
						bullet.style.left = 15 + 'px';
						bullet.style.top = -5 + 'px';
						myTank.appendChild(bullet);
						//处理子弹的逻辑
						var timer = setInterval(function(){
						    if (bullet.offsetTop <= -540) {
						        myTank.removeChild(bullet);
						        bullet = null;         //主动清楚bullet引用，不然他会一直在页面中存在
						        clearInterval(timer);
						    }else {
                                var x = myTank.offsetTop + bullet.offsetTop + 540;
                                var y = myTank.offsetLeft + 195;
                                // console.log(y);
                                var n = Math.floor(x/60)*10;
                                var m = Math.floor(y/60);
                                // console.log(n,m);
                                bullet.style.top = bullet.offsetTop - 10 +'px';
                                //碰撞到黄色区域
                                if (tdList[n+m].className == 'block') {
                                    tdList[n+m].className = 'default';
                                    clearInterval(timer);
                                    myTank.removeChild(bullet);
                                    bullet = null;
                                }
                                if (tdList[n+m].className == 'wall') {
                                	clearInterval(timer);
                                    myTank.removeChild(bullet);
                                    bullet = null;
                                }
                                //碰到对方老巢
                                if (n == 0 && (m == 4 || m == 5)) {
                                	alert("YOU WIN");
                                	clearInterval(timer);
                                    myTank.removeChild(bullet);
                                    bullet = null;
                                }
						   	    // console.log(bullet.offsetTop);
						    }
						},50);
						break;
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
    		}
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