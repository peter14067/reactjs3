import React from "react"
const account = require('./account.js')
const send = require('gmail-send')({
  user: account.user,
  pass: account.password,
});

 
//import {Form,Col,Row} from 'react-bootstrap/Form'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";



function sendEmail(){
send({
  SecureToken:"7c9f4986-d34e-4ce0-bf4c-ac836cc4c1ed ",
  To : 'peter14067@gmail.com',
  From : "peter14067@gmail.com",
  Subject : "This is the subject",
  Body : "And this is the body"
})
.then(
message => alert(message)
);
}


  


class Contact extends React.Component{
    constructor(props){
        super(props)
            this.state={username:'',mail:'',phone:'',value:'',descript:'',text:''};
        
            this.changeState = this.changeState.bind(this);
            this.handleChange=this.handleChange.bind(this);

    }



    handleChange(event) {
        this.setState({value: event.target.value});
      }



    mySubmitHandler=(event)=>{
        let a1=this.state.username;
        let a2=this.state.mail;
        let a3=this.state.phone;
        let a4=this.state.value;
            console.log(a1)
            console.log(a2)
            console.log(a3)
            console.log( a4)
        event.preventDefault();
       if(this.state.username!=="" && this.state.mail!=="" && this.state.phone!=="" && this.state.value!=="" ){
        alert("姓名:"+this.state.username+"\r"+"電子信箱:"+this.state.mail+"\r"+"電話號碼:"+this.state.phone+"\r\r\r\r"+this.state.value+":\r"+this.state.descript);
        sendEmail();
       }else if(this.state.username==="")

       {   
           if(this.state.mail==="" && this.state.phone==="" && this.state.value==="")
           alert("姓名，電子信箱，電話號碼，產品問題均未填寫");
           if(this.state.mail==="" && this.state.phone==="" && this.state.value!=="")
            alert("姓名，電子信箱，電話號碼均未填寫");
         if(this.state.mail==="" && this.state.phone!=="" && this.state.value!=="")
                      alert("姓名，電子信箱未填寫");
          if(this.state.mail!=="" && this.state.phone!=="" && this.state.value!=="")
                      alert("姓名未填寫");
         if(this.state.mail!=="" && this.state.phone==="" && this.state.value!=="")
                      alert("姓名，電話號碼未填寫");
      
        if(this.state.mail!=="" && this.state.phone==="" && this.state.value==="")
                      alert("姓名，電話號碼，問題類型未填寫");
        if(this.state.mail!=="" && this.state.phone!=="" && this.state.value==="")
                      alert("姓名，問題類型未填寫");
            if(this.state.mail==="" && this.state.phone!=="" && this.state.value==="")
                      alert("姓名，電子信箱，問題類型未填寫");
        
        
        
                    }else if(this.state.username!==""){

            if(this.state.mail==="" && this.state.phone==="" && this.state.value==="")
            alert("電子信箱，電話號碼，產品問題均未填寫");
            if(this.state.mail==="" && this.state.phone==="" && this.state.value!=="")
             alert("電子信箱，電話號碼均未填寫");
          if(this.state.mail==="" && this.state.phone!=="" && this.state.value!=="")
                       alert("電子信箱未填寫");
         if(this.state.mail==="" && this.state.phone!=="" && this.state.value==="")
                       alert("電子信箱，問題類型未填寫");
        if(this.state.mail!=="" && this.state.phone==="" && this.state.value!=="")
                       alert("電話號碼未填寫");
         if(this.state.mail!=="" && this.state.phone==="" && this.state.value==="")
                       alert("電話號碼，問題類型未填寫");                       
         if(this.state.mail!=="" && this.state.phone!=="" && this.state.value==="")
         alert("問題類型未填寫");




            
        }else if(this.state.mail!==""){

            if(this.state.username==="" && this.state.phone==="" && this.state.value==="")
            alert("姓名，電話號碼，產品問題均未填寫");
            if(this.state.username==="" && this.state.phone==="" && this.state.value!=="")
             alert("姓名，電話號碼均未填寫");
 


            
        }



 
            
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


       changeState = (event) => {
     
        this.setState({descript: event.target.value })
         
       }
     



    render(){
/*
        var bg=require('./contact.jpg')
        <div   style={{marginTop:"5vh",backgroundImage: "url("+bg+")"}}>
     */
    
        return (
        
            <div   style={{marginTop:"5vh"}}>
     
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
          
           
             <form>
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
                
      
                
             
                </form>
               
                </div>
                
                
                
                <br></br>
                
                <div>
                <form>
                   
                <select value={this.state.value} onChange={this.handleChange} style={{width:"100%"}}>
                <option value="產品問題"  >產品問題</option>
                <option value="出貨問題">出貨問題</option>
               



                </select>
                <br></br>
                <br></br>
                <textarea placeholder="請敘述您的問題" id="descript" name="descript" value={this.state.descript} onChange={this.changeState}>
                </textarea>
                </form>
                <br></br>
                <br></br>
                <form onSubmit={(e)=>this.mySubmitHandler(e,this.state)} >
                <input type='submit'  style={{backgroundColor:"Slateblue",color:"white",width:"100%"}}/>
                </form>



              


            </div>



            
            

            </div>
           
        ) ;
    }
}
export {Contact}