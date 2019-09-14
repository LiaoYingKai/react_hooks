import React, { useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todo-actions';


function Input({onSubmit}) {
	const [value, setValue] = useState('')

	const dispatch = useDispatch()

	return (
		<div>
			<input value={value} onChange={event => {setValue(event.target.value)}}></input>
			<button onClick={() =>{dispatch(addTodo(value))}}>輸入</button>
		</div>
	);
}

export default Input;