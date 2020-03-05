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
                         <div className="demo2">發展過程< /div>
                        
            </div>





            <div style={{backgroundColor:"#33C496",height:"120vh",borderTop:"2px solid white"}}>
            
            <div class="hover">
            
            <img src={Logo5} alt="Logo" />
            <img src={Logo6} alt="Logo" /> 
           
             
           
            <p class="p1"></p>
            </div>
            <br></br>
            <br></br>
            <div class="hover">
            <img src={Logo6} alt="Logo" />
            <img src={Logo5} alt="Logo" />
            <p class="p1"></p>
            </div>
         
            
         
           
            </div>
        
            <div className="demo2-bg" style={{marginBottom:"10"}}>

                
           <br></br>
           <br></br>
           <br></br>
          
                         <div className="demo2">歷年大事</div>
            </div>


                <div>
                <Table responsive="sm">
                <thead>
                <tr>
      
        <th>年度</th>
        <th>年度大事</th>
       
      </tr>
      </thead>



      <tbody>

      <tr>
        <td>2015/3/5</td>
        <td>整修田</td>
       
      </tr>



      <tr style={{backgroundColor:"lightgrey"}}>
        <td>2019</td>
        <td>彰化百寶村擺攤</td>
       
      </tr>




      <tr>
        <td>2020/1/26-2020/2/9</td>
        <td>花在彰化擺攤</td>
       
      </tr>



      <tr style={{backgroundColor:"lightgrey"}}>
        <td>2020/2/28-29</td>
        <td>台中擺攤</td>
       
      </tr>
  


 

      </tbody>
 


      </Table>
                </div>
        
           
        
        
        </div>
      
        
      
        
        );
    }
}
export {About}