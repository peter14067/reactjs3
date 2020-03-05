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
   
        <div >






              <Carousel   class="carousel slide" autoplay={3000} cols={3} rows={1} gap={5} loop  data-ride="carousel" width="100%">
     
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


        




    
 
        </div>
      
        
      
        
        );
    }
}
export {Product1}