import React, { useState, } from 'react';
import Input from '../components/input';
import List from '../components/list';

function Home() {
	const [list, setList] = useState([])

	function _handleInputList(value) {
		setList([...list, value])
	}
	return (
		<div>
			<Input onSubmit={_handleInputList}></Input>
			<List list={list}></List>
		</div>
	);
}

export default Home;