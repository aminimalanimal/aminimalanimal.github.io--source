# Main.litcoffee

## Trianglify

Generates fun backgrounds.

	pattern = Trianglify
		cell_size: 75
		height: window.innerHeight
		variance: 1
		width: window.innerWidth
		x_colors: ['#000000', '#66d9ef']
		y_colors: ['#000000', '#66d9ef']

	document.body.appendChild(pattern.svg())

	$background = $('svg', document.body)

	viewBox = "0 0 #{window.innerWidth} #{window.innerHeight}"

	$background.attr
		'aria-hidden': 'true'
		class: 'triangular_background'
		height: '100%'
		preserveAspectRatio: 'none'
		width: '100%'

	# because jQuery's stupid and doesn't listen to my camelcasing for `viewBox`, we have to use native JavaScript:
	$background[0].setAttribute 'viewBox', viewBox