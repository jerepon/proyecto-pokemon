import React from "react";
import './Menu.css';
import { Link } from "react-router-dom";
 
export default class Menu extends React.Component{

        constructor(props){
        super(props);
        this.state={
            pantalla:true,
            nuevo:true,
            usuario:localStorage.getItem("usuario"),
            email:localStorage.getItem("email"),
            visor:localStorage.setItem("visor",false)
            
        }
        this.nuevo=this.nuevo.bind(this);
        this.pantalla=this.pantalla.bind(this);
        this.cambiovalor=this.cambiovalor.bind(this);
        this.cambiovalor2=this.cambiovalor2.bind(this);
        this.abandonar=this.abandonar.bind(this);
       
    }
     abandonar(event){
        
      if(window.confirm('Estas seguro de abandonar??')){
        this.setState({ pantalla:true,
            nuevo:true,
            usuario:'',
            email:'',});
            localStorage.removeItem("usuario");
		localStorage.removeItem("email");
    localStorage.removeItem("visor");
        }
        }

       cambiovalor(event){
		let datoingresado=event.target.value;
		this.setState({
			usuario:datoingresado
		})
	   }
      cambiovalor2(event){
		let datoingresado=event.target.value;
		this.setState({
			email:datoingresado
		})
	    }

 
       nuevo(event){
   

    
       this.setState({
        
		
		nuevo:false,
       })


        }
 
 
       pantalla(event){
   
       if(this.state.usuario.length>0 && this.state.email.length>10)
       {


	   this.setState({
		
		pantalla:false    

         });
         localStorage.setItem("usuario",this.state.usuario);
	localStorage.setItem("email",this.state.email);
  localStorage.setItem("visor",true);
         }else{alert('Nombre o Email muy cortos o no validos')}
      
     
          }   


         render(){
         let clase="";
         let clase1="";
         let clase2="";
         let clase3="";
         if(this.state.pantalla && this.state.nuevo)
         {clase="d-none";
          clase1="d-none";
         clase2="d-block"}
         else if(this.state.pantalla){
            clase="d-block";
            clase1="d-none";
            clase2="d-none";

          }
        
        
        
    
         
          else{
            clase="d-none";
            clase1="d-flex";
            clase2="d-none";
         }

        

         return(
         <>   <div className={clase2+" negro"}>
            <button type="button"className={"btn btn-success centrar m-auto btn-lg "+clase2} onClick={this.nuevo}>Nueva partida</button>
          </div>

            
       

            <div className="row text-center">


                <div className= {clase+"   bg bg-success centrar2"}>
                <h1>Empieza tu nueva aventura</h1>
                <form clasName='form-group'>

                 <label>Nombre</label>
                 <input type='text' className="form-control" onChange={this.cambiovalor}></input>
                 <label >Email</label>
                 <input type='email' className="form-control" onChange={this.cambiovalor2}></input>
                 <button type="button" className="btn btn-primary" onClick={this.pantalla}>Crear usuario</button>

                </form>
                </div>

             <div className={"container col-12 "+clase1+" align-items-center bg-light pokemon fixed-top"} >
            
                <h1 className="mx-4">Pokemon<br></br>         Mew-two</h1>
                <Link to='/' className="mx-4 btn celeste" >Menu</Link>
                <Link to='/desafiomewtwo' className="mx-4 btn btn-success" >Desafio Mew-two</Link>
                <Link to='/duelos' className="mx-4 btn naranja">Duelo de entrenadores</Link>
                <Link to='/captura' className="mx-4 btn rosa">Atrapar Pokemons</Link>
                <Link to='/items' className="mx-4 btn violeta">Items</Link>
                <Link to='/pokemons' className="mx-4 btn btn-secondary">Pokemons</Link>
                <Link to='/tienda' className="mx-4 btn btn-primary">Poketienda</Link>
                <Link to='/centro' className="mx-4 btn btn-warning">Pokecenter</Link>
                <button className="mx-4 btn btn-danger" onClick={this.abandonar}>Abandonar partida</button>
                
                



             </div>
             
             
            </div>
           


          </>  

        )
    }
}