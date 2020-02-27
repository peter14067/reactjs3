import React from "react"
import  './index4.css'; 
import Logo1 from './pc1.jpg';
import Logo2 from './pc2.jpg';
import Logo3 from './pc3.jpg';
import Logo4 from './pc4.jpg';
import Logo5 from './pc5.jpg';
import Logo6 from './pc6.jpg';
import Logo7 from './pc7.jpg';
import Logo8 from './pc8.jpg';
import Logo9 from './pc9.jpg';
import Logo10 from './pc10.jpg';


import AlbumJson from './Album1.json'
import Product from './Productexample';
import {Row,Col,Jumbotron} from 'react-bootstrap';
import Carousel from 'react-grid-carousel'
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

              <Carousel cols={3} rows={1} gap={5} loop>
      <Carousel.Item>
        <img width="100%" src={Logo1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={Logo2}  />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={Logo3}  />
      </Carousel.Item>

      <Carousel.Item>
        <img width="100%" src={Logo6}  />
      </Carousel.Item>

      <Carousel.Item>
        <img width="100%" src={Logo7}  />
      </Carousel.Item>

      <Carousel.Item>
        <img width="100%" src={Logo8}  />
      </Carousel.Item>

      <Carousel.Item>
        <img width="100%" src={Logo9}  />
      </Carousel.Item>

      <Carousel.Item>
        <img width="100%" src={Logo10}  />
      </Carousel.Item>
      
    
    </Carousel>
        </div>
      
        
      
        
        );
    }
}
export {Product1}