import React from "react";

import { Navbar } from "./navbar.jsx";
import { Cards } from "./cards.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import {Footer} from "./footer.jsx"



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>
				<Jumbotron />
			</div>
			<div>
				<Cards />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
