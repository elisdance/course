$('.game__info').each(function() {
	let ths = $(this);
	ths.find('.game__card').not(':first').hide();
	ths.find('.tab').click(function() {
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.game__card').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});