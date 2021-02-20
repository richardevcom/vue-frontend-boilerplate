<a href="https://github.com/richardevcom/vue-frontend-boilerplate/releases" target="_blank"><img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/richardevcom/vue-frontend-boilerplate?style=flat-square"></a>
<a href="https://discord.gg/sfuevNp5E3" target="_blank"><img src="https://img.shields.io/badge/join-%20discord-7289da.svg?sanitize=true"></a>

## Introduction

Simple **Vue.js** project with additional pre-configured packages and tweaks:<br/>

-   **<a href="https://vue-loader.vuejs.org/guide/pre-processors.html" target="_blank">SCSS/SASS</a> support**
-   **<a href="https://github.com/shrpne/vue-inline-svg" target="_blank">Inline SVG</a>**
-   **<a href="https://router.vuejs.org/" target="_blank">Router</a>**
-   **<a href="https://vue-meta.nuxtjs.org/" target="_blank">Meta</a>**

#### Browser Compatibility

This project uses **<a href="https://github.com/browserslist/browserslist" target="_blank">Browserslist</a>** to automatically generate all necessary polyfills.

## Install

```
git clone https://github.com/richardevcom/vue-frontend-boilerplate.git
```

```
npm install
```

### Compile and serve (for development)

```
npm run serve
```

### Compile and minify (for production)

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## SVG

### Usage

Path to SVG file

```html
<inline-svg src="/my.svg" />
```

Note: if you use vue-loader assets or vue-cli, then paths like '../assets/my.svg' will not be handled by file-loader automatically like vue-cli do for `<img>` tag, so you will need to use it with `require`:

```html
<inline-svg :src="require('../assets/my.svg')" />
```

**Example**

```html
<inline-svg
	src="image.svg"
	transformSource="transformSvg"
	@loaded="svgLoaded($event)"
	@unloaded="svgUnloaded()"
	@error="svgLoadError($event)"
	width="150"
	height="150"
	fill="black"
	aria-label="My image"
></inline-svg>
```

<a href="https://github.com/shrpne/vue-inline-svg" target="_blank">Read more about using **inline SVG** package.</a>

## Meta

### Usage

See <a href="https://vue-meta.nuxtjs.org/api" target="_blank">API</a> docs for more info.

**App.vue**

```html
<template>
	<div id="app">
		<nav />
		<router-view class="flex justify-between flex-wrap p-6" />
	</div>
</template>

<script>
	export default {
		name: "App",
		metaInfo: {
			// if no subcomponents specify a metaInfo.title, this title will be used
			title: "Vue Projet",
			// all titles will be injected into this template
			titleTemplate: "%s | Vue",
		},
	       ...
	};
</script>
```

**Home.vue**

```html
<template>
	<div class="home">
		<p>This is homepage.</p>
	</div>
</template>

<script>
	export default {
		name: "Home",
		metaInfo: {
			title: "Home",
			// override the parent template and just use the above title only
			titleTemplate: null,
		},
	       ...
	};
</script>
```

<a href="https://vue-meta.nuxtjs.org/" target="_blank">Read more about using **vue-meta**.</a>
