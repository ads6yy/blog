(function ($, Drupal) {
	Drupal.behaviors.competence = {
		attach(context, settings) {
			$('.note-competence').each(function () {

				var bar = new ProgressBar.Circle('#' + this.id, {
					strokeWidth: 10,
					color: '#FFEA82',
					trailColor: '#eee',
					trailWidth: 1,
					easing: 'easeInOut',
					duration: 1400,
					svgStyle: null,
					text: {
						value: '',
						alignToBottom: true
					},
					from: {color: '#ff0000'},
					to: {color: '#008000'},
					// Set default step function for all animate calls
					step: (state, bar) => {
						bar.path.setAttribute('stroke', state.color);
						bar.setText(Math.round(bar.value() * 100) + ' %');
						bar.text.style.color = state.color
					}
				});

				const note = $(this).attr('data-note') ?? '0'
				bar.animate(parseInt(note) / 20);

			})
		}
	};
})(jQuery, Drupal);