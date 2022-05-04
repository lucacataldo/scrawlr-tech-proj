import { createStore } from 'vuex'


export default createStore({
	state: {
		groups: [
			{
				count: 3,
				selected: false
			},
			{
				count: 2,
				selected: false
			}, {
				count: 5,
				selected: false
			}
		]
	},
	mutations: {
		addUpvoteToGroup(state, groupIndex) {
			if (groupIndex >= 0 && groupIndex < state.groups.length) {
				state.groups[groupIndex].count++
			}
		},
		toggleGroupUpvote(state, groupIndex) {
			if (groupIndex >= 0 && groupIndex < state.groups.length) {
				state.groups[groupIndex].selected = !state.groups[groupIndex].selected
			}
		},
		addUpvoteGroup(state) {
			// This mutation was only added to show that more upvote groups can be added dynamically.
			state.groups.push({
				count: 1,
				selected: false
			})
		}
	},
	getters: {
		getGroupStateByIndex: (state) => (groupIndex) => {
			if (groupIndex >= 0 && groupIndex < state.groups.length) {
				return state.groups[groupIndex]
			} else {
				return null
			}
		}


	}
})