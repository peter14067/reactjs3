(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var l=a(6),n=a(7),r=a(10),c=a(8),i=a(9),s=a(16),m=a.n(s),o=a(0),u=a.n(o),p=a(19),d=a(18),E=(u.a.Component,u.a.Component,a(67),a(68),a(69),a(70),a(71),a(32)),h=a.n(E),g=a(23),b=a.n(g),C=a(53),f=a.n(C),v=a(54),j=a(101),O=a(102),y=a(103),x=a(104),S=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.product;e.cart,e.addToCart;return u.a.createElement("div",{width:"100%"},u.a.createElement(j.a,null,u.a.createElement(O.a,{width:" 100%",height:"50%",style:{margin:"0",padding:"0"},src:t.img,alt:"Card image cap"}),u.a.createElement(y.a,null,t.title," "),u.a.createElement(x.a,null,t.desc)))}}]),t}(o.Component),N=a(105),R=a(106),k=a(107),F=a(108),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={modal:!1,album:v,cart:[]},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.city,e.album1,e.album);e.cart,e.modal;return u.a.createElement("div",null,u.a.createElement("div",{className:"demo2-bg"},u.a.createElement("div",{className:"demo2"},"About US")),u.a.createElement(N.a,null,u.a.createElement(R.a,{md:12},u.a.createElement(k.a,null,u.a.createElement("h1",{style:{textAlign:"center",color:"red"}},"\u5bb6\u5ead\u6210\u54e1\u4ecb\u7d39"),u.a.createElement(N.a,null,t.map((function(e){return u.a.createElement(R.a,{sm:6,md:4,className:"mb-3"},u.a.createElement(S,{product:e}))})))))),u.a.createElement("div",{className:"demo2-bg"},u.a.createElement("div",{className:"demo2"},"\u767c\u5c55\u904e\u7a0b")),u.a.createElement("div",{style:{backgroundColor:"#33C496",height:"120vh",borderTop:"2px solid white"}},u.a.createElement("div",{class:"hover"},u.a.createElement("img",{src:h.a,alt:"Logo"}),u.a.createElement("img",{src:b.a,alt:"Logo"}),u.a.createElement("p",{class:"p1"})),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("div",{class:"hover"},u.a.createElement("img",{src:f.a,alt:"Logo"}),u.a.createElement("img",{src:h.a,alt:"Logo"}),u.a.createElement("p",{class:"p1"}))),u.a.createElement("div",{className:"demo2-bg",style:{marginBottom:"10"}},u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("div",{className:"demo2"},"\u6b77\u5e74\u5927\u4e8b")),u.a.createElement("div",null,u.a.createElement(F.a,{responsive:"sm"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"\u5e74\u5ea6"),u.a.createElement("th",null,"\u5e74\u5ea6\u5927\u4e8b"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"2015/3/5"),u.a.createElement("td",null,"\u6574\u4fee\u7530")),u.a.createElement("tr",{style:{backgroundColor:"lightgrey"}},u.a.createElement("td",null,"2019"),u.a.createElement("td",null,"\u5f70\u5316\u767e\u5bf6\u6751\u64fa\u6524")),u.a.createElement("tr",null,u.a.createElement("td",null,"2020/1/26-2020/2/9"),u.a.createElement("td",null,"\u82b1\u5728\u5f70\u5316\u64fa\u6524")),u.a.createElement("tr",{style:{backgroundColor:"lightgrey"}},u.a.createElement("td",null,"2020/2/28-29"),u.a.createElement("td",null,"\u53f0\u4e2d\u64fa\u6524"))))))}}]),t}(u.a.Component),A=a(11),T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).mySubmitHandler=function(e){var t=a.state.username,l=a.state.mail,n=a.state.phone,r=a.state.value;console.log(t),console.log(l),console.log(n),console.log(r),e.preventDefault(),""!=a.state.username&&""!=a.state.mail&&""!=a.state.phone&&""!=a.state.value?alert("\u59d3\u540d:"+a.state.username+"\r\u96fb\u5b50\u4fe1\u7bb1:"+a.state.mail+"\r\u96fb\u8a71\u865f\u78bc:"+a.state.phone+"\r\r\r\r"+a.state.value+":\r"+a.state.descript):""==a.state.username?(""==a.state.mail&&""==a.state.phone&&""==a.state.value&&alert("\u59d3\u540d\uff0c\u96fb\u5b50\u4fe1\u7bb1\uff0c\u96fb\u8a71\u865f\u78bc\uff0c\u7522\u54c1\u554f\u984c\u5747\u672a\u586b\u5beb"),""==a.state.mail&&""==a.state.phone&&""!=a.state.value&&alert("\u59d3\u540d\uff0c\u96fb\u5b50\u4fe1\u7bb1\uff0c\u96fb\u8a71\u865f\u78bc\u5747\u672a\u586b\u5beb"),""==a.state.mail&&""!=a.state.phone&&""!=a.state.value&&alert("\u59d3\u540d\uff0c\u96fb\u5b50\u4fe1\u7bb1\u672a\u586b\u5beb"),""!=a.state.mail&&""!=a.state.phone&&""!=a.state.value&&alert("\u59d3\u540d\u672a\u586b\u5beb"),""!=a.state.mail&&""==a.state.phone&&""!=a.state.value&&alert("\u59d3\u540d\uff0c\u96fb\u8a71\u865f\u78bc\u672a\u586b\u5beb"),""!=a.state.mail&&""==a.state.phone&&""==a.state.value&&alert("\u59d3\u540d\uff0c\u96fb\u8a71\u865f\u78bc\uff0c\u554f\u984c\u985e\u578b\u672a\u586b\u5beb"),""!=a.state.mail&&""!=a.state.phone&&""==a.state.value&&alert("\u59d3\u540d\uff0c\u554f\u984c\u985e\u578b\u672a\u586b\u5beb"),""==a.state.mail&&""!=a.state.phone&&""==a.state.value&&alert("\u59d3\u540d\uff0c\u96fb\u5b50\u4fe1\u7bb1\uff0c\u554f\u984c\u985e\u578b\u672a\u586b\u5beb")):""!=a.state.username?(""==a.state.mail&&""==a.state.phone&&""==a.state.value&&alert("\u96fb\u5b50\u4fe1\u7bb1\uff0c\u96fb\u8a71\u865f\u78bc\uff0c\u7522\u54c1\u554f\u984c\u5747\u672a\u586b\u5beb"),""==a.state.mail&&""==a.state.phone&&""!=a.state.value&&alert("\u96fb\u5b50\u4fe1\u7bb1\uff0c\u96fb\u8a71\u865f\u78bc\u5747\u672a\u586b\u5beb"),""==a.state.mail&&""!=a.state.phone&&""!=a.state.value&&alert("\u96fb\u5b50\u4fe1\u7bb1\u672a\u586b\u5beb"),""==a.state.mail&&""!=a.state.phone&&""==a.state.value&&alert("\u96fb\u5b50\u4fe1\u7bb1\uff0c\u554f\u984c\u985e\u578b\u672a\u586b\u5beb"),""!=a.state.mail&&""==a.state.phone&&""!=a.state.value&&alert("\u96fb\u8a71\u865f\u78bc\u672a\u586b\u5beb"),""!=a.state.mail&&""==a.state.phone&&""==a.state.value&&alert("\u96fb\u8a71\u865f\u78bc\uff0c\u554f\u984c\u985e\u578b\u672a\u586b\u5beb"),""!=a.state.mail&&""!=a.state.phone&&""==a.state.value&&alert("\u554f\u984c\u985e\u578b\u672a\u586b\u5beb")):""!=a.state.mail&&(""==a.state.username&&""==a.state.phone&&""==a.state.value&&alert("\u59d3\u540d\uff0c\u96fb\u8a71\u865f\u78bc\uff0c\u7522\u54c1\u554f\u984c\u5747\u672a\u586b\u5beb"),""==a.state.username&&""==a.state.phone&&""!=a.state.value&&alert("\u59d3\u540d\uff0c\u96fb\u8a71\u865f\u78bc\u5747\u672a\u586b\u5beb"))},a.myChangeHandler=function(e){a.setState({username:e.target.value})},a.myChangeHandler1=function(e){a.setState({mail:e.target.value})},a.myChangeHandler2=function(e){a.setState({phone:e.target.value})},a.changeState=function(e){a.setState({descript:e.target.value})},a.state={username:"",mail:"",phone:"",value:"",descript:"",text:""},a.changeState=a.changeState.bind(Object(A.a)(a)),a.handleChange=a.handleChange.bind(Object(A.a)(a)),a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{style:{marginTop:"5vh"}},u.a.createElement("div",{style:{border:"0.5px solid grey",boxShadow:"5px 1px 1px 1px #cccccc"}},u.a.createElement("div",{style:{textAlign:"center",margin:"0px auto",color:"blue",fontSize:"2em"}},"\u5ba2\u6236\u670d\u52d9",u.a.createElement("br",null)),u.a.createElement("div",{style:{margin:"0px auto",color:"blue",fontSize:"1em"}},"\u89aa\u611b\u7684\u5ba2\u6236\u60a8\u597d\uff0c\u60a8\u7684\u554f\u984c\u5c31\u662f\u6211\u5011\u7684\u554f\u984c\uff0c",u.a.createElement("br",null),"\u5982\u679c\u6709\u4efb\u4f55\u7591\u554f\u6216\u8005\u5efa\u8b70\u9700\u8981\u6211\u5011\u7684\u5354\u52a9\uff0c",u.a.createElement("br",null),"\u6b61\u8fce\u60a8\u900f\u904e\u4ee5\u4e0b\u4efb\u4f55\u7ba1\u9053\u8207\u6211\u5011\u806f\u7e6b\uff0c\u6211\u5011\u5c07\u7aed\u8aa0\u70ba\u60a8\u670d\u52d9\u3002")),u.a.createElement("br",null),u.a.createElement("div",{style:{border:"0.5px solid grey",boxShadow:"1px 1px 1px 1px #cccccc"}},u.a.createElement("table1",null,u.a.createElement("th",null,u.a.createElement("tr",null,u.a.createElement("td",null,"\u9762\u4ea4\u4f4f\u5740:"),u.a.createElement("td",null,"\u5f70\u5316\u7e23\u6771\u74b0\u8def\u4e09\u6bb5336\u865f")),u.a.createElement("tr",null,u.a.createElement("td",null,"\u7dda\u4e0a\u4fe1\u7bb1:"),u.a.createElement("td",null,"peter14067@gmail.com")),u.a.createElement("tr",null,u.a.createElement("td",null,"\u958b\u7ad9\u65e5\u671f:"),u.a.createElement("td",null,"2019/11/19")),u.a.createElement("tr",null,u.a.createElement("td",null,"\u5ba2\u670d\u96fb\u8a71:"),u.a.createElement("td",null,"0935489547")),u.a.createElement("tr",null,u.a.createElement("td",null,"\u5ba2\u670d\u6642\u9593:"),u.a.createElement("td",null,"\u661f \u671f \u4e00 ~ \u4e94 \u65e9\u4e0a 8:30 \u81f3 \u4e0b\u5348 5:00"))))),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("div",{style:{border:"0.5px solid grey",boxShadow:"5px 1px 1px 1px #cccccc"}},u.a.createElement("form",null,u.a.createElement("h1",{style:{fontSize:"1em",fontFamily:" DFKai-SB"}},"\u806f\u7d61\u8cc7\u8a0a"),u.a.createElement("input",{type:"text",onChange:this.myChangeHandler,placeholder:"\u59d3\u540d",style:{marginRight:"1vw",borderBottomColor:"red",width:"100%",borderRightColor:"red",borderLeftColor:"red",borderTopColor:"red"}}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("input",{type:"text",onChange:this.myChangeHandler1,placeholder:"\u96fb\u5b50\u4fe1\u7bb1",style:{borderColor:"red",width:"100%"}}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("input",{type:"text",onChange:this.myChangeHandler2,placeholder:"\u96fb\u8a71\u865f\u78bc",style:{borderColor:"red",width:"100%"}}),u.a.createElement("br",null),u.a.createElement("br",null))),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement("form",null,u.a.createElement("select",{value:this.state.value,onChange:this.handleChange,style:{width:"100%"}},u.a.createElement("option",{value:"\u7522\u54c1\u554f\u984c"},"\u7522\u54c1\u554f\u984c"),u.a.createElement("option",{value:"\u51fa\u8ca8\u554f\u984c"},"\u51fa\u8ca8\u554f\u984c")),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("textarea",{placeholder:"\u8acb\u6558\u8ff0\u60a8\u7684\u554f\u984c",id:"descript",name:"descript",value:this.state.descript,onChange:this.changeState})),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("form",{onSubmit:function(t){return e.mySubmitHandler(t,e.state)}},u.a.createElement("input",{type:"submit",style:{backgroundColor:"Slateblue",color:"white",width:"100%"}}))))}}]),t}(u.a.Component),M=a(109),X=a(110),P=a(111),H=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.cart,l=e.addToCart;return u.a.createElement(j.a,null,u.a.createElement(O.a,{width:"100%",src:t.img,alt:"Card image cap"}),u.a.createElement(y.a,null,t.title," "),u.a.createElement(M.a,null,u.a.createElement("h4",null,t.discount?u.a.createElement(X.a,{COLOR:"danget"},"\u7279\u50f9:",t.price):u.a.createElement(X.a,{color:"success"},"\u552e\u50f9:",t.price))),u.a.createElement(x.a,null,t.desc),u.a.createElement(P.a,{disabled:a.find((function(e){return e.id===t.id})),color:"secondary",onClick:function(){return l(t)}},"\u8cfc\u8cb7"))}}]),t}(o.Component),I=(a(27),a(40),a(41),a(42),a(43),a(44),a(45),a(46),a(29)),J=a.n(I),L=(a(47),a(30)),_=a(31),z=a(33),K=a.n(z),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={modal:!1,album:L,album1:_,cart:[]},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.city,e.album1);e.album,e.cart,e.modal;return u.a.createElement("div",null,u.a.createElement(K.a,{class:"carousel slide",cols:3,rows:1,gap:0,loop:!0,"data-ride":"carousel"},t.map((function(e,t){return u.a.createElement(K.a.Item,null,u.a.createElement(S,{product:e}))}))))}}]),t}(u.a.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(j.a,null,u.a.createElement(O.a,{width:"100%",src:J.a,alt:"Card image cap"}),u.a.createElement(y.a,null,"\u91d1\u91d1"),u.a.createElement(x.a,null)))}}]),t}(u.a.Component),Y=a(57),G=a(112),U=a(117),W=a(113),q=a(114),Q=a(115),V=a(116),Z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={modal:!1,album:Y,cart:[]},a.toggle=function(){a.setState({modal:!a.state.modal})},a.addToCart=function(e){var t=a.state.cart;console.log(e.price),t.push(e),a.setState({cart:t})},a.checkout=function(e){alert("\u5df2\u5f9e\u60a8\u7684\u4fe1\u7528\u5361\u4e2d\u6263\u9664".concat(e,"\u5143\uff01"))},a.deleteCartItem=function(e){var t=a.state.cart;t.splice(e,1),a.setState({cart:t})},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.album,l=t.cart,n=t.modal,r=l.reduce((function(e,t){return e+t.price}),0);return u.a.createElement("div",{className:"content"},u.a.createElement(G.a,null,u.a.createElement(N.a,null,u.a.createElement(R.a,{md:12},u.a.createElement(k.a,null,u.a.createElement("h1",{className:"display-3"},"\u5e78\u798f\u6642\u6a5f"),u.a.createElement("p",{className:"lead"},"\u5e78\u798f\u6642\u6a5f2015\u5e74\u6210\u7acb\uff0c\u6211\u5011\u79c9\u6301\u8457\u5b89\u5fc3\uff0c\u5065\u5eb7\u7684\u539f\u5247\u53bb\u88fd\u4f5c\u8457\u6211\u5011\u6bcf\u500b\u7522\u54c1\uff0c"),u.a.createElement("hr",{className:"my-2"}),u.a.createElement("p",{className:"lead"},u.a.createElement(P.a,{color:"primary",onClick:this.toggle},"\u8cfc\u7269\u8eca(",l.length,")"))))),u.a.createElement(N.a,null,a.map((function(t){return u.a.createElement(R.a,{sm:6,md:4,className:"mb-3"},u.a.createElement(H,{product:t,cart:l,addToCart:e.addToCart}))}))),u.a.createElement(U.a,{isOpen:n,toggle:this.toggle},u.a.createElement(W.a,{toggle:this.toggle},"\u8cfc\u7269\u8eca"),u.a.createElement(q.a,null,u.a.createElement(F.a,null,u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"#"),u.a.createElement("th",null,"\u54c1\u9805"),u.a.createElement("th",null,"\u50f9\u683c"))),u.a.createElement("tbody",null,l.map((function(t,a){return u.a.createElement("tr",null,u.a.createElement("th",{scope:"row"},a+1),u.a.createElement("td",null,t.title),u.a.createElement("td",null,t.price),u.a.createElement("td",null,u.a.createElement(P.a,{color:"danger",onClick:function(){return e.deleteCartItem(a)}},"x")," "))})))),u.a.createElement(Q.a,{color:"success",className:"text-right"},"\u7e3d\u50f9:",r,"\u5143")),u.a.createElement(V.a,null,u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement(P.a,{disabled:0===l.length,color:"primary",onClick:function(){return e.checkout(r)}},"\u7d50\u5e33"))),u.a.createElement(P.a,{color:"secondary",onClick:this.toggle},"\u53d6\u6d88")))))}}]),t}(u.a.Component),$=a(36),ee={width:"100%",height:"100%"},te=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement($.Map,{google:this.props.google,zoom:8,style:ee,initialCenter:{lat:47.444,lng:-122.176}}))}}]),t}(o.Component),ae=(Object($.GoogleApiWrapper)({apiKey:"TOKEN HERE"})(te),a(98),function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return u.a.createElement(p.a,null,u.a.createElement("div",null,u.a.createElement("table",{class:"Nav_link1"},u.a.createElement(p.b,{class:"Nav_link",to:"/"},"\u95dc\u65bc\u6211\u5011"),u.a.createElement(p.b,{class:"Nav_link",to:"/PTdescription"},"\u7522\u54c1\u8cfc\u8cb7"),u.a.createElement(p.b,{class:"Nav_link",to:"/Contact"},"\u806f\u7d61\u6211\u5011"),u.a.createElement(p.b,{class:"Nav_link",to:"/Product1"},"\u690d\u7269\u4ecb\u7d39"),u.a.createElement(p.b,{class:"Nav_link",to:"/test"},"\u6e2c\u8a66")),u.a.createElement(d.a,{exact:!0,path:"/",component:w}),u.a.createElement(d.a,{path:"/PTdescription",component:Z}),u.a.createElement(d.a,{path:"/Contact",component:T}),u.a.createElement(d.a,{path:"/Product1",component:B}),u.a.createElement(d.a,{path:"/Test",component:D})))}}]),t}(u.a.Component));m.a.render(u.a.createElement(ae,null),document.getElementById("root"))},23:function(e,t,a){e.exports=a.p+"static/media/pc1.e083a59a.jpg"},27:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/pc9.ac10fbef.jpg"},30:function(e){e.exports=JSON.parse('[{"id":1,"img":"./pc1.jpg","title":"\u6a80\u9999","desc":"","price":800},{"id":2,"img":"./pc2.jpg","title":"\u7121\u82b1\u679c","desc":"","price":800},{"id":3,"img":"./pc3.jpg","title":"\u91d1\u65b0\u6728\u8591\u5b50(\u4f5b\u5149\u6a39)","desc":"","price":800}]')},31:function(e){e.exports=JSON.parse('[{"id":1,"img":"./flower1.jpg","title":"\u676d\u83ca","desc":"1.\u89c0\u8cde\u7528\uff1a\u53ef\u4f5c\u5207\u82b1\u7528\u3001\u76c6\u82b1\u7528\u6216\u82b1\u58c7\u5e03\u7f6e\u7528\u30022.\u98df\u7528\uff1a\u676d\u83ca\u662f\u300c\u83ca\u82b1\u8336\u300d\u7684\u4e3b\u8981\u539f\u6599\uff0c\u7d93\u70d8\u7119\u5f8c\u53ef\u4f5c\u9999\u6599\u3001\u85e5\u7528\uff0c\u81ea\u53e4\u4ee5\u4f86\u6c96\u6ce1\u83ca\u82b1\u8336\u7576\u990a\u751f\u4fdd\u5065\u98f2\u6599\uff0c\u7d93\u6fdf\u50f9\u503c\u6975\u9ad8\u30023.\u85e5\u7528\uff1a\u6027\u5473\uff1a\u82b1\uff1a\u7518\u3001\u82e6\u3001\u6dbc\uff1b\u8449\uff1a\u8f9b\u3001\u7518\u3001\u5e73\u3002\u6548\u7528\uff1a\u82b1\uff1a\u758f\u98a8\u6e05\u71b1\uff0c\u5e73\u809d\u660e\u76ee\uff0c\u89e3\u6bd2\u6d88\u816b\u3002\u6cbb\u982d\u75db\uff0c\u7729\u6688\uff0c\u76ee\u8d64\uff0c\u816b\u6bd2\uff1b\u8449\uff1a\u6cbb\u7594\u7621\uff0c\u982d\u98a8\uff0c\u76ee\u7729\u3002\u6563\u98a8\u6e05\u71b1\uff0c\u5e73\u809d\u660e\u76ee\u3002\u7528\u65bc\u6cbb\u98a8\u71b1\u611f\u5192\u3001\u982d\u75db\u7729\u6688\u3001\u76ee\u8d64\u816b\u75db\u3001\u773c\u76ee\u660f\u82b1\u3002","price":800},{"id":2,"img":"./flower2.jpg","title":"\u6ab8\u6aac\u9999\u8305","desc":"","price":800},{"id":3,"img":"./pc1.jpg","title":"\u6a80\u9999","desc":"1.\u884c\u6c23\u6b62\u75db\uff1a\u7528\u65bc\u5bd2\u51dd\u6c23\u6eef\u6240\u81f4\u7684\u8118\u8179\u51b7\u75db\u53ca\u795e\u7d93\u6027\u80c3\u75db\uff0c\u53ef\u8207\u6c89\u9999\u3001\u6728\u9999\u3001\u4e01\u9999\u3001\u70cf\u85e5\u3001\u4e73\u9999\u3001\u7247\u8591\u9ec3\u3001\u85ff\u9999\u3001\u8089\u6842\u3001\u6854\u6897\u3001\u7518\u8349\u3001\u751f\u8591\u3001\u5927\u68d7\u540c\u7528\uff0c\u5982\u805a\u9999\u98f2\u3002","price":800},{"id":4,"img":"./pc3.jpg","title":"\u91d1\u65b0\u6728\u8591\u5b50(\u4f5b\u5149\u6a39)","desc":"","price":800},{"id":5,"img":"./pc10.jpg","title":"\u91d1\u65b0\u6728\u8591\u5b50(\u4f5b\u5149\u6a39)","desc":"","price":800},{"id":5,"img":"./pc11.jpg","title":"\u91d1\u65b0\u6728\u8591\u5b50(\u4f5b\u5149\u6a39)","desc":"","price":800},{"id":5,"img":"./pc12.jpg","title":"\u91d1\u65b0\u6728\u8591\u5b50(\u4f5b\u5149\u6a39)","desc":"","price":800},{"id":5,"img":"./pc13.jpg","title":"\u91d1\u65b0\u6728\u8591\u5b50(\u4f5b\u5149\u6a39)","desc":"","price":800},{"id":5,"img":"./pc14.jpg","title":"\u91d1\u65b0\u6728\u8591\u5b50(\u4f5b\u5149\u6a39)","desc":"","price":800}]')},32:function(e,t,a){e.exports=a.p+"static/media/112201.37e26a56.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/pc2.29011f8e.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/pc3.1f5d80be.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/pc4.f8bc3fb2.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/pc5.c08eee15.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/pc6.6653cade.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/pc7.9bb5bc25.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/pc8.c86fa65c.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/pc10.8e36425c.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/mazep.96a1a830.jpg"},54:function(e){e.exports=JSON.parse('[{"id":1,"img":"./112101.jpg","title":"\u9019\u662f\u5abd\u5abd\uff0c\u9019\u88e1\u5927\u5927\u5c0f\u5c0f\u7684\u82b1\u5703\u90fd\u662f\u7531\u5979\u8ca0\u8cac\u53bb\u6f86\u82b1\uff0c\u65bd\u80a5\u8655\u7406\u7684\u3002","desc":"","price":800},{"id":2,"img":"./112102.jpg","title":"\u9019\u662fMary\uff0c\u5bb6\u88e1\u7db2\u7ad9\u7684logo\u4ee5\u53ca\u85dd\u8853\u4e0a\u7684\u8a2d\u8a08\u90fd\u662f\u7531\u5979\u8655\u7406\u7684\u3002","desc":"","price":""},{"id":3,"img":"./112103.jpg","title":"\u9019\u662fJohn\uff0c\u7576\u521d\u7530\u88e1\u7684\u690d\u7269\u898f\u5283\u4ee5\u53ca\u74b0\u5883\u6574\u7406\u90fd\u662f\u6709\u4ed6\u8ca0\u8cac\u3002","desc":"","price":""},{"id":4,"img":"./112105.jpg","title":"\u9019\u662fPeter\uff0c\u8ca0\u8cac\u5bb6\u88e1\u7db2\u7ad9\u898f\u5283\u7684\u90e8\u4efd","desc":"","price":""}]')},57:function(e){e.exports=JSON.parse('[{"id":1,"img":"./Chrysanthemum.jpg","title":"\u676d\u83ca","desc":"","price":800},{"id":2,"img":"./lemongrass.jpg","title":"\u6ab8\u6aac\u9999\u8305","desc":"","price":800},{"id":3,"img":"./Chrysanthemum-bottle.jpg","title":"\u676d\u83ca\u7f50","desc":"","price":800},{"id":4,"img":"https://unsplash.it/300/300?image=1050","title":"EPIC\u5546\u54c1~ \u6c34\u8f49\u5370\u985e\u78b3\u7e96\u7dad\u6b3e FORCE\u539f\u5ee0\u8f49\u5370\u6392\u6c23\u7ba1\u8b77\u84cb","desc":"\u53f0\u7063\u539f\u5275\uff0c\u5343\u5927EPIC\u51fa\u54c1FORCE\u539f\u5ee0\u8f49\u5370\u6392\u6c23\u7ba1\u8b77\u84cb\u4eff\u771f\u78b3\u7e96\u7dad\u6c34\u8f49\u5370\uff0c\u7cbe\u7dfb\u6c34\u8f49\u5370\u88fd\u505a\u6c34\u8f49\u5370\u7279\u8272\u662f\u6bd4\u78b3\u7e96\u7dad\u552e\u50f9\u66f4\u4fbf\u5b9c\u3001\u66f4\u89aa\u6c11\u800c\u6c34\u8f49\u5370\u4e5f\u975e\u5e38\u8010\u7528\uff0c\u53ef\u6253\u881f\u6e05\u6d17\u6c92\u6709\u554f\u984c\u7cbe\u7dfb\u6c34\u8f49\u5370\u88fd\u9020\uff0c\u6709\u4e0d\u932f\u7684\u5916\u89c0\u6027\u5916\u5c64\u4e5f\u662f..","price":2592},{"id":5,"img":"https://unsplash.it/300/300?image=1051","title":"EPIC\u5546\u54c1~\u6c34\u8f49\u5370\u985e\u78b3\u7e96\u7dad\u6b3e SMAX FORCE\u539f\u5ee0\u8f49\u5370\u6c34\u7bb1\u5916\u84cb","desc":"\u53f0\u7063\u539f\u5275\uff0c\u5343\u5927EPIC\u51fa\u54c1\u4eff\u771f\u78b3\u7e96\u7dad\u6c34\u8f49\u5370\uff0c\u7cbe\u7dfb\u6c34\u8f49\u5370\u88fd\u505a\u6c34\u8f49\u5370\u7279\u8272\u662f\u6bd4\u78b3\u7e96\u7dad\u552e\u50f9\u66f4\u4fbf\u5b9c\u3001\u66f4\u89aa\u6c11\u800c\u6c34\u8f49\u5370\u4e5f\u975e\u5e38\u8010\u7528\uff0c\u53ef\u6253\u881f\u6e05\u6d17\u6c92\u6709\u554f\u984c\u7cbe\u7dfb\u6c34\u8f49\u5370\u88fd\u9020\uff0c\u6709\u4e0d\u932f\u7684\u5916\u89c0\u6027\u5916\u5c64\u4e5f\u662f\u900f\u660e\u70e4\u6f06\uff0c\u5b89\u88dd\u5f8c\u4e5f\u975e\u5e38\u597d\u770b...","price":3469},{"id":6,"img":"https://unsplash.it/300/300?image=1052","title":"FORCE SMAX \u78b3\u7e96\u7dad\u958b\u5b54\u9020\u578b\u524d\u571f\u9664","desc":"\u5546\u54c1\u7279\u8272FORCE SMAX \u78b3\u7e96\u7dad\u958b\u5b54\u9020\u578b\u524d\u571f\u9664\u5916\u578b\u985e\u4f3c\u539f\u5ee0\u571f\u9664\uff0c\u4f46\u66f4\u5177\u7acb\u9ad4\u9020\u578b\u7d14\u6b63\u7e96\u7dad\u5305\u8986\uff0c\u5305\u8986\u6b63\u78b3\u7e96\u7dad\u5546\u54c1100%\u78b3\u7e96\u7dad\u62ab\u8986\uff0c\u54c1\u8cea\u512a\u826f\u4e0d\u6613\u812b\u81a0\u5b8c\u5168\u624b\u5de5\u88fd\u4f5c\uff0c\u5b89\u88dd\u5f8c\u597d\u770b\u6eff\u9ede\u5546\u54c1\u8aaa\u660e\u6b64\u7d44\u70ba\u6700\u53d7\u6b61\u8fce\u6b3e..","price":3012},{"id":7,"img":"https://unsplash.it/300/300?image=1053","title":"FORCE SMAX\u5c08\u7528 \u78b3\u7e96\u7dad\u50b3\u52d5\u524d\u6846","desc":"\u5546\u54c1\u7279\u8272\u5c71\u8449FORCE SMAX\u5c08\u7528 \u78b3\u7e96\u7dad\u50b3\u52d5\u524d\u6846\uff0c\u8d85\u5bc6\u5408\u6b3e\u65b0\u4e00\u4ee3\u78b3\u7e96\u7dad\u771f\u7a7a\u9ad8\u58d3\u6b3e\uff0c\u6b63\u5916\u92b7\u65e5\u672c\u54c1\u6b64\u70ba\u6700\u65b0\u88fd\u7a0b\uff0c100%\u958b\u6a21\u771f\u7a7a\u9ad8\u58d3\u6b3e\u5f0f100%\u958bCNC\u6a21\u5177\u88fd\u4f5c\uff0c\u63a1\u7528\u771f\u7a7a\u9ad8\u58d3\u88fd\u9020\u771f\u7a7a\u9ad8\u58d3\u88fd\u6210\u88fd\u4f5c\uff0c\u54c1\u8cea..","price":3371},{"id":8,"img":"https://unsplash.it/300/300?image=1054","title":"FORCE SMAX\u5c08\u7528~ \u985e\u78b3\u7e96\u7dad\u58d3\u82b1 \u52a0\u9577\u578b\u5f8c\u5167\u571f\u9664","desc":"\u6700\u65b0\u6b3eSMAX\u52a0\u9577\u578b\u5f8c\u5167\u571f\u9664\uff0c\u52a0\u9577\u6b3e\u5f0f\u8ddf\u4e00\u822c\u5167\u571f\u9664\u6bd4\u8f03\uff0c\u52a0\u957730%\u9577\u5ea6\u906e\u64cb\u96e8\u6c34\u6548\u679c\u66f4\u4f73\uff0c\u597d\u7528\u6eff\u9ede&nbsp;&nbsp;\u5916\u89c0\u63a1\u7528\u8207\u539f\u5ee0\u76f8\u540c\u5851\u6599\uff0c\u8010\u7528\u5ea6\u4f73\u5c31\u7b97\u9577\u671f\u4f7f\u7528\u9707\u52d5\uff0c\u90fd\u4e0d\u6613\u7834\u88c2\u6545\u969c\u5916\u8868\u63a1\u7528\u985e\u4f3c\u78b3\u7e96..","price":1614},{"id":9,"img":"https://unsplash.it/300/300?image=1055","title":"FORCE SMAX\u5c08\u7528\u5916\u639b\u5f0f\u5f8c\u64cb\u6ce5\u677f","desc":"\u53f0\u7063\u5de5\u5ee0\u88fd\u9020\uff0cFORCE SMAX\u5c08\u7528\u64cb\u6c34\u677f\u6b64\u70ba\u5916\u639b\u5f0f\u8a2d\u8a08\uff0c\u52a0\u5f37\u64cb\u6c34\u64cb\u6ce5\u5c08\u7528\u5b89\u88dd\u7c21\u55ae\uff0c\u975e\u5e38\u65b9\u4fbf\uff0c\u81ea\u5df1DIY\u90fd\u7c21\u55ae100%\u53f0\u7063\u5ee0\u5546\u88fd\u4f5c\uff0c\u7d55\u5c0d\u597d\u7528\u6700\u7c21\u55ae\u65b9\u4fbf\uff0c\u6700\u4fbf\u5b9c\u7684\u597d\u5546\u54c1\u9ad8CP\u503c\uff0cFORCE SMAX\u76f4..","price":2078},{"id":10,"img":"https://unsplash.it/300/300?image=1056","title":"FORCE\u3001SMAX\u5c08\u7528~ \u78b3\u7e96\u7dad\u6c34\u7bb1\u5916\u84cb\u8cbc\u7247\u7d44","desc":"\u5546\u54c1\u7279\u8272\u5c71\u8449FORCE155\u5c08\u7528\u78b3\u7e96\u7dad \u78b3\u7e96\u7dad\u6c34\u7bb1\u5916\u84cb\u8cbc\u7247\u7d44\u65b0\u4e00\u4ee3\u78b3\u7e96\u7dad\u771f\u7a7a\u9ad8\u58d3\u6b3e\uff0c\u6b63\u5916\u92b7\u65e5\u672c\u54c1\u6b64\u70ba\u6700\u65b0\u88fd\u7a0b\uff0c100%\u958b\u6a21\u771f\u7a7a\u9ad8\u58d3\u6b3e\u5f0f100%\u958bCNC\u6a21\u5177\u88fd\u4f5c\uff0c\u63a1\u7528\u771f\u7a7a\u9ad8\u58d3\u88fd\u9020\u771f\u7a7a\u9ad8\u58d3\u88fd\u6210\u88fd\u4f5c\uff0c\u54c1\u8cea\u512a..","price":2627},{"id":11,"img":"https://unsplash.it/300/300?image=1057","title":"FORCE\u5c08\u6539~ FORCE\u5c08\u7528\u6b50\u76df\u65b9\u5411\u71c8\u7ff9\u724c\u67b6\u5957\u9910","desc":"\u5546\u54c1\u8aaa\u660e &nbsp;\u95dc\u65bc\u7ff9\u724c\u67b6\u7ff9\u724c\u67b6\u63a1\u7528KYL\u5546\u54c1\uff0c\u53f0\u7063\u5ee0\u5546KYL\u958b\u767c\u8a2d\u8a08\u5b89\u88dd\u7c21\u55ae\u65b9\u4fbf\uff0c\u5b8c\u5168\u76f4\u4e0a\u5c0d\u61c9\u539f\u5ee0\u9396\u9ede\uff0c\u4e0d\u9700\u8981\u6316\u6d1e\u947d\u5b54\u5b89\u88dd\u5f8c\u89d2\u5ea6\u5728\u6cd5\u898f45\u5ea6\u89d2\u4ee5\u4e0b\uff0c\u4e0d\u6703\u592a\u7ff9\u5c08\u8eca\u5c08\u7528\u7ff9\u5ea6\u525b\u525b\u597d\uff0c\u4e0d\u7528\u64d4\u5fc3\u592a\u7ff9\u5927\u7d04..","price":2659},{"id":12,"img":"https://unsplash.it/300/300?image=1058","title":"FORCE\u5c08\u6539~ JSTC\u76f4\u4e0a\u578b\u7167\u5f8c\u93e1\u524d\u79fb\u5957\u4ef6\u7d44","desc":"\u5546\u54c1\u7279\u8272JSTC\u76f4\u4e0a\u578b\u7167\u5f8c\u93e1\u524d\u79fb\u5957\u4ef6\u7d44\uff0c\u5c08\u70baFORCE\u8a2d\u8a08\u6539\u88dd\u5b8c\u5168\u76f4\u4e0a\uff0c\u7c21\u6613\u578b\u5b89\u88dd\u8a2d\u8a08\u89d2\u5ea6\u4e0d\u504f\u79fb\uff0c\u4e0d\u6b6a\u659c\u5b8c\u5168\u76f4\u4e0a\u5546\u54c1\u53f0\u7063\u88fd\u9020\uff0c\u975e\u5de6\u5cb8\u5546\u54c1\u5c08\u70baFORCE\u89d2\u5ea6\u8a2d\u8a08\u5b89\u88dd\uff0cFORCE\u5c08\u7528\u5176\u4ed6\u8eca\u578b\u4e0d\u53ef\u7c21\u55ae\u65b9\u4fbf\uff0c..","price":1871},{"id":13,"img":"https://unsplash.it/300/300?image=1059","title":"FORCE\u5c08\u7528 \u6975\u5992\u53ef\u8abf\u5f0fCNC\u7ff9\u724c\u67b6 \u5927\u724c\u67b6","desc":"\u5546\u54c1\u7279\u8272\u53f0\u7063\u88fd\u9020\u5546\u54c1\uff0c\u6975\u5992\u5546\u54c1 \u53ef\u8abf\u5f0fCNC\u7ff9\u724c\u67b6 \u5927\u724c\u67b6\u5c0d\u61c9FORCE\u5c08\u7528\u51fa\u54c1\uff0c\u5c08\u8eca\u5c08\u7528\u5168CNC\u88fd\u9020\uff0c\u975e\u4e00\u822c\u58d3\u9444\u5546\u54c1\u5b89\u88dd\u5f8c\u66f4\u52a0\u7c21\u6f54\u3001\u6e05\u723d\u3001\u597d\u770b\uff0c\u5b8c\u5168\u65e5\u5f0f\u98a8\u683cFORCE\u5c08\u7528\u76f4\u4e0a\u6b3e\u5168\u65b0\u8a2d\u8a08\u5c0d\u61c9FORCE..","price":1751},{"id":14,"img":"https://unsplash.it/300/300?image=1060","title":"FORCE\u5c08\u7528 \u78b3\u7e96\u7dad\u6392\u6c23\u7ba1\u8b77\u7247\u5074\u908a\u8cbc\u7247","desc":"\u5546\u54c1\u7279\u8272\u5c71\u8449FORCE\u5c08\u7528FORCE\u5c08\u7528 \u78b3\u7e96\u7dad\u6392\u6c23\u7ba1\u8b77\u7247\u5074\u908a\u8cbc\u7247\uff0c\u8d85\u5bc6\u5408\u6b3e\u65b0\u4e00\u4ee3\u78b3\u7e96\u7dad\u771f\u7a7a\u9ad8\u58d3\u6b3e\uff0c\u6b63\u5916\u92b7\u65e5\u672c\u54c1\u6b64\u70ba\u6700\u65b0\u88fd\u7a0b\uff0c100%\u958b\u6a21\u771f\u7a7a\u9ad8\u58d3\u6b3e\u5f0f100%\u958bCNC\u6a21\u5177\u88fd\u4f5c\uff0c\u63a1\u7528\u771f\u7a7a\u9ad8\u58d3\u88fd\u9020\u771f\u7a7a\u9ad8\u58d3..","price":2928}]')},62:function(e,t,a){e.exports=a(100)},67:function(e,t,a){},68:function(e,t,a){e.exports=a.p+"static/media/112101.3c03db6c.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/112102.96f26ad6.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/112103.aa9ad190.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/112104.f4318ac9.jpg"}},[[62,1,2]]]);
//# sourceMappingURL=main.6b6de6b9.chunk.js.map