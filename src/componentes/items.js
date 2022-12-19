import React from "react";
export default class Items extends React.Component{
render(){
    var items=JSON.parse(localStorage.getItem("items"));
    return(
        <>
      <br></br><br></br><br></br><br></br>
      <h1 className="bg bg-success">Items </h1>
      <div className="bg bg-danger">
      <h3 className="text text-white"><span className="mr-3">Pokebolas</span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png" className="iconitos"></img>{items[0].pokebolas}</h3>
      <h3 className="text text-white"><span className="mr-3">Pociones<span className="opacity">s</span> </span><img src="https://cdn-icons-png.flaticon.com/512/188/188958.png" className="iconitos"></img>{items[0].pocion}</h3>
      <h3 className="text text-white"><span className="mr-4">Dolares<span className="opacity">ss</span></span><img src="https://cdn-icons-png.flaticon.com/512/2916/2916115.png" className="iconitos"></img>{items[0].dolares}</h3>
      </div>


        </>
    )
}

}