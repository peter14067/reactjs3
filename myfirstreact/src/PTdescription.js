import React from "react"
import Market from './Market'
import AlbumJson from './Product.json'
import {Jumbotron,Button,Card, CardTitle,CardImg, CarouselItem,Col,Row, Container,Modal,ModalHeader,ModalBody,ModalFooter,Table,Alert} from 'reactstrap';

import  './test.css'; 

class PTdescription extends React.Component{
  
  state={
      modal:false,
      album:AlbumJson,
      cart:[],
      
    }



    handleChange(event) {
           this.setState({value: event.target.value});
         }
  









    toggle=()=>{
      this.setState({
        modal:!this.state.modal,
      });
    }



    checkout=(totolPrice)=>{
     const a=totolPrice;
    
      alert("結帳成功，總金額是"+totolPrice)
    
    }

    addToCart=(product)=>{

      const cart=this.state.cart;
      const a=product.value
     console.log(a);
      
      cart.push(product);
   
     
      this.setState({
        cart
       
      });
  

 
    }



    render(){
  
const {album,cart,modal,toggle}=this.state
     const totolPrice =cart.reduce((acc,item)=>(acc+=item.price),0);           


				
			

		return (
		
            <div>
             
               
                   <br></br>
                   <Container>
              
                   <Jumbotron>
                   <h1 class="tle">幸福時機</h1>
                   <p>這是幸福時機商品區，我們的產品絕對沒有添加農藥，讓您喝的健康、安心，並且帶有幸福的感覺</p>
                   <hr></hr>
    <Button color="primary" onClick={this.toggle}>購物車({cart.length})</Button>
                   </Jumbotron>
                
                  <Row>
                   {
                  album.map(product => (
                    <Col sm={50} md={4}  >
                  <Market
                    product={product}
                    cart={cart}
                    addToCart={this.addToCart}
                    handelChange={this.handleChange}
                    
                  />
                  </Col>
                  ))
                }

                </Row>

                <Modal isOpen={modal} toggle={this.toggle} >
                
                <ModalHeader>購物車</ModalHeader>
             
                <ModalBody>

                  <Table>
                    <thead>
                <tr>
                  <th>#</th>
                  <th>品項</th>
                  <th>價格</th>
                  </tr>
                  </thead>
                  <tbody>
               {
                  cart.map((item,index)=>(
                      <tr>

                  <th>{index+1}</th>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td><Button>X</Button></td>
                      </tr>





                  ))


               }


                  </tbody>


                </Table>

                <Alert color="success" className="text-right">
                總金額{totolPrice}
                </Alert>


        </ModalBody>
        <ModalFooter>


          <Button color="primary" onClick={()=>this.checkout(totolPrice)}>結帳</Button>
         
         
         
         
          <Button color="secondary" onClick={this.toggle}>取消</Button>
        </ModalFooter>
                </Modal>





                </Container>
       
            </div>
         
        );

	
}

}

export {PTdescription}