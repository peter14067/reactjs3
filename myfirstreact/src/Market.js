import React from "react"
import Logo from './pc1.jpg'
import {Jumbotron,Button,Card, CardTitle,CardImg, CardSubtitle,CardBody,Col} from 'reactstrap';
import  './test.css'; 

export default class Market extends React.Component{
  



    render(){
  

                       
        const {product,cart,addToCart}=this.props;
		
        console.log({cart});
			

		return (
		

                   <Card style={{maxWidth:"80%",height:"auto"}}>
                       <CardImg  style={{maxWidth:"100%",height:"auto",objectFit:"cover"}}src={product.img} alt="Card image cap"         />   
        <CardTitle style={{textAlign:"center"}}>{product.title}</CardTitle>
    
                       <CardSubtitle style={{textAlign:"center"}}>
                     
        <p style={{backgroundColor:"rgb(92,184,92)",color:"white",fontFamily:" fantasy"}}>售價:{product.price} </p>       
            
        <CardSubtitle style={{textAlign:"center"}}>
            {product.desc}
        </CardSubtitle>




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

