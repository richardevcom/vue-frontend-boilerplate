<template>
	<nav class="flex items-center justify-between flex-wrap bg-gray-100 p-6">
		<div class="flex items-center flex-shrink-0 text-gray-500 mr-6">
			<inline-svg class="fill-current h-8 w-8 mr-2" :src="require('../assets/img/logo.svg')" width="54" height="54"></inline-svg>
		</div>

		<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
			<div class="text-sm lg:flex-grow">
				<router-link class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4" to="/">Home</router-link>
				<router-link class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4" to="/about">About</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "Nav",
	};
</script>

<style lang="scss">
	body {
		transition: all 0.6s ease;
	}
</style>
