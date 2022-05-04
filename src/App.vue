<script setup>
import UpvoteGroup from "./components/UpvoteGroup.vue";
</script>

<template>
	<div class="mainContainer">
		<h1>Scrawlr Technical Project</h1>
		<p>by Luca Cataldo</p>

		<UpvoteGroup
			v-for="(group, i) in $store.state.groups"
			:key="i"
			:count="group.count"
			:groupIndex="i"
		/>

		<!-- 
			BONUS!

			The following lines were commented out because this functionality wasn't required in the spec.

			Because of my approach, more upvote groups can be added easily & dynamically
		-->

		
		<!-- 
			<div @click="$store.commit('addUpvoteGroup')" class="addUpvoteGroup">
				+ Add upvote group
			</div>
		-->
		
		</div>
</template>

<style lang="scss">
body {
	margin: 0px;
	padding: 0px;
	font-family: Arial, Helvetica, sans-serif;
}
.mainContainer {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	h1 {
		margin-bottom: 5px;
	}
}

.addUpvoteGroup {
	cursor: pointer;
	margin: 10px 5px;
}
</style>
