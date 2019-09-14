import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

function Input({onSubmit}) {
	const [value, setValue] = useState('')

	return (
		<div>
			<input value={value} onChange={event => {setValue(event.target.value)}}></input>
			<button onClick={() => {onSubmit(value)}}>輸入</button>
		</div>
	);
}

Input.propTypes = propTypes;

export default Input;