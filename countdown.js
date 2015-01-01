function updateWCTime() {
var now = new Date(); 
	
	var date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	
	var end = Date.parse("June 03, 2016 13:47:00");
	
	var diff = end - date;
	
	var days  = Math.floor( diff / (1000*60*60*24) );
    var hours = Math.floor( diff / (1000*60*60) );
    var mins  = Math.floor( diff / (1000*60) );
    var secs  = Math.floor( diff / 1000 );
	
	var dd = days;
    var hh = hours - days  * 24;
    var mm = mins  - hours * 60;
    var ss = secs  - mins  * 60;
		
	//Script to display time left remaining for the item. It will expire in 3 years.
	var x = dd + "d " + hh + "h ";

	document.getElementById('product_count_down').innerHTML = x;
	}
	setInterval('updateWCTime()', 1000 );