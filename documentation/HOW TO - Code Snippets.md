HOW TO

Generate various code snippets.

		article.pattern_library-closer_look(
			data-field-layout="flex"
			data-field-style="diagram"
			)
			header
				h3 Text field
				p (w/tooltip, disclosure, and error message containers)

			section
				h4 Example

				div
					include ../components/sample_text_field

			section.section_code
				h4 Code

				h5 HTML
				pre: code.language-markup.
					&lt;div class="field"&gt;
						&lt;div class="label_container"&gt;
							&lt;label for="input" class="label"&gt;
								label
							&lt;/label&gt;
							&lt;button class="button button_tooltip"&gt;
								info
							&lt;/button&gt;
						&lt;/div&gt;
						&lt;div class="input_container"&gt;
							&lt;input
								id="input"
								type="text"
								name="text"
								aria-describedby="disclosure"
								placeholder="input"
								class="input"
							&gt;
							&lt;button class="button button_extra_feature"&gt;
								button
							&lt;/button&gt;
						&lt;/div&gt;
						&lt;div id="error_message" class="error_message"&gt;
							div.error_message
						&lt;/div&gt;
						&lt;div id="disclosure" class="disclosure"&gt;
							div.disclosure
						&lt;/div&gt;
					&lt;/div&gt;

				h5 Jade
				pre: code.language-jade.
					div.field
						div.label_container
							label.label(for="input") label
							button.button.button_tooltip info
						div.input_container
							input.input(
								id="input"
								type="text"
								name="text"
								aria-describedby="disclosure"
								placeholder="input"
								)
							button.button.button_extra_feature button
						div.error_message#error_message div.error_message
						div.disclosure#disclosure div.disclosure

				h5 CSS
				pre: code.language-css.
					.field {
						border: solid 1px #66d9ef;
						max-width: 20em;
					}

					.label_container {
						border: solid 1px #a6e22e;
						margin: 4px;
						overflow: hidden;
					}

				h5 Sass
				pre: code.language-scss.
					.field
						border: solid 1px $color_monokai-blue
						max-width: 20em

					.label_container
						border: solid 1px $color_monokai-green
						margin: 4px
						overflow: hidden

				h5 JavaScript
				pre: code.language-javascript.
					var thing = function(thing) {
						return thing;
					};

					thing(anotherThing);

				h5 Coffeescript
				pre: code.language-coffeescript.
					thing = (thing) ->
						return thing

					thing(anotherThing)