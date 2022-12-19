import React from "react";
export default class Duelo extends React.Component{
    constructor(props){
    super(props);
    this.state={
        rival:Math.floor(Math.random()*10),
        intro:1,
        pokemon:0

    }
    this.menupelea=this.menupelea.bind(this);

    }

    menupelea(event){
this.setState({
    intro:2,
    pokemon:1
})
        
}





    render(){
        let clasetrainer="d-flex";
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
        let claseintro="d-flex";
        let clasemenu="d-none";
        let clasepoke="d-none";
        let clasepoke1="d-none";
        let clasepoke2="d-none";
        let clasepoke3="d-none";
        let clasepoke4="d-none";
        let clasepoke5="d-none";
        let clasepoke6="d-none";
        let clasepoke7="d-none";
        let clasepoke8="d-none";
        let clasepoke9="d-none";
        let clasepoke10="d-none";
        
        

        if(this.state.rival===1 && this.state.intro===1){clase1="d-flex";nombre="Dominguera"}
         else if(this.state.rival===2&& this.state.intro===1){clase2="d-flex";nombre="Cazabichos"}
         else if(this.state.rival===3&& this.state.intro===1){clase3="d-flex";nombre="Ornitologo"}
         else if(this.state.rival===4&& this.state.intro===1){clase4="d-flex";nombre="Montañero"}
         else if(this.state.rival===5&& this.state.intro===1){clase5="d-flex";nombre="Karateka"}
         else if(this.state.rival===6&& this.state.intro===1){clase6="d-flex";nombre="Nadador"}
         else if(this.state.rival===7&& this.state.intro===1){clase7="d-flex";nombre="Señorita Aroma"}
         else if(this.state.rival===8&& this.state.intro===1){clase8="d-flex";nombre="Fogonero"}
         else if(this.state.rival===9&& this.state.intro===1){clase9="d-flex";nombre="Pokemaniaco"}
         else if(this.state.rival===0&& this.state.intro===1){clase0="d-flex";nombre="Guitarrista"}
         ////////////////////////
         else if(this.state.rival===1 && this.state.intro===2&&this.state.pokemon===1){clase1="d-none";nombre="Dominguera";claseintro="d-none";clasemenu="d-flex";clasepoke="d-flex";clasetrainer="d-none";clasepoke10="d-flex"}
         else if(this.state.rival===2&& this.state.intro===2&&this.state.pokemon===1){clase2="d-none";nombre="Cazabichos";claseintro="d-none";clasemenu="d-flex";clasepoke1="d-flex";clasetrainer="d-none";clasepoke10="d-flex"}
         else if(this.state.rival===3&& this.state.intro===2&&this.state.pokemon===1){clase3="d-none";nombre="Ornitologo";claseintro="d-none";clasemenu="d-flex";clasepoke2="d-flex";clasetrainer="d-none";clasepoke10="d-flex"}
         else if(this.state.rival===4&& this.state.intro===2&&this.state.pokemon===1){clase4="d-none";nombre="Montañero";claseintro="d-none";clasemenu="d-flex";clasepoke3="d-flex";clasetrainer="d-none";clasepoke10="d-flex";}
         else if(this.state.rival===5&& this.state.intro===2&&this.state.pokemon===1){clase5="d-none";nombre="Karateka";claseintro="d-none";clasemenu="d-flex";clasepoke4="d-flex";clasetrainer="d-none";clasepoke10="d-flex"}
         else if(this.state.rival===6&& this.state.intro===2&&this.state.pokemon===1){clase6="d-none";nombre="Nadador";claseintro="d-none";clasemenu="d-flex";clasepoke5="d-flex";clasetrainer="d-none";clasepoke10="d-flex"}
         else if(this.state.rival===7&& this.state.intro===2&&this.state.pokemon===1){clase7="d-none";nombre="Señorita Aroma";claseintro="d-none";clasemenu="d-flex";clasepoke6="d-flex";clasetrainer="d-none";clasepoke10="d-flex"}
         else if(this.state.rival===8&& this.state.intro===2&&this.state.pokemon===1){clase8="d-none";nombre="Fogonero";claseintro="d-none";clasemenu="d-flex";clasepoke7="d-flex";clasetrainer="d-none";clasepoke10="d-flex"}
         else if(this.state.rival===9&& this.state.intro===2&&this.state.pokemon===1){clase9="d-none";nombre="Pokemaniaco";claseintro="d-none";clasemenu="d-flex";clasepoke8="d-flex";clasetrainer="d-none";clasepoke10="d-flex"}
         else if(this.state.rival===0&& this.state.intro===2&&this.state.pokemon===1){clase0="d-none";nombre="Guitarrista";claseintro="d-none";clasemenu="d-flex";clasepoke9="d-flex";clasetrainer="d-none";clasepoke10="d-flex"}
         


         /////////////////////////
         else if(this.state.rival===1 && this.state.intro===2){clase1="d-flex";nombre="Dominguera";claseintro="d-none";clasemenu="d-flex"  }
         else if(this.state.rival===2&& this.state.intro===2){clase2="d-flex";nombre="Cazabichos";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===3&& this.state.intro===2){clase3="d-flex";nombre="Ornitologo";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===4&& this.state.intro===2){clase4="d-flex";nombre="Montañero";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===5&& this.state.intro===2){clase5="d-flex";nombre="Karateka";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===6&& this.state.intro===2){clase6="d-flex";nombre="Nadador";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===7&& this.state.intro===2){clase7="d-flex";nombre="Señorita Aroma";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===8&& this.state.intro===2){clase8="d-flex";nombre="Fogonero";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===9&& this.state.intro===2){clase9="d-flex";nombre="Pokemaniaco";claseintro="d-none";clasemenu="d-flex"}
         else if(this.state.rival===0&& this.state.intro===2){clase0="d-flex";nombre="Guitarrista";claseintro="d-none";clasemenu="d-flex"}
         
         

         var pokesalvaje=JSON.parse(localStorage.getItem("pokemons"));
         var pokebag=JSON.parse(localStorage.getItem("pokebag"));
         var pokerival1=JSON.parse(localStorage.getItem("pokerival1"));
         var pokerival2=JSON.parse(localStorage.getItem("pokerival2"));
         var pokerival3=JSON.parse(localStorage.getItem("pokerival3"));
         var pokerival4=JSON.parse(localStorage.getItem("pokerival4"));
         var pokerival5=JSON.parse(localStorage.getItem("pokerival5"));
         var pokerival6=JSON.parse(localStorage.getItem("pokerival6"));
         var pokerival7=JSON.parse(localStorage.getItem("pokerival7"));
         var pokerival8=JSON.parse(localStorage.getItem("pokerival8"));
         var pokerival9=JSON.parse(localStorage.getItem("pokerival9"));
         var pokerival10=JSON.parse(localStorage.getItem("pokerival10"));
         

        return(
            <>
           <br></br><br></br><br></br><br></br>
           <div className= "container-fluid  bg relleno">
             <div className="row">
                <div className="col-4">
                    
                <div className={clasemenu+ " mt-2 bg arena bordes"}>
                   <p className="letra2 ml-5">{pokerival1[2].nombre}</p>
                   <p  className="letra2 ml-5">HP</p>
                   <br></br><br></br><br></br><br></br><br></br>

                   <div className="progress-bar b-5 ml-5"></div>
                   </div>
                    <img src="/img/barra pokebolas.jpg" className={claseintro}></img>
                    
                </div>
                
                <div className="col-4"></div>
                <div className="col-4">
                    <img src="/img/dominguera.jpg" className= {clase1+" imagen"} ></img><img src={pokerival1[0].Image}className={clasepoke+" imagen movimiento"}></img>
                    <img src="/img/cazador.jpg" className= {clase2+" imagen"}></img><img src={pokerival2[0].Image}className={clasepoke1+" imagen movimiento"}></img>
                    <img src="/img/ornitologo.jpg" className= {clase3+" imagen"}></img><img src={pokerival3[0].Image}className={clasepoke2+" imagen movimiento"}></img>
                    <img src="/img/montañero.jpg" className= {clase4+" imagen"}></img><img src={pokerival4[0].Image}className={clasepoke3+" imagen movimiento"}></img>
                    <img src="/img/karateka.jpg" className= {clase5+" imagen"}></img><img src={pokerival5[0].Image}className={clasepoke4+" imagen movimiento"}></img>
                    <img src="/img/nadador.jpg" className= {clase6+" imagen"}></img><img src={pokerival6[0].Image}className={clasepoke5+" imagen movimiento"}></img>
                    <img src="/img/aroma.jpg" className= {clase7+" imagen"}></img><img src={pokerival7[0].Image}className={clasepoke6+" imagen movimiento"}></img>
                    <img src="/img/fogonero.jpg" className= {clase8+" imagen"}></img><img src={pokerival8[0].Image}className={clasepoke7+" imagen movimiento"}></img>
                    <img src="/img/pokemaniaco.jpg" className= {clase9+" imagen"}></img><img src={pokerival9[0].Image}className={clasepoke8+" imagen movimiento"}></img>
                    <img src="/img/guitarrista.jpg" className= {clase0+" imagen"}></img><img src={pokerival10[0].Image}className={clasepoke9+" imagen movimiento"}></img>



                </div>
             </div>
             <div className="row">
                <div className="col-4">
                    <img src="/img/entrenadorprincipal.jpg"className={clasetrainer+ " imagen mt-2 "}></img><img src={pokebag[0].Image}className={clasepoke10+" imagen movimiento"}></img>
                </div>
                <div className="col-3"></div>
                <div className="col-5">

                    <img src="/img/barra pokebolas.jpg" className={"mt-2 " + claseintro}></img>
                    <div className= {clasemenu+"  mt-2 bg arena bordes"}>
                   <p className="letra2  ml-5">{pokebag[0].nombre} </p>
                   <p  className="letra2 ml-5">HP</p>
                   <br></br><br></br><br></br><br></br><br></br>

                  <big><p className="text text-success">{pokebag[0].hp}</p></big>
                   </div>

                   
                </div>

             </div>
             <div className= {claseintro+" row text text-center"}>
                <div className= "  col-12 letra2 bordes bg bg-white">
                    <p>{nombre} Quiere tener una batalla contigo!!!!</p>
                    <button className="btn btn-success btn-lg"onClick={this.menupelea}>Pelea</button>
                </div>
                
               </div>
               <div className={clasemenu+" row text text-center"}>
               <div className=" col-12 letra2 bordes bg bg-white">
                <button className="btn btn-danger mx-5 btn-lg">ATAQUE</button>
                <button className="btn btn-warning mx-5 btn-lg">POKEMONS</button>
                <button className="btn btn-primary mx-5 btn-lg">ITEMS</button>

                </div>



               </div>



           </div>

            
            </>
        )
    }
}