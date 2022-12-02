import React from "react";


export default class Paginainicio extends React.Component{
	constructor(props){
		super(props);
		this.state={
			vision:localStorage.getItem("vision"),
		}
	}
	
	render(){

		let clase='d-none  bg bg-danger centrar3';
		if(this.state.vision){
			clase="d-flex bg bg-danger centrar3"
		}
		
		return(
			<>
            
			
			<div className={clase}>
              

             

             </div>
			
			
			</>
			)
	}
}
