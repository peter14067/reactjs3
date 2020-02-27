import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardImg,  CardTitle, CardSubtitle, CardText, Badge, Carousel } from 'reactstrap';

export default class Product extends Component {
    static propTypes={
        product:PropTypes.object,
        cart:PropTypes.array,
        addToCart:PropTypes.func,


    }

    render(){

        const{product,cart,addToCart}=this.props;


        return(
            <Card>
                    <CardImg width="100%" src={product.img} alt="Card image cap"/>

                <CardTitle>{product.title} </CardTitle>
                
          <CardText>{product.desc}</CardText>
         
      
      </Card>
     

    );
  }
}