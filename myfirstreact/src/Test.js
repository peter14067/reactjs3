import React from "react"
import Market from './Market'
import AlbumJson from './Product.json'
import {Jumbotron,Button,Card, CardTitle,CardImg, CarouselItem,Col,Cart,Row, Container,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';

import  './test.css'; 

class Test extends React.Component{
  
  state={
      modal:false,
      album:AlbumJson,
      cart:[],
    }


    toggle=()=>{
      this.setState({
        modal:!this.state.modal,
      });
    }

    addToCart=(product)=>{

      const cart=this.state.cart;
      
      cart.push(product);
      this.setState({
        cart
      });
    }



    render(){
  
const {album,cart,modal,toggle}=this.state
                       

		
				
			

		return (
		
            <div>
             
               
                   <br></br>
                   <Container>
              
                   <Jumbotron>
                   <h1 class="tle">幸福時機</h1>
                   <p>這是我們的產品首頁</p>
                   <hr></hr>
                    <Button color="primary" onClick={this.toggle}>購物車</Button>
                   </Jumbotron>
                
                  <Row>
                   {
                  album.map(product => (
                    <Col sm={6} md={4}  >
                  <Market
                    product={product}
                    cart={cart}
                    addToCart={this.addToCart}
                  />
                  </Col>
                  ))
                }

                </Row>

                <Modal isOpen={modal} >

                <Modal title>購物車</Modal>
             
                <ModalBody>
        
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>結帳</Button>
          <Button color="secondary" onClick={this.toggle}>取消</Button>
        </ModalFooter>
                </Modal>





                </Container>
       
            </div>
         
        );

	
}

}

export {Test}