import React from "react";


export default class Paginapokemons extends React.Component{
	constructor(props){
		super(props);
		this.state={
			pokemons:[]

		}
	}
	componentDidMount(){
		fetch("https://pokeapi.co/api/v2/pokemon")
		.then(res=>res.json())
		.then ((result)=>{
			console.log(result)
			this.setState({
				pokemons:result
			})
		}
		)
	}

	
	
	render(){
		return(
			<>
            <br></br><br></br><br></br><br></br>
			{this.state.pokemons.map((pokemon)=>(
				<p>{pokemon.name}({pokemon.height})</p>
			))

			}
		
			
			</>
			)
	}
}
