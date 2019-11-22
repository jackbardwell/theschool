$(document).ready(function(){

	$("#label_1").click(function() {
		$('#page_1').slideDown('fast');
		$("#close_1").fadeIn('normal');
		$('.item_2, .item_3, .item_4, .item_5').slideUp('normal');
			$("#close_1").click(function() {
				$("#close_1").fadeOut('normal');
				$('#page_1').slideUp('fast');
				$('.item_2, .item_3, .item_4, .item_5').slideDown('normal');
			});
	});

	$("#label_2").click(function() {
		$('#page_2').slideDown('fast');
		$("#close_2").fadeIn('normal');
		$('.item_1, .item_3, .item_4, .item_5').slideUp('normal');
			$("#close_2").click(function() {
				$("#close_2").fadeOut('normal');
				$('#page_2').slideUp('fast');
				$('.item_1, .item_3, .item_4, .item_5').slideDown('normal');
			});
	});

	$("#label_3").click(function() {
		$('#page_3').slideDown('fast');
		$("#close_3").fadeIn('normal');
		$('.item_1, .item_2, .item_4, .item_5').slideUp('normal');
			$("#close_3").click(function() {
				$("#close_3").fadeOut('normal');
				$('#page_3').slideUp('fast');
				$('.item_1, .item_2, .item_4, .item_5').slideDown('normal');
			});
	});

	$("#label_4").click(function() {
		$('#page_4').slideDown('fast');
		$("#close_4").fadeIn('normal');
		$('.item_1, .item_2, .item_3, .item_5').slideUp('normal');
			$("#close_4").click(function() {
				$("#close_4").fadeOut('normal');
				$('#page_4').slideUp('fast');
				$('.item_1, .item_2, .item_3, .item_5').slideDown('normal');
			});
	});

	$("#label_5").click(function() {
		$('#page_5').slideDown('fast');
		$("#close_5").fadeIn('normal');
		$('.item_1, .item_2, .item_3, .item_4').slideUp('normal');
			$("#close_5").click(function() {
				$("#close_5").fadeOut('normal');
				$('#page_5').slideUp('fast');
				$('.item_1, .item_2, .item_3, .item_4').slideDown('normal');
			});
	});

	 $("#label_header").click(function() {
		$('#page_header').slideDown('fast');
		$("#close_header").fadeIn('normal');
		$('logo').slideUp('normal');
			$("#close_header").click(function() {
				$("#close_header").fadeOut('normal');
				$('#page_header').slideUp('fast');
				$('logo').slideDown('normal');
			});
	});


	 /*C L O C K T I M E*/

	 /*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 */


	function initLocalClocks() {
  	// Get the local time using JS
  	var date = new Date;
  	var seconds = date.getSeconds();
  	var minutes = date.getMinutes();
  	var hours = date.getHours();

  // Create an object with each hand and it's angle in degrees
  	var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
}

function moveSecondHands() {
  var containers = document.querySelectorAll('.seconds-container');
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 6;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 1000);
}

 initLocalClocks();
 moveSecondHands();



 /*C L O C K D R A G*/

 // Make the DIV element draggable:
dragElement(document.getElementById("dragdiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "divdrag")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "divdrag").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

});