import React from "react"
import  './index4.css'; 
import Logo1 from './pc1.jpg';
import Logo2 from './pc2.png';
import Logo3 from './pc3.jpg';
import AlbumJson from './Album1.json'
import Product from './Productexample';
import {Row,Col,Jumbotron} from 'react-bootstrap';
class Product1 extends React.Component{
    state = {
        modal: false,
        album: AlbumJson,
        cart:[],
      }
    
  
    render(){
                

        const { album,cart,modal } = this.state;
        return( 
   
        <div>

<Row>
                {
                  album.map(product => (
                    <Col sm={6} md={4} className="mb-3">
                  <Product
                    product={product}
                    cart={cart}
                    addToCart={this.addToCart}
                  />
                  </Col>
                  ))
                }
              </Row>



        </div>
      
        
      
        
        );
    }
}
export {Product1}