//Jquery for events and fancy scripts
	$(document).ready(function(){
	
	$('#itemB1').hide();
	$('#itemB1a').hide();
	$('#itemC1').hide();
	$('#itemC1a').hide();
	$('#items2').hover(function(){
		$('#itemC1').show();
		$('#itemC1a').show();
    }, function(){
		$('#itemC1').hide();
		$('#itemC1a').hide();
	});
	$('#items').hover(function(){
		$('#itemB1').show();
		$('#itemB1a').show();
    }, function(){
		$('#itemB1').hide();
		$('#itemB1a').hide();
	});
	
	
    $('#thumb1').click(function(){
		$('.carousel').carousel(0);
    });
	$('#thumb2').click(function(){
        $('.carousel').carousel(1);
    });
	$('#thumb3').click(function(){
		$('.carousel').carousel(2);
    });
	$('#thumb4').click(function(){
		$('.carousel').carousel(3);
    });
	$('#like').hover(function(){
		$('#like').popover('show');
	}, function(){
		$('#like').popover('destroy');
	});
	$('#want').hover(function(){
		$('#want').popover('show');
	}, function(){
		$('#want').popover('destroy');
	});
	$('#own').hover(function(){
		$('#own').popover('show');
	}, function(){
		$('#own').popover('destroy');
	});	
	$('#question').click(function(){
		var $this = $(this);
		if($this.data('clicked')) {
		}
		else {
        $this.data('clicked', true);
        $('#question').popover('show');
		}
	});
	$('#question2').click(function(){
		var $this = $(this);
		if($this.data('clicked')) {
		}
		else {
        $this.data('clicked', true);
        $('#question2').popover('show');
		}
	});
	$('#myTabA').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	$('#myTabB').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	
	$(".comment").shorten();
	$(".comment-small").shorten({showChars: 10});	
	
	$("div").click(function () {
	var color = $(this).css("background-color");
	$("#result").html("That div is <span style='color:" +
                     color + ";'>" + color + "</span>.");
	});
	
	 $('#searchButton').click(function(){
	    $('#alert2').css({"visibility":"hidden"});
		$('#alert1').css({"visibility":"visible"});
    });	
	
	$('#category').click(function(){
		$('#alert1').css({"visibility":"hidden"});
		$('#alert2').css({"visibility":"visible"});
    });	
	//Sticky footer
	
	$(function(){
    $(window).scroll(function() {              
      $('#stickyFooter').toggle($(document).scrollTop() > 100);
    });
	})
	
	
	});