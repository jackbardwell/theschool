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

});