import {
	ADD_TODO,
	DELETE_TODO,
} from './action-type';

export function addTodo(value) {
	return {
		type: ADD_TODO,
		value,
	}
}

export function deleteTodo(index) {
	return {
		type: DELETE_TODO,
		index,
	}
}