import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<div>
	<NavBar/>
<Jumbotron/>
<Cards/>
<br></br>
	<Footer/>
	</div>
	);
};

export default Home;
