# Main.litcoffee

## Trianglify

Generates fun backgrounds.

	generate_triangular_background = ->

		triangular_background_height = $(document.body).outerHeight()
		triangular_background_width = $(document.body).outerWidth()

		pattern = Trianglify
			cell_size: 75
			height: triangular_background_height
			variance: 1
			width: triangular_background_width
			x_colors: ['#23241f', '#f8f8f2', '#23241f', '#f8f8f2']
			y_colors: ['#fd9720', '#66d9ef', '#e6db74']

		document.body.appendChild(pattern.svg())

		$background = $('svg', document.body)

		viewBox = "0 0 #{triangular_background_width} #{triangular_background_height}"

		$background.removeAttr('height').attr
			'aria-hidden': 'true'
			class: 'triangular-background'
			width: '100%'

		# because jQuery's stupid and doesn't listen to my camelcasing for `viewBox`, we have to use native JavaScript:
		$background[0].setAttribute 'viewBox', viewBox

	generate_triangular_background()

	$(window).on 'resize', ->
		$('.triangular-background').remove()
		generate_triangular_background()