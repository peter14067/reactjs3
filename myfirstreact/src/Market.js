import React from "react"
import Logo from './pc1.jpg'
import {Jumbotron,Button,Card, CardTitle,CardImg, CardSubtitle,CardBody,Col} from 'reactstrap';
import  './test.css'; 
import PropTypes from 'prop-types';
export default class Market extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
        
      
      }
    

    render(){
  

                       
        const {product,cart,addToCart,value,handleChange,addToCart5,addToCart10}=this.props;
		
    
			

		return (

        
        
        // </select>
        

                   <Card style={{maxWidth:"80%",height:"auto"}}>
                       <CardImg  style={{maxWidth:"100%",height:"auto",objectFit:"cover"}}src={product.img} alt="Card image cap"         />   
        <CardTitle style={{textAlign:"center"}}>{product.title}</CardTitle>
    
                       <CardSubtitle style={{textAlign:"center"}}>
                     
        <p style={{backgroundColor:"rgb(92,184,92)",color:"white",fontFamily:" fantasy"}}>售價:{product.price} </p>       
            
        <CardSubtitle style={{textAlign:"center"}}>
            {product.desc}
        </CardSubtitle>


    
        
        

                           <Button style={{padding:"1px",height:"4vh",fontSize:"0.5em",backgroundColor:"red",color:"white"}} onClick={()=> addToCart(product)} >       購買1個       </Button>

                                                     <Button style={{padding:"1px",height:"4vh",fontSize:"0.5em",backgroundColor:"red",color:"white"}} onClick={()=> addToCart5(product)} >        購買5個         </Button>
                                                     <Button style={{padding:"1px",height:"4vh",fontSize:"0.5em",backgroundColor:"red",color:"white"}} onClick={()=> addToCart10(product)} >        購買10個         </Button>         
                           </CardSubtitle>
                
                   </Card>

                 
        );

	
}

}

