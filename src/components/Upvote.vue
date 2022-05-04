<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
	groupIndex: {
		type: Number,
	},
});

const store = useStore();

const groupState = computed(() =>
	store.getters.getGroupStateByIndex(props.groupIndex)
);

// methods

function toggle() {
	store.commit("toggleGroupUpvote", props.groupIndex);
}
</script>

<template>
	<div
		@click="toggle"
		class="upvoteContainer"
		:class="{
			selected: groupState.selected,
		}"
	>
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				class="upArrowPath"
				d="M11.3149 6.29307C11.4939 6.09658 11.7418 5.99834 12.0034 5.99834C12.265 5.99834 12.5128 6.11062 12.6918 6.29307L16.7125 10.3913C16.9053 10.5878 17.0016 10.8404 17.0016 11.0931C17.0016 11.3457 16.9053 11.5983 16.7125 11.7948C16.3407 12.1738 15.7211 12.1738 15.3493 11.7948L12.9672 9.36676V17.0417C12.9672 17.589 12.5404 18.0017 12.0034 18.0017C11.4664 18.0017 11.0395 17.589 11.0395 17.0417V9.36676L8.64364 11.7948C8.27187 12.1738 7.65225 12.1738 7.28048 11.7948C6.9087 11.4159 6.9087 10.7843 7.28048 10.4054L11.3149 6.29307Z"
				fill="#343A40"
			/>
		</svg>
	</div>
</template>

<style lang="scss" scoped>
.upvoteContainer {
	background: #f4f6f8;
	border-radius: 10px;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background 0.3s ease;
	flex-shrink: 0;
	cursor: pointer;

	&.selected {
		background: #e5e8fd;

		.upArrowPath {
			transition: fill 0.3s ease;
			fill: #253cf2;
			animation: upvote 0.5s ease alternate;
		}
	}
}

@keyframes upvote {
	0% {
		transform: translateY(0px);
	}

	75% {
		transform: translateY(-5px);
	}

	100% {
		transform: translateY(0px);
	}
}
</style>
