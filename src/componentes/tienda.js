import React from "react";
export default class Tienda extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cantidad1:0,
            cantidad2:0,
            
           
          
    
        }
        this.aumentar=this.aumentar.bind(this);
        this.disminuir=this.disminuir.bind(this);
        this.aumentar2=this.aumentar2.bind(this);
        this.disminuir2=this.disminuir2.bind(this);
        this.comprar=this.comprar.bind(this);
        
    
        }
        comprar(event){
            var total=this.state.cantidad1*10+this.state.cantidad2*5;
            var cantidad1=this.state.cantidad1;
            var cantidad2=this.state.cantidad2;
            var cantidad=cantidad1+cantidad2;
            var items=JSON.parse(localStorage.getItem("items"));
            var shop=[{pokebolas:items[0].pokebolas+cantidad1,pocion:items[0].pocion+cantidad2,dolares:items[0].dolares-total}];

            if(total<=items[0].dolares&&cantidad>0){
                alert("Items Comprados");
                localStorage.setItem("items",JSON.stringify(shop));
            }
            else{
                alert("Saldo insuficiente, o ningun item seleccionado")
            }

        }


         aumentar(event){
           
            
            this.setState({
                cantidad1:this.state.cantidad1+1
            })
        
            
           
        }
        disminuir(event){
            this.setState({
                cantidad1:this.state.cantidad1-1
            })
           
           

        }
        aumentar2(event){
            
          this.setState({
            cantidad2:this.state.cantidad2+1
          })
            
            
           
        }
        disminuir2(event){
            this.setState({
                cantidad2:this.state.cantidad2-1
            })
           
            
        }
        
    
        
        
    render(){
        let items=[{pokebolas:3,dolares:5,pocion:1}];
localStorage.setItem("items",JSON.stringify(items));
        var total=this.state.cantidad1*10+this.state.cantidad2*5;
    
        
        
        

        return(
            <>
            <br></br><br></br><br></br><br></br>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdynXy8DE7FyFUosogEuUXtbqjlza1nX-BxZDXcMau0we4PbbSzD_d084wXG05C-Vn0O0&usqp=CAU" className="banner"></img>
            <div className="container-fluid bg bg-danger ">
                <div className="row text text-center">
                    <div className="col-12">
                        <h2 className="mr-auto text text-white">Bienvenido al pokeshop, compra lo que desees!!!</h2>
                  </div>
                  <div className="col-12">
                    <h3 className=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png" className="iconitos"></img>{items[0].pokebolas} Pokebolas <button type="button" className="btn  btn-secondary mr-2"  onClick={this.aumentar}>+</button><button type="button" className="btn btn-secondary"  onClick={this.disminuir}>-</button><input  className="ml-2" type="text" value={this.state.cantidad1} ></input></h3>
                    <h3 className=""><img src="https://cdn-icons-png.flaticon.com/512/188/188958.png" className="iconitos"></img>{items[0].pocion}   Pociones<span className="opacity">s</span><span className="opacity ">s</span> <button type="button" className="btn  btn-secondary mr-2" onClick={this.aumentar2}>+</button><button type="button" className="btn btn-secondary"onClick={this.disminuir2}>-</button><input className="ml-2" type="text" value={this.state.cantidad2} ></input> </h3>
                    <h4>TOTAL<input className="mx-3" type="text" value={total} ></input> SALDO<input className="mx-3" type="text" value={items[0].dolares+" Dolares"}></input></h4>
                    <button type="button" className="btn btn-success" onClick={this.comprar} >COMPRAR</button>
                  </div>


                </div>

            </div>
            </>
        )
    }
}