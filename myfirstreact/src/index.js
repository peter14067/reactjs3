import ReactDOM from "react-dom"
import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"
import { Title } from "./Title"
import { Home } from "./Home"
import { About } from "./About"
import {Contact} from "./Contact"
import {Application} from "./Application"
import Product from './Product'
import {Product1} from "./Product1"
// import {Test} from "./Test"
import {PTdescription} from "./PTdescription"
import {Component} from "./App"
import 'bootstrap/dist/css/bootstrap.css';
//  const express = require('express');
//const app = express();

const port = 3000;




//import  './index4.css'; 
class Main extends React.Component {
  render() {
      return (
          <HashRouter>
                 
                 <div >

                
                  
                 
                  
                
                  
           
                  <table class="Nav_link1">
                     
                      <Link class="Nav_link" to="/" >關於我們</Link>
                      <Link class="Nav_link" to="/PTdescription" >產品購買</Link>
                      <Link class="Nav_link" to="/Contact" >聯絡我們</Link>
                      <Link class="Nav_link" to="/Product1" >植物介紹</Link>
                      
                      <Link class="Nav_link" to="/Application" >Application</Link>
                  </table>
                
                 
            
                 
             

                  <Route exact path="/" component={About} />
                  
                
                  <Route path="/PTdescription"  component={PTdescription}/>
                  <Route path="/Contact" component={Contact} />
                  <Route path="/Product1" component={Product1} />
                 
                  <Route path="/Application" component={Application} />
                  
            

               
              </div>
              
          </HashRouter>
      )
  }
}



    ReactDOM.render(
     <Main/>,
      document.getElementById('root')
    );
  
