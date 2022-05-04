<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

import Upvote from "./Upvote.vue";

const store = useStore();

const props = defineProps({
	count: {
		type: Number,
		default: 0,
	},
	groupIndex: {
		type: Number,
	},
});

function addUpvote() {
	store.commit("addUpvoteToGroup", props.groupIndex);
}
</script>

<template>
	<div class="upvoteGroupCont">
		<div class="upvotes">
			<Upvote
				:groupIndex="props.groupIndex"
				v-for="i in props.count"
				:key="i"
			/>
		</div>
		<div @click="addUpvote" class="addButton">
			<img src="../assets/add-filled.svg" alt="Add an upvote button" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.upvoteGroupCont {
	margin: 5px;
	display: flex;
	align-items: center;
	animation: floatUp 0.3s ease;
	box-sizing: border-box;
	max-width: 100vw;

	.upvotes {
		padding: 10px;
		border-radius: 10px;
		border: solid 1px #f4f6f8;
		display: flex;
		gap: 5px;
		width: 380px;
		overflow-x: auto;
	}

	.addButton {
		padding: 5px 20px;
		cursor: pointer;

		&:hover {
			opacity: 0.7;
		}
	}
}

@keyframes floatUp {
	from {
		transform: translateY(10px);
		opacity: 0;
	}

	to {
		transform: translateY(0px);
		opacity: 1;
	}
}
</style>
