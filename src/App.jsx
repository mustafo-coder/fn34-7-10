import React from 'react';
import {
	About,
	Blog,
	Contact,
	Demo,
	Footer,
	Hero,
	Info,
	Navbar,
	Stats,
	Tasks,
} from './components';

const App = () => {
	return (
		<div>
			{/* Navbar */}
			<Navbar />
			{/* Azizbek */}
			<Hero />
			{/* Diyorbek */}
			<Stats />
			{/* Abrorbek */}
			<About />
			{/* Behzod */}
			<Info />
			{/* Qoyilbek */}
			<Demo />
			{/* Shohijahon */}
			<Tasks />
			{/* Murodjon */}
			<Blog />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;