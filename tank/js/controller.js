    var tankBlock = document.getElementById('tank');
    var myTank = document.createElement('div');
    myTank.className = 'mytank';
    myTank.direct = 'top';
    tankBlock.appendChild(myTank);
    var start = document.getElementById('start');
    start.onclick = function () {
    	document.onkeydown = function(event) {
    		// console.log(event.keyCode);
    		switch(event.keyCode) {
    			case 38:myTank.direct = 'top';
    			        if (myTank.offsetTop <= -540) {
                            break;
    			        }else{
    			         	myTank.style.top = myTank.offsetTop - 5 +'px';
	                        myTank.style.borderRadius = '40px 40px 0 0';
	    			        break;
    			        }  			         
    			case 39:myTank.direct = 'right';
    			        if (myTank.offsetLeft >= 380) {
    				        break;
    			        }else{
    			         	myTank.style.left = myTank.offsetLeft + 5 +'px';
	                        myTank.style.borderRadius = '0 40px 40px 0';
	    			        break;
    			        }
    			case 40:myTank.direct = 'bottom';
    			        if (myTank.offsetTop >= 18) {
		    				break;
		    			}else{
		    			 	myTank.style.top = myTank.offsetTop + 5 +'px';
	    			        myTank.style.borderRadius = '0 0 40px 40px';
	    			        break;
		    			}
    			case 37:myTank.direct = 'left';
    			        if (myTank.offsetLeft <= -178) {
    				        break;
    			        }else{
    			        	myTank.style.left = myTank.offsetLeft - 5 +'px';
	                        myTank.style.borderRadius = '40px 0 0 40px';
	    			        break;
    			        }
    			case 32:var bullet = document.createElement('div');
    			        bullet.className = 'bullet';
    			        bullet.style.left = 15 + 'px';
        	            bullet.style.top = -5 + 'px';
        	            setInterval(function(){
        	           	    if (bullet.offsetTop <= -600) {
        	           	        myTank.removeChild(bullet);
        	           	    }else{
        	           	   	    bullet.style.top = bullet.offsetTop - 10 +'px';
        	           	    }
        	            },50);
                        myTank.appendChild(bullet);
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