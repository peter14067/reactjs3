import React from "react"
import  './about.css'; 

// import Logo1 from './112101.jpg';
// import Logo2 from './112102.jpg';
// import Logo3 from './112103.jpg';
// import Logo4 from './112104.jpg';
import Logo5 from './112201.jpg';
import Logo6 from './pc1.jpg';
import Gold1 from './gold1.jpg';
import Gold2 from './gold2.jpg';
import Logo7 from './about.jpg';
// import Maz from './mazep.jpg';
import AlbumJson from './Album3.json'
import Product from './Productexample';
import { Row, Col, Jumbotron, Card, CardTitle, Table } from 'reactstrap';




class About extends React.Component{
    
  state = {
    modal: false,
    album: AlbumJson,
    cart:[],
  }

    
    render(){
                

      const { album} = this.state;
        
      
      return( 
   


/*


            <div style={{backgroundColor:"#33C496",height:"120vh",borderTop:"2px solid white"}}>
            <div class="hover">
            <img src={Maz} alt="Logo" />
            <img src={Logo5} alt="Logo" />
            <p class="p1">123</p>
            </div>
         
            
         
           
            </div>








      <div class="hover">
            
            <img src={Logo5} alt="Logo" />
            <img src={Logo6} alt="Logo" /> 
           
             
           
            <p class="p1">123</p>
*/
            
        <div >





              


         











   
            
            <img src={Logo7} alt="Logo" style={{width:"100%"}} />
          
        
    
              <div style={{textAlign:"center"}}>  <p>幸福時機創立於2015年<br></br>起初是因為興趣開始耕種<br></br>首先種植檀香，羅漢松，金木新疆子，</p></div>
      

   

 
            <div className="demo2-bg" >
                         <div className="demo2">發展過程< /div>
                        
            </div>





           
            <div >
            <Card style={{maxWidth:"50%",height:"auto",float:"left",border:"none"}}><img src={Logo5} alt="Logo" style={{maxWidth:"100%",height:"auto"}}/>
            <CardTitle style={{textAlign:"center"}}>檀香(2014/04/05)</CardTitle>
            </Card>

            <Card style={{maxWidth:"50%",height:"auto",border:"none"}}><img src={Logo6} alt="Logo" style={{maxWidth:"100%",height:"auto"}}/>
            <CardTitle style={{textAlign:"center"}}>檀香(2020/02/02)</CardTitle>
            </Card>
            </div>
            <br></br>
            <br></br>

            <div >
            <Card style={{maxWidth:"50%",height:"auto",float:"left",border:"none"}}><img src={Gold1} alt="Logo" style={{maxWidth:"100%",height:"auto"}}/>
            <CardTitle style={{textAlign:"center"}}>佛光樹(2014/04/05)</CardTitle>
            </Card>

            <Card style={{maxWidth:"50%",height:"auto",border:"none"}}><img src={Gold2} alt="Logo" style={{maxWidth:"100%",height:"auto"}}/>
            <CardTitle style={{textAlign:"center"}}>佛光樹(2020/02/02)</CardTitle>
            </Card>
            </div>
            <br></br>
            <br></br>





        



            <div className="demo2-bg" >
                         <div className="demo2">成員介紹< /div>
                        
            </div>





              <Row>
                <Col md={12}>
                  <Jumbotron>
                    


                    <Row>
                {
                  album.map(product => (
                    <Col sm={6} md={4} className="mb-3" style={{textAlign:"center",fontFamily:"bold",fontSize:"2em"}}>
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