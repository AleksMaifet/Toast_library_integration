import React from "react";
import './App.css';
import {
	DEFAULT_TOAST_ANIMATION,
	DEFAULT_TOAST_TYPE,
	handleToastService,
	ToastService
} from "@aleksmaifet/toast_library";


function App() {

	const props = {
		animation: DEFAULT_TOAST_ANIMATION.LEFT,
		content: 'Hello',
		label: 'Label',
		backgroundColor: 'pink',
		autoClose: false,
	}

	const props2 = {
		type: DEFAULT_TOAST_TYPE.INFO,
		color: 'yellow',
		animation: DEFAULT_TOAST_ANIMATION.RIGHT,
		autoClose: true,
	}

	const onSetOptions = (value) => () => {
		handleToastService(value)
	}

	return (
		<div className="App">
			<ToastService/>
			<button onClick={onSetOptions(props)}>First Toast</button>
			<br/>
			<button onClick={onSetOptions(props2)}>Second Toast</button>
		</div>
	);
}

export default App;


