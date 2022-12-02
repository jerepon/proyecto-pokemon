
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


import {Routes,Route,BrowserRouter as Router} from "react-router-dom";
import React from 'react';


  


function App() {

  return (
    <>
    <Router>

      <Menu/>
   
    
    
      
      <div className='pt-4'>
    <div className="container-fluid pt-5 introfondo  ">

   
    <Routes >
    <Route path='/menu' element={<Paginainicio/>}/>
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
    </>
  );
}

export default App;

