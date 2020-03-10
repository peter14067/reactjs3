import React from "react"

import {Carousel,CarouselCaption,CarouselItem,CarouselControl,CarouselIndicators } from "reactstrap";
import Logo1 from './pc1.jpg';
import Logo3 from './pc3.jpg'
// import Logo5 from './pc6.jpg';
// import Logo6 from './pc7.jpg';
// import Logo7 from './pc8.jpg';
// import Logo8 from './pc9.jpg';
// import Logo9 from './pc10.jpg';
// import Logo10 from './Chrysanthemum.jpg';
import Pc3 from './Chrysanthemumflower.jpg';
import Tea from './Tea.png';
import Tea1 from './Tea1.png';
import Tea2 from './Tea2.png';
import Tea3 from './Tea3.png';
import Pt1 from './Pt1.png';
import Pt2 from './123.jpg';
import Pt3 from './Pt3.png';
import Logo11 from './Chrysanthemum-bottle.jpg';
import { Item } from "react-grid-carousel";
import  './test.css'; 
//import  './index4.css'; 
//import {Form,Col,Row} from 'react-bootstrap/Form'

const items = [
	{
        src:Logo1 ,
        id:0,
		altText: '檀香',
		caption: '檀香'
	},
	{
        src: Logo3,
        id:1,
		altText: '金新木薑子',
		caption: '金新木薑子'
	},
	{
        src:Pc3,
        id:2,
		altText: '杭菊',
		caption: '杭菊'
	},

];



class Product1 extends React.Component{
    constructor(props){
        super(props);
        this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);

    }




	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

   


