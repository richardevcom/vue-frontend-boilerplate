<template>
	<div id="app">
		<Nav />
		<router-view class="flex justify-between flex-wrap p-6" />
	</div>
</template>

<script>
	import Nav from "./components/Nav";

	export default {
		name: "App",
		metaInfo: {
			// if no subcomponents specify a metaInfo.title, this title will be used
			title: "Vue Project",
			// all titles will be injected into this template
			titleTemplate: "%s | Vue",
			htmlAttrs: {
				lang: "en",
			},
			meta: [],
		},
		components: {
			Nav,
		},
	};
</script>
