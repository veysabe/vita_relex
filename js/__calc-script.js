"use strict"

let jk = '';

let command = false;

let result = false;

$('.calc-body').on('click', '#equals', function(){
	result = true;

	if (($('input').val()) == '') {
		jk = jk.slice(0, -1);
		$('input').val(eval(jk));
	} else {
		let a = $('input').val();
		jk = jk + a;
		$('input').val(eval(jk));
	};

	jk = '';
});

$('.calc-body').on('click', '#multiply', function(){
	if (result == true) {
		$('input').val('');
		result = false;
	} else {
		if (command == false && ($('input').val()) != '') {
			let txt = $(this).text();
			let input = $('input').val();
			$('input').val(input + txt);

			let a = $('input').val();

			jk = jk + a;

			$('input').val('');
			command = true;
		}
	}
});

$('.calc-body').on('click', '#minus', function(){
	if (result == true) {
		$('input').val('');
		result = false;
	} else {
		if (command == false && ($('input').val()) != '') {
			let txt = $(this).text();
			let input = $('input').val();
			$('input').val(input + txt);

			let a = $('input').val();

			jk = jk + a;

			$('input').val('');
			command = true;
		}
	}
});

$('.calc-body').on('click', '#plus', function(){
	if (result == true) {
		$('input').val('');
		result = false;
	} else {
		if (command == false && ($('input').val()) != '') {
			let txt = $(this).text();
			let input = $('input').val();
			$('input').val(input + txt);

			let a = $('input').val();

			jk = jk + a;

			$('input').val('');
			command = true;
		}
	}
});

$('.calc-body').on('click', '#divide', function(){
	if (result == true) {
		$('input').val('');
		result = false;
	} else {
		if (command == false && ($('input').val()) != '') {
			let txt = $(this).text();
			let input = $('input').val();
			$('input').val(input + txt);

			let a = $('input').val();

			jk = jk + a;

			$('input').val('');
			command = true;
		}
	}
});

$('.calc-body').on('click', '#check', function(){
	alert('jk - ' + jk);
	alert('command - ' + command);
	alert('result - ' + result);
});

$('.calc-body').on('click', '#clear', function(){
	$('input').val('');
	jk = '';
});


$('.calc-body').on('click', '.calc-button-enter', function(){
	if (result == true) {
		$('input').val('');
		result = false;
	} else {
		command = false;
		let txt = $(this).text();
		let input = $('input').val();
		$('input').val(input + txt);
	}
});