//函数定义
scrollToAnchor = (anchorName) => {
    if (anchorName) {
      
        let anchorElement = document.getElementById(anchorName);
      
        if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
    }
}


    render(){
        const { activeIndex } = this.state;

/*
        <img src={item.src} style={{maxWidth:"100%",height:"auto"}}   />
        <button type="button" style={{width:"100%"}}></button>
     */

		const slides = items.map((item) => {
			return (
				
				
				
				<CarouselItem >
			
					
					<a onClick={()=>this.scrollToAnchor(('screens')+item.id)}>
                  
					<img src={item.src} style={{maxWidth:"100%",height:"auto"}}    />
					</a>
			<div class="carousel-caption " style={{display:"block"}}>{item.altText}</div>
                
				</CarouselItem>

                
			);
		});

		return (
			<div  >
				
				<Carousel 
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
				>
					<CarouselIndicators  items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
					{slides}
					<CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
					<CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
				</Carousel>






                

        







        
          <hr style={{color:"red",height:"5"}}/>
         
          
     
        
   
		
          <a id="screens0">
			  </a>
		  <div style={{marginTop:"10vh"}}>
		  <img src={Logo1} style={{maxWidth:"50%",height:"auto"}}   />
		<h1>檀香</h1>
		  （一）檀香的心理功效

久聞檀香放鬆效果絕佳，可安撫神經緊張及焦慮，鎮靜的效果多於振奮。在用於改善執迷狀態上，極獲好評。給人祥和、平靜的感覺。<br></br><br></br>

（二）檀香的生理功效

（1）對生殖泌尿系統極有幫助，可改善膀胱炎，用來按摩於腎臟部位，有清血抗炎的功效。

（2）它催情的特性，可改善性方面的困擾，如性冷感和性無能。

（3）當粘膜發炎時，檀香能讓患者感覺舒服，幫助入眠。可刺激免疫系統，預防細菌感染。

（4）對過敏性皮膚有預防作用，對干性濕疹及老化缺水的皮膚特別有益。使皮膚柔軟，改善皮膚發癢或發炎的現象。

（5）久用檀香香製品能助於睡眠。<br></br><br></br>

（三）檀香的美容功效

檀香精油適合老化、缺水及乾燥的肌膚，能促進肌膚新陳代謝，加快肌膚細胞的更新生長，並能加速傷口與疤痕的修復與癒合，幫助修護受損的肌膚細胞，同時，還具有良好的抗菌作用，可以改善肌膚發炎、發癢的狀況，消炎祛痘。所以,可以自制檀香面膜改善自己的肌膚。
</div>

<a id="screens1">
			  </a>
		  <div style={{marginTop:"10vh"}}>
			  <img></img>
		<h1>金新木薑子</h1>
		<p style={{color:"blue"}}>(觀賞用)</p>



		佛光樹又名七寶樹，學名則是丹山新木薑子，也有人稱之為金新木薑子，由於它的嫩梢枝葉披上金黃色的絨毛，在太陽光及月光下均能發光，故名佛光樹。
		<br></br><br></br>
		<p style={{color:"blue"}}>照顧方式</p>

 日照:適合全日照且溫暖環境
 
  <br></br>
 
 澆水:土乾澆水
 
  
 <br></br>
 介質:土質排水良好的微酸性、中性、弱鹽鹹土都可以
 
 <br></br>
 
 繁殖:繁殖採用播種法或扦插法，要扦插繁殖時，應慎選新葉毛色亮麗的個體。
</div>
       

<a id="screens2">
			  </a>
		  <div style={{marginTop:"10vh"}}>
		  <img src={Pc3} style={{maxWidth:"50%",height:"auto"}}   />
		<h1>杭菊</h1>

			<br></br>
			<br></br>


			<h2 style={{color:"green"}}>杭菊製造簡介</h2>
			<br></br>
			<h3>杭菊加工流程如下：</h3>

		
<div style={{float:"left",width:"100%"}}>
			<h3 style={{fontStyle:"bold"}}>一、採收</h3>
			<br></br>

		
<p style={{maxWidth:"100%",float:"left"}}>杭菊於白露前後（約9月初）開始花芽分化，至10月初
花蕾產生11月開始開花，在11月中旬到12月中下旬，待花序之舌狀花展開7-8分時採摘，一般可分3-4次採收
。由於花芽分化的時間不同，所以成熟期不一致，故均以人工採花。採收時應選在晴天，且立即運送至工廠
乾燥，下雨時不可採收，避免花朵含水量過高，影響乾燥品質。
</p>


</div>

<div>
<h3 style={{fontStyle:"bold"}}>二、萎凋</h3>
<br></br>

當無法立即烘乾時，需將鮮花平鋪至萎凋架上，使其均勻失水，萎凋時間儘量愈短愈好，
至多2天，否則花朵品質易受影響。



</div>
<br></br>
<div>
<h3 style={{fontStyle:"bold"}}>三、乾燥</h3>
<img src={Pt2} style={{maxWidth:"100%",height:"auto"}}   />
<p style={{width:"100%"}}>

鮮花採摘後需進行乾燥，一般裝於網袋運送至烘乾場，鋪平在木製烘盤中，一層層堆壘於推車後置入乾燥室，進花初期約30℃，之後逐漸升溫，出花時溫度約達100℃，總共需16-30小時。另外亦可以循環式烘箱50-60℃脫水烘乾12小時。通常10公斤的鮮花可烘成1公斤的乾花，1分地產量高低差距頗大，高者一分地約可生產120公斤乾花。
</p>


</div>


<div >
<h3 style={{fontStyle:"bold"}}>四、包裝</h3>

<p style={{maxWidth:"80%"}}>
當花朵乾燥至含水量7%以下時，即可取出包裝，一般以透明塑膠袋密封，包裝時應加入乾燥劑，減少受潮的機率。
123

</p>


</div>
<div>
<h3 style={{fontStyle:"bold"}}>五、儲存</h3>

密封之包裝應存放在低濕乾燥的環境，避免日光曝曬變質

</div>
		
			<br></br>
			<br></br>
			<br></br>

			<h2 style={{color:"green"}}>杭菊多元化產品</h2>

		　杭菊可與多種飲料搭配沖泡，其風味各有不同，以下提供幾種簡單配法，沖泡時可依個人口味調整。喜歡清香淡雅口味的人，可將杭菊搭配綠茶、包種茶或烏龍茶一起沖泡，偏好濃郁甘潤口感的，則可混搭潽洱茶、紅烏龍或紅茶，當然也可以來些特別口味，例如將杭菊加至咖啡粉中，用手沖的方式泡出杭菊咖啡，來杯不一樣的咖啡。杭菊百搭，大家不妨多多嘗試，找出自己喜好的風味吧！
			<br></br>
		<img src={Tea} style={{maxWidth:"25%",height:"auto"}}   />
		<img src={Tea1} style={{maxWidth:"25%",height:"auto"}}   />
		<img src={Tea2} style={{maxWidth:"25%",height:"auto"}}   />
		<img src={Tea3} style={{maxWidth:"25%",height:"auto"}}   />


</div>



            </div>
		);
	}
}

export {Product1}