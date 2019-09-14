import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

function List({list}) {
	const [todo_length, setTodoLength] = useState(0)

	useEffect(()=>{
		setTodoLength(list.length)
	})

	return (
		<div>
			<p> 共 {todo_length} 筆</p>
			<ul>
				{
					list.map((item, index) => {
						return (
							<li key={`${item}__${index}`}>
								{item}
							</li>
						)
					})
				}
			</ul>
		</div>

	);
}

List.propTypes = propTypes;

export default List;