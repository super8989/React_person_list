import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

const Person = ({ img, name, job, children }) => {
	const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

	return (
		<article>
			<img src={url} alt='person' />
			<h4>{name}</h4>
			<h4>{job}</h4>
			{children}
		</article>
	);
};

const PersonList = () => {
	return (
		<section>
			<Person img='32' name='John' job='Developer' />
			<Person img='15' name='Dave' job='Designer' />
			<Person img='81' name='Seth' job='UI/UX' />
		</section>
	);
};

ReactDOM.render(<PersonList />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
