import React from "react"
import Logo from './pc1.jpg'
import {Jumbotron,Button,Card, CardTitle,CardImg, CardSubtitle,CardBody} from 'reactstrap';
import  './test.css'; 

export default class Market extends React.Component{
  



    render(){
  

                       
        const {product,cart,addToCart}=this.props;
		
				
			

		return (
		
            <div>
                   <Card style={{width:"50%"}}>
                       <CardImg  style={{maxWidth:"100%"}}src={Logo} alt="Card image cap"         />   
                       <CardTitle style={{textAlign:"center"}}>檀香</CardTitle>
                       <CardSubtitle style={{textAlign:"center"}}>
                     
                        <div>售價:1500 </div>       
                       <select style={{height:"4vh",fontSize:"0.5em"}}>
                           
                           
                           <option style={{padding:"1px",height:"4vh",fontSize:"0.5em"}} >1</option>
                           <option>2</option>
                           <option>3</option>
                       
                           <option>4</option>
                           <option>5</option>
                       
                       
                       
                       </select>
                       
                           <Button style={{padding:"1px",height:"4vh",fontSize:"0.5em",backgroundColor:"lightblue"}} >       加入購物車       </Button>
                                            
                           </CardSubtitle>
                    
                   </Card>

            </div>
         
        );

	
}

}

