import React from "react"


import AlbumJson from './Album.json'
import Product from './Product';
import { Container, Row, Col, Jumbotron, Button, Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Table, Alert } from 'reactstrap';


class PTdescription extends React.Component{
    state = {
        modal: false,
        album: AlbumJson,
        cart:[],
      }
      

      toggle = () => {
        this.setState({
          modal: !this.state.modal,
        });
      }
    

      addToCart = (product) => {
        const cart = this.state.cart;
        console.log(product.price);
        cart.push(product);
    
        this.setState({
          cart
        });
      
      }
/*
      addTo = (cart) => {
        const cart1 = this.state.cart.reduce((acc, item) => (acc += item.price), 0);
        
        alert("你已購買成功!   "+"總金額為     "+cart1);
        this.setState({
          modal: !this.state.modal,
        });
       
      
      }
*/


      checkout=(totalPrice)=>{
        alert(`已從您的信用卡中扣除${totalPrice}元！`); 
      }
      


      deleteCartItem = (index) => {
          const cart = this.state.cart;
          cart.splice(index,1);
          this.setState({
              cart
          });
      }




    render() {
        const { album,cart,modal } = this.state;
        const totalPrice = cart.reduce((acc, item) => (acc += item.price), 0);


        return (
          <div className="content">
            <Container>
              <Row>
                <Col md={12}>
                  <Jumbotron>
                    <h1 className="display-3">幸福時機</h1>
                    <p className="lead">
                    幸福時機成立以來，結合實體唱片通路、唱片公司、網站，因而擁有豐富、完整的音樂資源
                    </p>
                    <p className="lead">
                      並與電視、廣播等媒體進行策略聯盟，已迅速打響知名度，並廣受各界好評
                    </p>
                    <p className="lead">
                      不僅如此，美客唱片將跨足大中華地區，透過舉辦跨國、跨區域的大型頒獎典禮、演唱會以及音樂活動
                    </p>
                    <p className="lead">
                      進一步擴大影響力，提昇流行音樂產業的動能
                    </p>
                    <hr className="my-2" />
                    <p className="lead">
                      <Button color="primary" onClick={this.toggle}>購物車({cart.length})</Button>
                    </p>
                  </Jumbotron>
                </Col>
              </Row>
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
    
              <Modal isOpen={modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>購物車</ModalHeader>
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
      <th scope="row">{index+1}</th>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
      <td><Button color="danger" onClick={()=>this.deleteCartItem(index)}>x</Button>{' '}</td>
                            </tr>


                        
                        ))

                    }
                     

                     
                    </tbody>
                  </Table>
                  <Alert color="success" className="text-right">
                    總價:
                    {
                        totalPrice
                        
                        
                        }
                      
                        元
                    


                  </Alert>
            
                </ModalBody>
                <ModalFooter>
              

                          {



       
  
  
        //cart.map((item,index)=>(
          <tr>

 
<td><Button                
                    
                  disabled={cart.length===0}
                  color="primary"
            
                  //onClick={() => this.addTo(cart)}
                            onClick={()=>this.checkout(totalPrice)}
                  
                  >

                      結帳

                  </Button>{}</td>
          </tr>


      
      //))

  
  
  
           
                    
      }
                 
                  <Button color="secondary" onClick={this.toggle}>取消</Button>


                          
                </ModalFooter>
              </Modal>
             
            </Container>
          </div>


      )
  }
}
export {PTdescription}