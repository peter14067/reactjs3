import React from "react"
import Logo from './pc1.jpg'
import {Jumbotron,Button,Card, CardTitle,CardImg, CardSubtitle,CardBody} from 'reactstrap';
import  './test.css'; 

export default class Market extends React.Component{
  



    render(){
  

                       
        const {product,cart,addToCart}=this.props;
		
				
			

		return (
		
    
                   <Card style={{width:"80%"}}>
                       <CardImg  style={{maxWidth:"100%"}}src={product.img} alt="Card image cap"         />   
        <CardTitle style={{textAlign:"center"}}>{product.title}</CardTitle>
                       <CardSubtitle style={{textAlign:"center"}}>
                     
        <div>售價:{product.price} </div>       
                       <select style={{height:"4vh",fontSize:"0.5em"}}>
                           
                           
                           <option  >1</option>
                           <option>2</option>
                           <option>3</option>
                       
                           <option>4</option>
                           <option>5</option>
                       
                       
                       
                       </select>
                       
                           <Button style={{padding:"1px",height:"4vh",fontSize:"0.5em",backgroundColor:"red",color:"white"}} onClick={()=> addToCart(product)} >       加入購物車       </Button>
                                            
                           </CardSubtitle>
                    
                   </Card>

          
         
        );

	
}

}

