import React from 'react'
import RootItem from '../containers/RootItem'
import HeaderBreadCrumb from '../containers/HeaderBreadCrumb'
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
          <HeaderBreadCrumb />
          <RootItem />
        </div>
      </div>
    )
  }
}
