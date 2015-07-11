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

Structure is currently:

	.
	├── app
	|	├── index.jade
	|	├── assets
	|	|	└── (Path)
	|	├── bower_components
	|	├── markdown
	|	|	└── (Pages Path)
	|	├── markup
	|	|	├── instances
	|	|	|	├── components
	|	|	|	├── pages
	|	|	|	|	└── (Pages Path)
	|	|	|	└── sections
	|	|	└── templates
	|	|		├── components
	|	|		├── pages
	|	|		└── sections
	|	├── scripts
	|	├── styles
	|	|	├── components
	|	|	├── pages
	|	|	└── sections
	|	└── vendor (non-bower-componentized vendor scripts)
	├── dist
	|	├── index.html
	|	├── assets
	|	|	└── (Path)
	|	├── (Pages Path)
	|	├── scripts
	|	├── styles
	|	└── vendor (bower_components and vendor)
	├── .bowerrc
	├── .gitignore
	├── bower.json
	├── gulpfile.js
	├── package.json
	├── node_modules
	└── README.md


## Presentations

Slideshows are created with [Remark](https://github.com/gnab/remark).

fwiw, I couldn't actually **build** Remark with their instructions, and had to resort to ripping already-built files out of other examples. Pretty simple stuff to get it set up, though—reference the js, reference the css, and host the html.

Because there's no bower_component for Remark, I've just inlined the minified js. Gross stuff, but it works for now.

### How to Edit

- Open `accessibility_ux.md`
- Edit as Markdown

_Special rules can be found here: [Remark - Wiki](https://github.com/gnab/remark/wiki)_.