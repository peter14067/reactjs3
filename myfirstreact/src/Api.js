import React from "react"
import Market from './Market'
import AlbumJson from './Product.json'
import {Jumbotron,Button,Card, CardTitle,CardImg, CarouselItem,Col,Row, Container,Modal,ModalHeader,ModalBody,ModalFooter,Table,Alert} from 'reactstrap';

import  './test.css'; 

class Application extends React.Component {
    callApi(){
      // Github fetch library : https://github.com/github/fetch
      // Call the API page
      fetch('https://www.reddit.com/r/reactjs.json')
      .then((result) => {
        // Get the result
        // If we want text, call result.text()
        return result.json();
      }).then((jsonResult) => {
        // Do something with the result
        console.log(jsonResult);
      })
    }
    
    render() {
      return <div>
        <button onClick={() => this.callApi()}>
          Click here to call API
        </button>
      </div>;
    }
  }
  
  React.render(<Application />, document.getElementById('app'));
        

export {Application}