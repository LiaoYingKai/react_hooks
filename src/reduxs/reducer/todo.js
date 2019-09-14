import {
	ADD_TODO,
	DELETE_TODO,
} from '../../actions/action-type';

const initState = []

export default function todo(state = initState, action) {
	switch(action.type) {
		case ADD_TODO: {
			return [...state, action.value]
		}
		case DELETE_TODO: {
			let todos = [...state]
			todos.splice(action.index, 0)
			return todos
		}
		default: {
			return state
		}
	}
}