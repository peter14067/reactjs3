import React from "react"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import {Form,Col,Row} from 'react-bootstrap/Form'
class Contact extends React.Component{
    constructor(props){
        super(props)
            this.state={username:''};
            this.state={mail:''};
            this.state={phone:''};
        
    }


    mySubmitHandler=(event)=>{
        event.preventDefault();
       
        alert("姓名:"+this.state.username+"\r"+"電子信箱:"+this.state.mail+"\r"+"電話號碼:"+this.state.phone);
    }

    myChangeHandler = (event) => {
       this.setState({username:event.target.value});
      
        
      }

      myChangeHandler1 = (event) => {
        this.setState({mail:event.target.value});
       
         
       }

       myChangeHandler2 = (event) => {
        this.setState({phone:event.target.value});
       
         
       }

     



    render(){
        return (
        
            <div style={{marginTop:"5vh"}}>
          <div style={{border:"0.5px solid grey",boxShadow:"5px 1px 1px 1px #cccccc"}}>
            <div style={{textAlign:"center",margin:"0px auto",color:"blue",fontSize:"2em"}}>
            客戶服務
            <br></br>
            </div>
        
            <div style={{margin:"0px auto",color:"blue",fontSize:"1em"}}>
            親愛的客戶您好，您的問題就是我們的問題，<br></br>如果有任何疑問或者建議需要我們的協助，<br></br>歡迎您透過以下任何管道與我們聯繫，我們將竭誠為您服務。
            </div>
        
                </div>
                <br></br>
                       <div style={{border:"0.5px solid grey",boxShadow:"1px 1px 1px 1px #cccccc"}}>
                       
            <table1  >
  
            <th >
      <tr>
            <td>面交住址:</td>
            <td>彰化縣東環路三段336號</td>
       </tr>


      <tr>
            <td>線上信箱:</td>
            <td>peter14067@gmail.com</td>
       </tr>


      <tr>
            <td>開站日期:</td>
            <td>2019/11/19</td>
       </tr>


      <tr>
            <td>客服電話:</td>
            <td>0935489547</td>
       </tr>


      <tr>
            <td>客服時間:</td>
            <td>星 期 一 ~ 五 早上 8:30 至 下午 5:00</td>
       </tr>

       </th>

            </table1 >
            </div>
            <br></br>
            <br></br>
            
            <div style={{border:"0.5px solid grey",boxShadow:"5px 1px 1px 1px #cccccc"}}>
          
           
             <from>
                 <h1 style={{fontSize:"1em",fontFamily:" DFKai-SB"}} >聯絡資訊</h1>
               
                <input type="text"   onChange={this.myChangeHandler} placeholder="姓名" style={{marginRight:"1vw",borderBottomColor:"red",width:"100%",borderRightColor:"red",borderLeftColor:"red",borderTopColor:"red"}} />
               
                <br></br>
                <br></br>
                <input type="text" onChange={this.myChangeHandler1}  placeholder="電子信箱" style={{borderColor:"red",width:"100%"}}/>
                <br></br>
                <br></br>
                <input type="text" onChange={this.myChangeHandler2}  placeholder="電話號碼" style={{borderColor:"red",width:"100%"}}/>
                <br></br>
                <br></br>
                
      
                
             
                </from>
               
                </div>
                
                
                
                <br></br>
                
                <div>
                <form onSubmit={this.mySubmitHandler}>
                   
                <select value={this.state.problem} style={{width:"100%"}}>
                <option value="產品問題" >產品問題</option>
                <option value="出貨問題">出貨問題</option>
             



                </select>
                <br></br>
                <br></br>
                <input type='submit' style={{backgroundColor:"Slateblue",color:"white",width:"100%"}}/>
                </form>



              


            </div>



            
            

            </div>
           
        ) 
    }
}
export {Contact}