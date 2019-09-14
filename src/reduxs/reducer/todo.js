import {
	ADD_TODO,
	DELETE_TODO,
} from '../../actions/action-type';

const initState = [
	1,2,3,4,5
]

export default function todo(state = initState, action) {
	switch(action.type) {
		case ADD_TODO: {
			return [...state, action.value]
		}
		case DELETE_TODO: {
			let todos = [...state]
			todos.splice(action.index, 1)
			return todos
		}
		default: {
			return state
		}
	}
}