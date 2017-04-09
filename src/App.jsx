import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button } from 'react-bootstrap' 

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			deadline:    'April 10, 2017',
			newDeadline: ''
		}
	}

	changeDeadline(){
		this.setState({deadline: this.state.newDeadline})
	}

	render(){
		return(
			<div className="App">
				<div className="App__title">Countown to {this.state.deadline}</div>
				<Clock 
					deadline={this.state.deadline}
				/>
				<Form inline>
				<FormControl
					className="Deadline-input"
					placeholder="new date"
					onChange={e => this.setState( {newDeadline: e.target.value})}
				/>
				<Button onClick={() => this.changeDeadline()}>Submit</Button>
				</Form>
			</div>
		)
	}
}

export default App;