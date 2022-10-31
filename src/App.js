import React from "react";
import './App.css';
import {
	DEFAULT_TOAST_ANIMATION,
	DEFAULT_TOAST_POSITION,
	DEFAULT_TOAST_TYPE,
	handleToastService,
	ToastContainer
} from "@aleksmaifet/toast_library";


function App() {

	const props = {
		animation: DEFAULT_TOAST_ANIMATION.LEFT,
		position: DEFAULT_TOAST_POSITION.BOTTOM_LEFT,
		content: 'Hello',
		label: 'Label',
		backgroundColor: 'pink',
		color: 'yellow',
	}

	const props2 = {
		type: DEFAULT_TOAST_TYPE.WARNING,
		animation: DEFAULT_TOAST_ANIMATION.RIGHT,
		position: DEFAULT_TOAST_POSITION.TOP_RIGHT,
		autoClose: true,
		spacing: {
			top: 30,
			right: 50,
		}
	}

	const onSetOptions = (value) => () => {
		handleToastService(value)
	}

	return (
		<div className="App">
			<ToastContainer/>
			<button onClick={onSetOptions(props)}>First Toast</button>
			<br/>
			<button onClick={onSetOptions(props2)}>Second Toast</button>
		</div>
	);
}

export default App;


