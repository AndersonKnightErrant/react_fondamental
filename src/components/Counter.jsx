import React, { useState } from "react";


const Counter = () => {
	const [count, setCount] = useState(0);

	function addCount() {
    setCount(count + 1);
	}

	function minusCount() {
    setCount(count - 1);
  }

	return (
		<div>
			<h1>Счетчик</h1>
			<button onClick={addCount}>Increment</button>
			<button onClick={minusCount}>Decrement</button>
			<div>{count}</div>
		</div>
	);
}

export default Counter;