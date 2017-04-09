import React, { Component } from 'react';
import './App.css';

class Clock extends Component {

	constructor(props){
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}		
	}

	componentWillMount(){
		this.getTimeUntil(this.props.dealine);
	}

	componentDidMount(){
		setInterval( () => this.getTimeUntil(this.props.dealine),1000 );
	}

	leading(num){
		return num < 10 ? '0' + num : num; 
	}

	getTimeUntil(deadline){

		const time    = Date.parse(this.props.deadline) - Date.parse(new Date() );		
		const seconds = Math.floor((time/1000)          %60 );
		const minutes = Math.floor((time/1000/60)       %60 );
		const hours   = Math.floor(time/(1000*60*60)    %24 );
		const days    = Math.floor(time/(1000*60*60*24) );

		this.setState({days,hours,minutes, seconds})
	}

	render(){
		
		return(
			<div>
				<div className="Clock__days">{this.leading(this.state.days)} days</div>
				<div className="Clock__hours">{this.leading(this.state.hours)} hours</div>
				<div className="Clock__minutes">{this.leading(this.state.minutes)} minutes</div>
				<div className="Clock__seconds">{this.leading(this.state.seconds)} seconds</div>
			</div>	
		)
	}
}

export default Clock;