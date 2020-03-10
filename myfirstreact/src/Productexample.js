import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg,  CardTitle, CardText, 
 } from 'reactstrap';

export default class Product extends Component {
    static propTypes={
        product:PropTypes.object,
        cart:PropTypes.array,
        addToCart:PropTypes.func,


    }

    render(){

        const{product,cart,addToCart}=this.props;


        return(
          
          <div style={{maxWidth:"100%",maxHeight:"100%"}}>
              <Card  >
                    <CardImg style={{margin:"0",padding:"0",maxWidth:"100%",Height:"5vh"}} src={product.img} alt="Card image cap"/>

                <CardTitle style={{fontSize:"0.6em"}}>{product.title} </CardTitle>
                
          <CardText style={{fontSize:"0.4em",color:"grey"}}>{product.desc}</CardText>
         
     
          </Card>

     
      </div>
     

    );
  }
}