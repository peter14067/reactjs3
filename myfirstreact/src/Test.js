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
import{Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';



//import { Carousel } from 'react-responsive-carousel';


//import Carousel from 'react-grid-carousel'


/*
import Card from "react-bootstrap/Card";
import Img from "react-bootstrap/Img";
import Title from "react-bootstrap/Title";
import Price from "react-bootstrap/Price";
import Star from "react-bootstrap/Star";
*/
class Test extends React.Component{
  
    
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
                

        return( 
   
        <div >






          <Card>
          <CardImg width="100%" src={Logo9} alt="Card image cap" />
          <CardTitle>金金</CardTitle>
          <CardText></CardText>
          </Card>



 
        </div>
      
        
      
        
        );
    }
}
export {Test}