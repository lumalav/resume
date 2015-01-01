
	// Script to detect current date and display an estimated delivery a week from now.
	var weekday = new Array("Sun", "Mon", "Tue", "Wed","Thu","Fri","Sat");
		
	var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
	
	var now = new Date(); 
	var date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	
	//Economy Shipping
	var newdate1 = new Date(date);
	newdate1.setDate(newdate1.getDate() + 7);
	var nd = new Date(newdate1);
	
	var firstDay = weekday[nd.getDay()];
	var firstMonth = m_names[nd.getMonth()];
	var firstDate = nd.getDate();
	
	var x = firstDay + ". " + firstMonth + ". " + firstDate + " and ";
	
	var newdate2 = new Date(date);
	newdate2.setDate(newdate2.getDate() + 14);
	var nd2 = new Date(newdate2);
	
	var secondDay = weekday[nd2.getDay()];
	var secondMonth = m_names[nd2.getMonth()];
	var secondDate = nd2.getDate();
	
	var y = secondDay + ". " + secondMonth + ". " + secondDate;
	
	var z = x + y;

	document.getElementById('product_delivery_date').innerHTML = z;
	document.getElementById('product_delivery_date2').innerHTML = z;
	
	//Expedited shipping
	var newdate3 = new Date(date);
	newdate3.setDate(newdate3.getDate() + 8);
	var nd3 = new Date(newdate3);
	
	var thirdDay = weekday[nd3.getDay()];
	var thirdMonth = m_names[nd3.getMonth()];
	var thirdDate = nd3.getDate();
	
	var a = thirdDay + ". " + thirdMonth + ". " + thirdDate + " and ";
	
	var newdate4 = new Date(date);
	newdate4.setDate(newdate4.getDate() + 9);
	var nd4 = new Date(newdate4);
	
	var fourthDay = weekday[nd4.getDay()];
	var fourthMonth = m_names[nd4.getMonth()];
	var fourthDate = nd4.getDate();
	
	var b = fourthDay + ". " + fourthMonth + ". " + fourthDate;
	
	var w = fourthMonth + "." + fourthDate;
	
	document.getElementById('product_delivery_date3').innerHTML = a+b;
	document.getElementById('expedited_shipping').innerHTML = w;