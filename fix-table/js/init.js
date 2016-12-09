(function (glo) {
	function CreateTable(param) {
       CreateTable.prototype.render(param);
	}
	// CreateTable.prototype.init = function(param) {
	// 	this.width = param.width;
	// 	this.height = param.height;
	// };
	CreateTable.prototype.render = function(param) {
        var table = document.createElement('table');
        var thr = document.createElement('tr');
        for (var i = 0; i < param.thead.length; i++) {
        	var th = document.createElement('th');
        	th.innerHTML = param.thead[i];
        	th.style.width = param.width + 'px';
        	th.style.height = param.height + 'px';
        	if (param.isSort[i]) {
        		var Aspan = document.createElement('span');
		        var Dspan = document.createElement('span');
		        Aspan.innerHTML = '>';
		        Dspan.innerHTML = '<';
		        Aspan.className = 'ascending';
		        Dspan.className = 'descending';
		        var arr = [];
		        for (var m = 0; m < param.tbody.length; m++) {
		        	arr.push(param.tbody[m][i]);
		        }
		        Aspan.onclick = function() {
                    arr.sort(function(a,b) {
                    	return a-b;
                    });
                    console.log(arr);
		        }

	        	th.appendChild(Aspan);
	        	th.appendChild(Dspan);
        	}
        	thr.appendChild(th);
        	
        }
        table.appendChild(thr);
        for (var i = 0; i < param.tbody.length; i++) {
        	var tr = document.createElement('tr');
        	for (var j = 0; j < param.tbody[i].length; j++) {
        		var td = document.createElement('td');
        	    td.innerHTML = param.tbody[i][j];
        	    td.style.width = param.width + 'px';
        	    td.style.height = param.height + 'px';
        	    tr.appendChild(td);
        	}
        	table.appendChild(tr);
        }
        table.style.top = param.top + 'px';
        document.body.appendChild(table);
        document.onscroll = function() {
        	var th = document.getElementsByTagName('th');
        	// console.log(th.length);
        	var totop = document.body.scrollTop;
        	var top = table.offsetTop;
        	if (totop > top) {
                for (var i = 0; i < th.length; i++) {
                	th[i].style.left = i*(param.width+1) + 'px';
                	th[i].style.top = '0px';
                	th[i].style.zIndex = 2;
                	th[i].style.position = 'fixed';
                }
        	}
        	if (totop <= top) {
        		for (var i = 0; i < th.length; i++) {
        			th[i].style.position = '';
        			th[i].style.left = '';
        		}
        	}
        }
	}
	glo.createTable = CreateTable;
}(window));
// param = {
// 	width:100,
// 	height:100,
// 	isSort:['false','false','true'],
// 	thead:['num','name','grade'],
//     tbody:[
//             ['001','li','90'],
//             ['002','wang','95'],
//             ['003','zhang','99']
//           ]
// }