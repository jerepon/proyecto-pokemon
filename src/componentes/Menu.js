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
            visor:true,

            
            
        }
        this.nuevo=this.nuevo.bind(this);
        this.pantalla=this.pantalla.bind(this);
        this.cambiovalor=this.cambiovalor.bind(this);
        this.cambiovalor2=this.cambiovalor2.bind(this);
        this.abandonar=this.abandonar.bind(this);
        this.cambiovisor=this.cambiovisor.bind(this);
        this.cambiovisor2=this.cambiovisor2.bind(this);
       
    }
   
   
    cambiovisor2(event){
      this.setState({
        visor:false,
      })
    }



    cambiovisor(event){
      this.setState({
        visor:true,
      })
    }


     abandonar(event){
        
      if(window.confirm('Estas seguro de abandonar??')){
        this.setState({ pantalla:true,
            nuevo:true,
            visor:true,
            usuario:'',
            email:'',});
            localStorage.removeItem("usuario");
		localStorage.removeItem("email");
    
   
    
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
		
		pantalla:false,
    visor:false,    

         });
         localStorage.setItem("usuario",this.state.usuario);
	localStorage.setItem("email",this.state.email);
  
         }else{alert('Nombre o Email muy cortos o no validos')}
      
     
          }   


         render(){
         let clase="";
         let clase1="";
         let clase2="";
         let clase3="d-none  bg bg-danger centrar3";
         if(this.state.pantalla && this.state.nuevo)
         {clase="d-none";
          clase1="d-none";
         clase2="d-block"}
         else if(this.state.pantalla&&this.state.visor){
            clase="d-block";
            clase1="d-none";
            clase2="d-none";

          }
        else if(this.state.visor){
          clase="d-none";
            clase1="d-flex";
            clase2="d-none";
            clase3="d-none bg bg-danger centrar3";
            
        }
         
         
          else{
            clase="d-none";
            clase1="d-flex";
            clase2="d-none";
            clase3="d-flex bg bg-danger centrar3";
            
         }

        

         return(
         <> 
         



           <div className={clase2+" negro"}>
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
                <Link to='/' className="mx-4 btn celeste" onClick={this.cambiovisor2}>Inicio</Link>
                <Link to='/desafiomewtwo' className="mx-4 btn btn-success" onClick={this.cambiovisor}>Desafio Mew-two</Link>
                <Link to='/duelos' className="mx-4 btn naranja"onClick={this.cambiovisor} >Duelo de entrenadores</Link>
                <Link to='/captura' className="mx-4 btn rosa"onClick={this.cambiovisor}>Atrapar Pokemons</Link>
                <Link to='/items' className="mx-4 btn violeta"onClick={this.cambiovisor}>Items</Link>
                <Link to='/pokemons' className="mx-4 btn btn-secondary"onClick={this.cambiovisor}>Pokemons</Link>
                <Link to='/tienda' className="mx-4 btn btn-primary"onClick={this.cambiovisor}>Poketienda</Link>
                <Link to='/centro' className="mx-4 btn btn-warning"onClick={this.cambiovisor}>Pokecenter</Link>
                <button className="mx-4 btn btn-danger" onClick={this.abandonar}>Abandonar partida</button>
                
                



             </div>
             <div className={clase3}>
              <span className="letra centrar3">
                <br></br><br></br><br></br>
                Bienvenido entrenador {this.state.usuario} al mundo pókemon, en este pequeño universo tu primer pókemon será Píkachu, tendrás 5 dólares, 3 pokebolas y 1 poción.
Deberás atrapar recomendadamente 6 pokemons para enfrentar a Mew-Two y ganar el juego, podrás atraparlo?.
Recuerda que para comprar más pokebolas deberás pelear con otros entrenadores y juntar dólares, que disfrutes el mini juego!!<br></br><br></br>
Contacto:+54 114979-5299 ||IG:jerelifeguard||Linkedin:www.linkedin.com/in/jeremiasdanieltorres
</span>
                     
             </div>
             
            </div>
           


          </>  

        )
    }
}