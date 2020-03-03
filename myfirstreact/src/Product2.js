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
import AlbumJson1 from './Album2.json'
import Product from './Productexample';
import {Row,Col,Jumbotron,} from 'react-bootstrap';


//import { Carousel } from 'react-responsive-carousel';


import Carousel from 'react-grid-carousel'


/*
import Card from "react-bootstrap/Card";
import Img from "react-bootstrap/Img";
import Title from "react-bootstrap/Title";
import Price from "react-bootstrap/Price";
import Star from "react-bootstrap/Star";
*/
class Product1 extends React.Component{
    state = {
        modal: false,
        album: AlbumJson,
        album1:AlbumJson1,
        cart:[],
      }
    
  /*


      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={Logo2}  alt="Card image cap"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={Logo3} alt="Card image cap" />
      </Carousel.Item>

      <Carousel.Item>
        <img width="100%" src={Logo6} alt="Card image cap" />
      </Carousel.Item>

      <Carousel.Item>
        <img width="100%" src={Logo7}  alt="Card image cap"/>
      </Carousel.Item>

      <Carousel.Item>
        <img width="100%" src={Logo8} alt="Card image cap" />
      </Carousel.Item>

      <Carousel.Item>
        <img width="100%" src={Logo9} alt="Card image cap" />
      </Carousel.Item>

      <Carousel.Item>
        <img width="100%" src={Logo10} alt="Card image cap" />
      </Carousel.Item>
      
  */



    render(){
                

        const { city,album1,album,cart,modal } = this.state;
        return( 
   
        <div>

            <Row>
                {
                  album.map(product => (
                    <Col sm={6} md={4} className="mb-3"  gap={10} loop>
                  <Product
                    product={product}
                    cart={cart}
                    addToCart={this.addToCart}
                  />
                  </Col>
                  ))
                }
              </Row>





              <Carousel cols={3} rows={1} gap={5} loop  data-ride="carousel">
     
      {
                  album1.map((product,i) => (
                    <Carousel.Item>
                   
                  
                
                  <Product
                    product={product}
                  
              
                  />



                
                  </Carousel.Item>

                  ))

                }
        
        </Carousel>


        


        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel"  cols={1} rows={5} gap={5} loop>

              <Carousel.Item> <img width="20%" src={Logo6} alt="Card image cap" /></Carousel.Item>
              <Carousel.Item> <img width="20%" src={Logo7} alt="Card image cap" /></Carousel.Item>
              <Carousel.Item> <img width="20%" src={Logo7} alt="Card image cap" /></Carousel.Item>
              <Carousel.Item> <img width="20%" src={Logo7} alt="Card image cap" /></Carousel.Item>
              <Carousel.Item> <img width="20%" src={Logo7} alt="Card image cap" /></Carousel.Item>
              <Carousel.Item> <img width="20%" src={Logo7} alt="Card image cap" /></Carousel.Item>
              <Carousel.Item> <img width="20%" src={Logo7} alt="Card image cap" /></Carousel.Item>
              <Carousel.Item> <img width="20%" src={Logo7} alt="Card image cap" /></Carousel.Item>

</div>


<div id="myCarousel" class="carousel slide" >

<ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>



    <div class="carousel-inner">
    <div class="item active">
            <img src={Logo6}   alt="First slide"/>
        </div>
        <div class="item">
            <img src={Logo7} alt="Second slide"/>
        </div>

        <div class="item">
            <img src={Logo8} alt="Third slide"/>
        </div>



        <a class="carousel-control left" href="#myCarousel" 
       data-slide="prev"> <span _ngcontent-c3="" aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span></a>
    <a class="carousel-control right" href="#myCarousel" 
       data-slide="next">&rsaquo;</a>
   
    </div>





    
</div>
        
    


    
 
        </div>
      
        
      
        
        );
    }
}
export {Product1}