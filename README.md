# aminimalanimal.github.io--source

This repo contains the source files for my github pages portfolio project.

To view the site, check out [aminimalanimal.github.io](http://aminimalanimal.github.io)

To view the source's output, go to [github - aminimalanimal.github.io--dist](https://github.com/aminimalanimal/aminimalanimal.github.io)

## Technologies Used

Precompilers: [jade](http://jade-lang.com), [Sass](http://sass-lang.com), [coffeescript](http://coffeescript.org)

Task-runner: [Gulp](http://gulpjs.com)

## To run as dev
- clone repo
- navigate to repo
- run `npm install`
- run `bower install`
- run `gulp`
- your browser should automatically open the page

## File Structure
The `dist` folder isn't uploaded in this repo—this contains only the source files. To see the output, check out [github -- aminimalanimal.github.io](https://github.com/aminimalanimal/aminimalanimal.github.io).

The goal is to just have a fairly simple setup that keeps the component's pieces together and makes adding new components fairly effortless. Eventually, I'd like to start implementing Webpack, but for now, everything gets flattened.

- each component template has its own markup, stylesheet, and script
	- instances can override the styles in the usual way: override them
	- instances can override scripts by extending the prototype

Currently using the following structure:

	.
	├── app
	|	├──	index.jade
	|	├──	global_variables.sass
	|	├──	global.sass
	|	├──	instances
	|	|	├──	components
	|	|	|	└──	[folder - component instance name]
	|	|	|		├──	z.jade
	|	|	|		├──	z.sass
	|	|	|		├──	z.litcoffee
	|	|	|		├──	readme
	|	|	|		└──	assets
	|	|	|			├──	svg, png, jpg
	|	|	|			└──	markdown
	|	|	└──	pages
	|	|		└──	[Pages Path]
	|	├──	templates
	|	|	├──	components
	|	|	|	└──	[folder - component template name]
	|	|	|		├──	z.jade
	|	|	|		├──	z.sass
	|	|	|		├──	z.litcoffee
	|	|	|		├──	readme.md
	|	|	|		└──	assets
	|	|	|			├──	svg, png, jpg
	|	|	|			└──	markdown
	|	|	└──	pages
	|	└──	vendor
	|		├──	bower_components
	|		└──	(non-bower-componentized vendor scripts)
	|
	├──	dist
	|	├──	index.html
	|	├──	style.css
	|	├──	script.js
	|	├──	assets
	|	├──	[Pages Path]
	|	└──	vendor
	├──	.bowerrc
	├──	.gitignore
	├──	bower.json
	├──	gulpfile.js
	├──	package.json
	├──	node_modules
	└──	README.md


## Presentations

Slideshows are created with [Remark](https://github.com/gnab/remark).

fwiw, I couldn't actually **build** Remark with their instructions, and had to resort to ripping already-built files out of other examples. Pretty simple stuff to get it set up, though—reference the js, reference the css, and host the html.

Because there's no bower_component for Remark, I've just inlined the minified js. Gross stuff, but it works for now.

### How to Edit

- Open `accessibility_ux.md`
- Edit as Markdown

_Special rules can be found here: [Remark - Wiki](https://github.com/gnab/remark/wiki)_.