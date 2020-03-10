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
  

                       
        const {product,cart,addToCart,value,handleChange}=this.props;
		
    
			

		return (
		
        //     <select value={this.state.value}   onChange={this.handleChange} style={{height:"4vh",fontSize:"0.5em"}}>
                                                       
                           
        //     <option value="1">1</option>
        //     <option value="2">2</option>
        //     <option value="3">3</option>
        
        //     <option value="4">4</option>
        //     <option value="5">5</option>
        
        
        
        // </select>
        

                   <Card style={{maxWidth:"80%",height:"auto"}}>
                       <CardImg  style={{maxWidth:"100%",height:"auto",objectFit:"cover"}}src={product.img} alt="Card image cap"         />   
        <CardTitle style={{textAlign:"center"}}>{product.title}</CardTitle>
    
                       <CardSubtitle style={{textAlign:"center"}}>
                     
        <p style={{backgroundColor:"rgb(92,184,92)",color:"white",fontFamily:" fantasy"}}>售價:{product.price} </p>       
            
        <CardSubtitle style={{textAlign:"center"}}>
            {product.desc}
        </CardSubtitle>




                           <Button style={{padding:"1px",height:"4vh",fontSize:"0.5em",backgroundColor:"red",color:"white"}} onClick={()=> addToCart(product)} >       加入購物車       </Button>
                                            
                           </CardSubtitle>
                
                   </Card>

                 
        );

	
}

}

