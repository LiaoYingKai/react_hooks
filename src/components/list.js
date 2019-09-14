import React, { useState, useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../actions/todo-actions';


function List() {
	const dispatch = useDispatch()
	const todos = useSelector(state => state.todo);

	const [todo_length, setTodoLength] = useState(0)

	useEffect(()=>{
		setTodoLength(todos.length)
	})
	return (
		<div>
			<p> 共 {todo_length} 筆</p>
			<ul>
				{
					todos.map((item, index) => {
						return (
							<li key={`${item}__${index}`} onClick={() => dispatch(deleteTodo(index))}>
								{item}
							</li>
						)
					})
				}
			</ul>
		</div>
	);
}

export default List;