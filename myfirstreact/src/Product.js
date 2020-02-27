import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardImg,  CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';

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
                <CardSubtitle>
                <h4>
                {
                    product.discount
                ?<Badge COLOR="danget">特價:{product.price}</Badge>
                :<Badge color="success">售價:{product.price}</Badge>

                }

                </h4>

                </CardSubtitle>
          <CardText>{product.desc}</CardText>
          <Button
            disabled={cart.find(item => item.id === product.id)}
            color="secondary"
            onClick={() => addToCart(product)}
          >
            購買
          </Button>
      
      </Card>
    );
  }
}