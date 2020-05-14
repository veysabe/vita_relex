"use strict"

$('.number__input').mask("+7(999)999-99-99");

$('.call-block-form').on('click', '.number__button', function(){
	
	let number = $(".number__input").val();
	let checkbox = $(".number__checkbox").prop("checked");

	if ( number != "" && checkbox != false ) {
		$.post(
			"/phone.php",
			{
			number: number,
			},
			onAjaxSuccess
		);

		function onAjaxSuccess(data)
		{
			console.log(data)
		}
	}


	if ( number == "" || checkbox == false ) {
		if ( number == "" ) {
			Swal.fire({
				icon: 'warning',
				title: 'Ой...',
				text: 'Введите, пожалуйста, номер телефона!',
				footer: '<a href="https://google.com">Требуется помощь?</a>'
			})
		} else if ( checkbox == false ) {
			Swal.fire({
				icon: 'warning',
				title: 'Ой...',
				text: 'Подтвердите, пожалуйста, согласие на обработку персональных данных!',
				footer: '<a href="https://google.com">Требуется помощь?</a>'
			})
		}
	}
});