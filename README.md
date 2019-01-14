# Compiling SCSS into CSS with Rollup

This sample project contains the Rollup configuration script that compiles SCSS source code into a bundled CSS file.

Last updated: 14 January 2019

## TL;DR

The sample Rollup config file creates a single CSS file at "dist/main.css".

An empty file "dist/main.js" is created as a result of a by-product.

Scripts are defined in "package.json" that invokes Rollup to compile the SCSS files. To generate production CSS, simply run `npm run build`.

To generate CSS during development, run `npm run build:dev` - this will watch the SCSS files for changes and automatically re-compile the SCSS files.

## Description

The plugin that compiles the SCSS files to CSS is [rollup-plugin-scss](https://www.npmjs.com/package/rollup-plugin-scss).

The layout in the "sass" directory is adopted from [http://sass-guidelin.es](http://sass-guidelin.es).

Note that the individual SCSS files are not included in a "sass/main.scss" file as usually done in SASS; instead they are included by "sass/main.js". This is done so that changes to the source SCSS files can be "watched" by Rollup.

