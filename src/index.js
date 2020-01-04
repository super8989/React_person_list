import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

const Person = () => {
	return (
		<article>
			<img
				src='https://randomuser.me/api/portraits/thumb/men/40.jpg'
				alt='person'
			/>
			<h4>Name</h4>
			<h4>Job</h4>
		</article>
	);
};

const PersonList = () => {
	return (
		<section>
			<Person />
		</section>
	);
};

ReactDOM.render(<PersonList />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
