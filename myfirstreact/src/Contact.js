import React from "react"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import {Form,Col,Row} from 'react-bootstrap/Form'
class Contact extends React.Component{
    constructor(props){
        super(props)
            this.state={username:''};
        
    }
    ChangeHandler=(event)=>{
        this.setState({username:event.target.value});
    }


    render(){
        return (
        
            <div style={{marginTop:"5vh"}}>
         
            <p5 style={{marginTop:"5vh",color:"blue",fontSize:"2em"}}>
            客戶服務
            
            </p5>
            <br></br>
            <br></br>
            親愛的客戶您好，您的問題就是我們的問題，如果有任何疑問或者建議需要我們的協助，歡迎您透過以下任何管道與我們聯繫，我們將竭誠為您服務。

                       <div style={{}} >
                       <br></br>
                       <br></br>
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

            </table1>
            </div>
            <br></br>
            <br></br>
            
            <div>
             
             <from>
                 <h1 style={{fontSize:"1em",fontFamily:" DFKai-SB"}} >請輸入您的聯絡資訊:</h1>
        
                <input type="text" placeholder="姓名" style={{borderBottomColor:"red",width:"100%",borderRightColor:"red",borderLeftColor:"red",borderTopColor:"red"}} onChange={this.ChangeHandler}/>
                
                <br></br>
                <br></br>
                <input type="text" placeholder="電子信箱" style={{borderColor:"red",width:"100%"}}/>
                <br></br>
                <br></br>
                <input type="text" placeholder="電話號碼" style={{borderColor:"red",width:"100%"}}/>
                <br></br>
                <br></br>
                
      

             
                </from>

                <form>
                   
                <select value={this.state.problem} style={{width:"100%"}}>
                <option value="產品問題" >產品問題</option>
                <option value="出貨問題">出貨問題</option>
             



                </select>
                <br></br>
                <br></br>
                <input type='submit' style={{backgroundColor:"Slateblue",color:"white"}}/>
                </form>



              


            </div>



            
            

            </div>
           
        ) 
    }
}
export {Contact}