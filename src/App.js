import './App.css';
import Menu from './componentes/Menu';


import Paginainicio from './paginas/Paginainicio';
import Paginamewtwo from './paginas/Paginamewtwo';
import Paginaduelos from './paginas/Paginaduelos';
import Paginacaptura from './paginas/Paginacaptura';
import Paginapokemons from './paginas/Paginapokemons';
import Paginaitems from './paginas/Paginaitems';
import Paginatienda from './paginas/Paginatienda';
import Paginacentro from './paginas/Paginacentro';


import {Routes,Route,BrowserRouter as Router, useInRouterContext} from "react-router-dom";
import React  from 'react';
import { UserProvider } from './componentes/Usercontext';






/////////pokemonsrepositorio
      let pokemonsrepo=[{nombre:"Squirtle",hp:20,tipo:"agua", Image:"/img/squirtle.jpg"},{nombre:"Charmander",hp:20,tipo:"fuego", Image:"/img/charmander.jpg"},{nombre:"Bulbasaur",hp:40,tipo:"hoja", Image:"/img/bulbasaur.jpg"},
    {nombre:"Staryu",hp:15,tipo:"agua", Image:"/img/staryu.jpg"},{nombre:"Magmar",hp:15,tipo:"fuego", Image:"/img/magmar.jpg"},{nombre:"Gloom",hp:15,tipo:"hoja", Image:"/img/gloom.jpg"},
{nombre:"Totodile",hp:35,tipo:"agua", Image:"/img/totodile.jpg"},{nombre:"Cyndaquil",hp:35,tipo:"fuego", Image:"/img/cyndaquil.jpg"},{nombre:"Chikorita",hp:35,tipo:"hoja", Image:"/img/chikorita.jpg"},
{nombre:"Mew",hp:50,tipo:"psi", Image:"/img/mew.jpg"},{nombre:"Pikachu",hp:30,tipo:"trueno", Image:"/img/pikachu.jpg"},{nombre:"Mew-two",hp:250,tipo:"psi", Image:"/img/mewtwo.jpg"}];
localStorage.setItem("pokemons",JSON.stringify(pokemonsrepo));

///////////pokemons del entrenador
let poketrainer=[{nombre:"Pikachu",hp:30,tipo:"trueno",Image:"/img/pikachu.jpg"}];
localStorage.setItem("pokebag",JSON.stringify(poketrainer));



////////////////pokemons de los rivales
let pokemonsrival1= [{nombre:"Nidorino",hp:10,Image:"/img/nidorino.jpg"},{nombre:"Raticate",hp:20,Image:"/img/raticate.jpg"},{nombre:"Sentret",hp:15,Image:"/img/sentret.jpg"}];
localStorage.setItem("pokerival1",JSON.stringify(pokemonsrival1));
let pokemonsrival2=[{nombre:"Pidgeotto",hp:25,tipo:"vuelo",Image:"/img/pidgeotto.jpg"}, {nombre:"Spearow",hp:25,tipo:"vuelo",Image:"/img/spearow.jpg"},{nombre:"doduo",hp:30,tipo:"vuelo",Image:"/img/doduo.jpg"}];
localStorage.setItem("pokerival2",JSON.stringify(pokemonsrival2));
let pokemonsrival3=[{nombre:"Caterpie",hp:10,tipo:"bicho",Image:"/img/caterpie.jpg"},{nombre:"Weddle",hp:10,tipo:"bicho",Image:"/img/weddle.jpg"},{nombre:"Scyther",hp:30,tipo:"bicho",Image:"/img/scyther.jpg"}];
localStorage.setItem("pokerival3",JSON.stringify(pokemonsrival3));
let pokemonsrival4=[{nombre:"Geodude",hp:15,tipo:"roca",Image:"/img/geodude.jpg"},{nombre:"Graveler",hp:25,tipo:"roca",Image:"/img/graveler.jpg"},{nombre:"Onix",hp:50,tipo:"roca",Image:"/img/onix.jpg"}];
localStorage.setItem("pokerival4",JSON.stringify(pokemonsrival4));
let pokemonsrival5=[{nombre:"Hitmonlee",hp:20,tipo:"lucha",Image:"/img/hitmonlee.jpg"},{nombre:"Hitmonchan",hp:20,tipo:"lucha",Image:"/img/hitmonchan.jpg"},{nombre:"Machoke",hp:25,tipo:"lucha",Image:"/img/machoke.jpg"}];
localStorage.setItem("pokerival5",JSON.stringify(pokemonsrival5));
let pokemonsrival6=[{nombre:"Psyduck",hp:25,tipo:"agua",Image:"/img/psyduck.jpg"},{nombre:"Staryu",hp:30,tipo:"agua",Image:"/img/staryu.jpg"},{nombre:"Krabby",hp:20,tipo:"agua",Image:"/img/krabby.jpg"}];
localStorage.setItem("pokerival6",JSON.stringify(pokemonsrival6));
let pokemonsrival7=[{nombre:"Odish",hp:20,tipo:"hoja",Image:"/img/odish.jpg"},{nombre:"Bellsprout",hp:25,tipo:"hoja",Image:"/img/bellsprout.jpg"},{nombre:"Trecko",hp:35,tipo:"hoja",Image:"/img/trecko.jpg"}];
localStorage.setItem("pokerival7",JSON.stringify(pokemonsrival7));
let pokemonsrival8=[{nombre:"Charmeleon",hp:35,tipo:"fuego",Image:"/img/charmeleon.jpg"},{nombre:"Magmar",hp:25,tipo:"fuego",Image:"/img/magmar.jpg"},{nombre:"Arcanine",hp:40,tipo:"fuego",Image:"/img/arcanine.jpg"}];
localStorage.setItem("pokerival8",JSON.stringify(pokemonsrival8));
let pokemonsrival9=[{nombre:"Torchic",hp:20,tipo:"fuego",Image:"/img/torchic.jpg"},{nombre:"Poliwhirl",hp:20,tipo:"agua",Image:"/img/poliwhirl.jpg"},{nombre:"Exxegutor",hp:40,tipo:"hoja",Image:"/img/exxegutor.jpg"}];
localStorage.setItem("pokerival9",JSON.stringify(pokemonsrival9));
let pokemonsrival10=[{nombre:"Voltorb",hp:20,tipo:"trueno",Image:"/img/voltorb.jpg"},{nombre:"Electabuzz",hp:20,tipo:"trueno",Image:"/img/electabuzz.jpg"},{nombre:"Magnemite",hp:20,tipo:"trueno",Image:"/img/magnemite.jpg"}];
localStorage.setItem("pokerival10",JSON.stringify(pokemonsrival10));
/// items


  


function App() {
  const user = { pokebolas:3 }  
  
  return (
    <>
   
   <UserProvider value={user}>
   
    <Router>
    
    
    
      <Menu/>
   
      
      <div className='pt-4'>
    <div className="container-fluid pt-5 introfondo  ">
    

   
    <Routes >
    <Route path='/' element={<Paginainicio/>}/>
    <Route path='/desafiomewtwo' element={<Paginamewtwo/>}/>
    <Route path='/duelos' element={<Paginaduelos/>}/>
    <Route path='/captura' element={<Paginacaptura/>}/>
    <Route path='/pokemons' element={<Paginapokemons/>}/>
    <Route path='/items' element={<Paginaitems/>}/>
    <Route path='/tienda' element={<Paginatienda/>}/>
    <Route path='/centro' element={<Paginacentro/>}/>
    
    </Routes>
    
   
    
   
      
    </div>
    </div>
    
      </Router>
      </UserProvider>
    </>
  );
}

export default App;

