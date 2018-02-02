import React from 'react'
import RootItem from '../containers/RootItem'
import '../App.css'

export default class App extends React.Component{
	componentDidUpdate(){
		console.log("got called")
	}
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="appContainer">
				<div className="app">
					<RootItem />
				</div>
		  </div>
		)
	}
}
