import React from "react"
import  './about.css'; 
import Logo1 from './112101.jpg';
import Logo2 from './112102.jpg';
import Logo3 from './112103.jpg';
import Logo4 from './112104.jpg';
import Logo5 from './112201.jpg';
import Logo6 from './pc1.jpg';
import AlbumJson from './Album3.json'
import Product from './Productexample';
import { Container, Row, Col, Jumbotron, Button, Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Table, Alert } from 'reactstrap';




class About extends React.Component{
    
  state = {
    modal: false,
    album: AlbumJson,
    cart:[],
  }

    
    render(){
                

      const { city,album1,album,cart,modal } = this.state;
        
      
      return( 
   




            
        <div >





              


         











       
            <div className="demo2-bg" >
                         <div className="demo2">About US</div>
            </div>
            

          


           




              <Row>
                <Col md={12}>
                  <Jumbotron>
                    <h1  style={{textAlign:"center",color:"red",}}>家庭成員介紹</h1>
                   


                    <Row>
                {
                  album.map(product => (
                    <Col sm={6} md={4} className="mb-3">
                  <Product
                    product={product}
                   
                   
                  />
                  </Col>
                  ))
                }
              </Row>
             





                  </Jumbotron>
                
                
                
                
                </Col>
             
             
             
             
               
             
             
             
              </Row>



           
           
           
            <div className="demo2-bg" >
                         <div className="demo2">the beginning< /div>
                        
            </div>





            <div style={{backgroundColor:"#33C496",height:"120vh",borderTop:"2px solid white"}}>
            
            <div class="hover">
            
            <img src={Logo5} alt="Logo" />
            <img src={Logo6} alt="Logo" /> 
           
             
           
            <p class="p1">這是檀香，經歷了5年的成長以後，每個檀香都變得很大了</p>
            </div>
            <br></br>
            <br></br>
            <div class="hover">
            <img src={Logo6} alt="Logo" />
            <img src={Logo5} alt="Logo" />
            <p class="p1">金新木薑子(佛光樹)，經歷了5年的成長以後，變的金光閃閃了呢~~</p>
            </div>
         
            
         
           
            </div>
        
            <div className="demo2-bg" style={{marginBottom:"10"}}>

                
           <br></br>
           <br></br>
           <br></br>
          
                         <div className="demo2">now</div>
            </div>
            
            
            
            
            
            
            
            <div class="rwd_slider_container_wrapper">
             <div class="rwd_slider_container">
              <div class="slider_container" >
          <div>
        <img src={Logo1} alt="pure css slider" width="400" height="280" />
      </div>
      <div>
        <img src={Logo2} alt="pure css slider" width="400" height="280" />
      </div>
      <div>
        <img src={Logo3} alt="pure css slider" width="400" height="280" />
      </div>
      <div>
        <img src={Logo4} alt="pure css slider" width="400" height="280" />
      </div>
      <div>
        <img src={Logo5} alt="pure css slider" width="400" height="280" />
      </div>
    </div>
  </div>
</div>
        
        
        
        </div>
      
        
      
        
        );
    }
}
export {About}