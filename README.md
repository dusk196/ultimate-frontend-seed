# Ultimate Frontend Seed

[![Gulp JS](https://img.shields.io/badge/Gulp-CF4647?style=for-the-badge&logo=gulp&logoColor=white)](https://gulpjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

![Language](https://img.shields.io/github/languages/top/dusk196/ultimate-frontend-seed?style=for-the-badge)
![Size](https://img.shields.io/github/languages/code-size/dusk196/ultimate-frontend-seed?style=for-the-badge)

A simple seed project for the beginner's to kickstart the basic frontend development in no time! Also, you can play around with the `gulpfile.js` file included and understand how it works or how to configure it as per your requirements. So, stop spending time on building the architecture & become insanely productive in minutes!


# Why?

Using only HTML pages with CSS & Javascript can be really boring. Why? Because we need to save all the changes in HTML or CSS files & then we have to manually refresh the browser to check the changes; EVERTY TIME! If .SASS or .LESS is used for styling, then we have to compile it first manually & same for Typescript also. And guess what? Those are neither minified, nor bundled like other popular frontend frameworks. That's when the Gulp &  NodeJS  comes to the picture.


# So what's included?

* Single file bundle generation for (feel free to skip whichever is not required in the development):
  * HTML
  * CSS
  * SCSS
  * LESS
  * JS
  * TS
* Minifying, mangling & optimising the bundles
* Uglifying the JS/TS files
* A small web server with synchronization for live development


# Prerequisite:

* [Git](https://git-scm.com/) (optional; you can also download this package as .zip)
* [Node JS](https://nodejs.org/en/)

Don't know/have those in your system? No worries!
Just download & install those from the above websites & you're good to go.


# Getting the seed package:

Take a clone of this [repository](https://github.com/dusk196/ultimate-frontend-seed/) from the above link or download as a .zip package & extract it.


# Directory structure:

The folder structure is pretty straight forward. The main source code can be found in the `src` folder with different subfolders to differentiate between file types. The `assets` folder is to contain all the assets (i.e. audio, video, fonts etc.) required for the development. The `.browserslistrc` is to denote add some browser specific CSS prefixes. The `gulpfile.js` is responsible for the automated build generation process. Let's look into this later part of this guide. Deploy the contents of the `dist` folder in the production.

```
 📦
 ┣━📂dist
 ┣━📂src
 ┃ ┣━📂assets
 ┃ ┃ ┗━📜image.jpg
 ┃ ┣━📂css
 ┃ ┃ ┣━📜custom-css-styles1.css
 ┃ ┃ ┗━📜custom-css-styles2.css
 ┃ ┣━📂html
 ┃ ┃ ┗━📜main.html
 ┃ ┣━📂js
 ┃ ┃ ┣━📜custom-js-script1.js
 ┃ ┃ ┗━📜custom-js-script2.js
 ┃ ┣━📂less
 ┃ ┃ ┣━📜custom-less-styles1.less
 ┃ ┃ ┗━📜custom-less-styles2.less
 ┃ ┣━📂scss
 ┃ ┃ ┣━📜custom-scss-styles1.scss
 ┃ ┃ ┗━📜custom-scss-styles2.scss
 ┃ ┣━📂ts
 ┃ ┃ ┣━📜custom-ts-script1.ts
 ┃ ┃ ┗━📜custom-ts-script2.ts
 ┃ ┗━📜index.html
 ┣━📜.browserslistrc
 ┣━📜gulpfile.js
 ┗━📜package.json
```

**Note**: If you don't need a specific type of format, you can delete the subfolder freely. It will not affect the development process in any way. However, please maintain this format to add any new files.


# Getting started:

## Dependencies:

* [Gulp](https://gulpjs.com/): Perform `npm install -g gulp-cli` in the command prompt/terminal

## Installation:

Go to the root folder of the project & perform `npm install`

## Development:

**Note:** All the commands must be executed in the command prompt/terminal of this project.

To simplify the entire process, the gulp tasks has been wrapped into three NPM commands as follows:

* `npm run start`
* `npm run build:dev`
* `npm run build:prod`

Also there are two launch modes available as follows:

* **Development mode**: Minify, mangling & optimization for the JS are not done for easy debugging using `debugger;` or any browser console. However, a single JS file is still generated.
* **Production mode**: Minify, mangling & optimization are done for the JS.

Task | Command
---- | -------
`npm run start` | Builds the entire application in *production mode*, launches the application in the default browser and monitors the entire source code to build & refresh the browser in real-time if changes are made
`npm run build:dev` | Builds the entire application in *development mode*; which is available in the `dist` folder thereafter & ready for live deployment
`npm run build:prod` | Builds the entire application in *production mode*; which is available in the `dist` folder thereafter & ready for live deployment

But wherever the NPM commands are executed, it clears the output directory `dist` & builds the entire application again. Now there are some `Gulp` tasks available which will execute only a particular set of things as follows:

Task | Command
---- | -------
`gulp` | Since no gulp task is mentioned, by default it performs a production build of the entire application
`gulp build` | Performs a build of the entire application in production mode
`gulp build --production=true` | Performs a build of the entire application in production mode with named chunks
`gulp dev` | Performs a build of the entire application in development mode
`gulp watch` | Looks for changes in the entire source code to build & refresh the browser in real-time
`gulp clean` | Delete all the files & folders in the output directory `dist`
`gulp html` | Performs a build of all the `HTML` files available; ignores if none
`gulp css` | Performs a build of all the `CSS` files available; ignores if none
`gulp sass` | Performs a build of all the `SCSS` files available; ignores if none
`gulp less` | Performs a build of all the `LESS` files available; ignores if none
`gulp js` | Performs a build of all the `JS` files available (in production mode); ignores if none
`gulp ts` | Performs a build of all the `TS` files available (in production mode); ignores if none
`gulp jsdev` | Performs a build of all the `JS` files available (in development mode); ignores if none
`gulp tsdev` | Performs a build of all the `TS` files available (in development mode); ignores if none

## Deployment:

Deploy the contents of the `dist` folder in any web server.


# Limitation:

* No source maps
* No test cases
* Deleting a file in `assets` folder doesn't reflect in the output folder in real time
* No polyfills