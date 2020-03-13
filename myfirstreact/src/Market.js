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


    
        
            選購數量:

                           <Button style={{width:"5vh",padding:"1px",height:"4vh",fontSize:"0.5em",backgroundColor:"red",color:"white",fontSize:"1em"}} onClick={()=> addToCart(product)} >     1    </Button>

                                                     <Button style={{width:"5vh",padding:"1px",height:"4vh",fontSize:"0.5em",backgroundColor:"red",color:"white",fontSize:"1em"}} onClick={()=> addToCart5(product)} >      2         </Button>
                                                     <Button style={{width:"5vh",padding:"1px",height:"4vh",fontSize:"0.5em",backgroundColor:"red",color:"white",fontSize:"1em"}} onClick={()=> addToCart10(product)} >        5        </Button>         
                           </CardSubtitle>
                
                   </Card>

                 
        );

	
}

}

