import React from "react";
export default class Duelosalvaje extends React.Component{
    constructor(props){
    super(props);
    this.state={
        rival:Math.floor(Math.random()*10),
        intro:1

    }
    this.menupelea=this.menupelea.bind(this);

    }

    menupelea(event){
this.setState({
    intro:2
})
    }
    


    render(){
        let clase1="d-none";
        let clase2='d-none';
        let clase3="d-none";
        let clase4="d-none";
        let clase5="d-none";
        let clase6="d-none";
        let clase7="d-none";
        let clase8="d-none";
        let clase9="d-none";
        let clase0="d-none";
        let nombre="";
        let hp="";
        let claseintro="d-flex";
        let clasemenu="d-none";

        if(this.state.rival===1 && this.state.intro===1){clase1="d-flex";nombre="Chikorita"}
         else if(this.state.rival===2&& this.state.intro===1){clase2="d-flex";nombre="Bulbasaur";hp="40"}
         else if(this.state.rival===3&& this.state.intro===1){clase3="d-flex";nombre="Charmander";hp="20"}
         else if(this.state.rival===4&& this.state.intro===1){clase4="d-flex";nombre="Squirtle";hp="20"}
         else if(this.state.rival===5&& this.state.intro===1){clase5="d-flex";nombre="Staryu";hp="15"}
         else if(this.state.rival===6&& this.state.intro===1){clase6="d-flex";nombre="Magmar";hp="15"}
         else if(this.state.rival===7&& this.state.intro===1){clase7="d-flex";nombre="Gloom";hp="15"}
         else if(this.state.rival===8&& this.state.intro===1){clase8="d-flex";nombre="Totodile";hp="35"}
         else if(this.state.rival===9&& this.state.intro===1){clase9="d-flex";nombre="Cyndaquil";hp="35"}
         else if(this.state.rival===0&& this.state.intro===1){clase0="d-flex";nombre="Mew";hp="50"}
         ////////////////////////
         else if(this.state.rival===1 && this.state.intro===2){clase1="d-flex";nombre="Chikorita";claseintro="d-none";clasemenu="d-flex"  }
         else if(this.state.rival===2&& this.state.intro===2){clase2="d-flex";nombre="Bulbasaur";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===3&& this.state.intro===2){clase3="d-flex";nombre="Charmander";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===4&& this.state.intro===2){clase4="d-flex";nombre="Squirtle";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===5&& this.state.intro===2){clase5="d-flex";nombre="Staryu";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===6&& this.state.intro===2){clase6="d-flex";nombre="Magmar";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===7&& this.state.intro===2){clase7="d-flex";nombre="Gloom";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===8&& this.state.intro===2){clase8="d-flex";nombre="Totodile";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===9&& this.state.intro===2){clase9="d-flex";nombre="Cyndaquil";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===0&& this.state.intro===2){clase0="d-flex";nombre="Mew";claseintro="d-none";clasemenu="d-flex"}
         
        var pokesalvaje=JSON.parse(localStorage.getItem("pokemons"));
        var pokebag=JSON.parse(localStorage.getItem("pokebag"));
        
        return(
            <>
           <br></br><br></br><br></br><br></br>
           <div className= "container-fluid  bg relleno">
             <div className="row">
                <div className="col-4  " >
                  <div className="bg arena bordes">
                   <p className="letra2">{ nombre} </p>
                   <p  className="letra2">HP</p>

                   <big><p className="text text-success">{hp}</p></big>
                   </div>

                  
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                    <img src="/img/chikorita.jpg" className= {clase1+" imagen movimiento"}></img>
                    <img src="/img/bulbasaur.jpg" className= {clase2+" imagen  movimiento"}></img>
                    <img src="/img/charmander.jpg" className= {clase3+" imagen  movimiento"}></img>
                    <img src="/img/squirtle.jpg" className= {clase4+" imagen  movimiento"}></img>
                    <img src="/img/staryu.jpg" className= {clase5+" imagen  movimiento"}></img>
                    <img src="/img/magmar.jpg" className= {clase6+" imagen movimiento"}></img>
                    <img src="/img/gloom.jpg" className= {clase7+" imagen  movimiento"}></img>
                    <img src="/img/totodile.jpg" className= {clase8+" imagen  movimiento"}></img>
                    <img src="/img/cyndaquil.jpg" className= {clase9+" imagen  movimiento"}></img>
                    <img src="/img/mew.jpg" className= {clase0+" imagen  movimiento"}></img>



                </div>
             </div>
             <div className="row">
                <div className="col-4">
                    <img src={pokebag[0].Image} className="imagen mt-2 movimiento"></img>
                </div>
                <div className="col-3"></div>
                <div className="col-5">
                
                  <div className="mt-2 bg arena bordes">
                   <p className="letra2">{pokebag[0].nombre} </p>
                   <p  className="letra2">HP</p>

                   <big><p className="text text-success">{pokebag[0].hp}</p></big>
                   </div>

                  
                </div>
                

             </div>
             <div className= {claseintro+" row text text-center"}>
                <div className= "  col-12 letra2 bordes bg bg-white">
                    <p>Un {nombre} salvaje apareció!! </p>
                    <button className="btn btn-success btn-lg"onClick={this.menupelea}>Pelea</button>
                </div>
                
               </div>
               <div className={clasemenu+" row text text-center"}>
               <div className=" col-12 letra2 bordes bg bg-white">
                <button className="btn btn-danger mx-5 btn-lg">ATAQUE</button>
                <button className="btn btn-warning mx-5 btn-lg">POKEMONS</button>
                <button className="btn btn-primary mx-5 btn-lg">ITEMS</button>
                <button className="btn btn-secondary mx-5 btn-lg">ATRAPAR</button>

                </div>



               </div>



           </div>

            
            </>
        )
    }
}