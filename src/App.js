import React from 'react';

import './App.css';
import Button from 'react-bootstrap/Button';
import { Home } from './Components/Home';
import { Department } from './Components/Department';
import { Employee } from './Components/Employee';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Navigation} from './Components/Navigation';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
			<Navigation/>
			
/* 				<switch>
					<Route path='/' component={Home} exact></Route>
					<Route path='/department' component={Department} exact></Route>
					<Route path='/employee' component={Employee} exact></Route>
				</switch> */
			</div>
		</BrowserRouter>
	);
}

export default App;
