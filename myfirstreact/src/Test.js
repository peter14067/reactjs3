import React from "react"
import Market from './Market'
import {Jumbotron,Button,Card, CardTitle,CardImg} from 'reactstrap';
import  './test.css'; 

class Test extends React.Component{
    constructor(props){
        super(props);
    
    }




    render(){
  

                       

		
				
			

		return (
		
            <div>
                   <br></br>
                   
              
                   <br></br>   
                   <br></br> 
                     <br></br>  
                      <br></br> 
                        <br></br> 
                          <br></br> 
                   <Jumbotron>
                   <h1 class="tle">幸福時機</h1>
                   <p>這是我們的產品首頁</p>
                   <hr></hr>
                   <Button color="primary">購物車</Button>
                   </Jumbotron>
               

                   <Market/>
             
            </div>
         
        );

	
}

}

export {Test}