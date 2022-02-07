<template>
	<header>
		<RouterLink :to="{ name: 'home' }">Go to "home"</RouterLink>
		<br />

		<RouterLink :to="{ name: 'shortcuts' }">Shortcuts</RouterLink>

		<!-- 
			eksterne lenker
			<a href="https://nrk.no" target="_blank">Ekstern lenke</a>
		-->
	</header>
</template>

<script>
export default {
	methods: {
		push() {
			this.$router.push("/");
		},

		replace() {
			this.$router.replace("/");
		},
	},
};
</script>

<style>
header {
	margin-bottom: 1em;
	font-size: 0.5em;
	background: #eee;
}

header .router-link-active {
	background: yellow;
}
</style>
