import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './pages/Details';
import Summary from './pages/Summary';
import Header from './components/Header';
import './App.css';
import { WatchListContextProvider } from './context/watchlistContext';

const App = () => {
	return (
		<div className='container'>
			<WatchListContextProvider>
				<Router>
					<Header />
					<Route exact path='/' component={Summary} />
				</Router>
			</WatchListContextProvider>
		</div>
	);
};

export default App;
