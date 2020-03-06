import React from "react"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {Carousel,CarouselCaption,CarouselItem,CarouselControl,CarouselIndicators } from "reactstrap";

import Logo5 from './pc6.jpg';
import Logo6 from './pc7.jpg';
import Logo7 from './pc8.jpg';
import Logo8 from './pc9.jpg';
import Logo9 from './pc10.jpg';
import Logo10 from './Chrysanthemum.jpg';
import Logo11 from './Chrysanthemum-bottle.jpg';
import { Item } from "react-grid-carousel";

//import {Form,Col,Row} from 'react-bootstrap/Form'

const items = [
	{
        src:Logo8 ,
        id:0,
		//altText: 'Slide 1',
		//caption: 'Slide 1'
	},
	{
        src: Logo9,
        id:1,
		//altText: 'Slide 2',
		//caption: 'Slide 2'
	},

];



class Test extends React.Component{
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


        
     

		const slides = items.map((item) => {
			return (
                
				<CarouselItem >
					
				
                    <a onClick={()=>this.scrollToAnchor(('screens')+item.id)}>
					<button type="button" id={Item.id}><img src={item.src} style={{maxWidth:"500px",maxHeight:"auto"}}   /></button>
                    </a>
					<CarouselCaption captionText={item.caption} captionHeader={item.caption} />
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






                <div>

        







        
          <hr style={{color:"red",height:"5"}}/>
         
          
        </div>
        
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
 
          <a id="screens0">中文名稱：	杭菊                                                    更多杭菊
‧英文名稱：	Florist's Daisy，Chrysanthemum Flower，Chrysanthemum
‧學   名：	Chrysanthemum x morifolium Ramat. (pro sp.)
Chrysanthemum morifolium Ramat.
Chrysanthemum morifolium
‧科   名：	菊科( Compositae)菊屬(Chrysanthemum)
‧別   名：	白菊花、滁菊花、亳菊、貢菊、懷菊花、菊花、杭菊花
‧原產地：	中國大陸，藥用菊花以河南、安徽、浙江栽培最多，品種多達二千種以上。
‧分布：	栽培。台灣主要產地為苗栗縣銅鑼鄉九湖村。
‧用   途：	1.觀賞用：可作切花用、盆花用或花壇布置用。2.食用：杭菊是「菊花茶」的主要原料，經烘焙後可作香料、藥用，自古以來沖泡菊花茶當養生保健飲料，經濟價值極高。3.藥用：性味：花：甘、苦、涼；葉：辛、甘、平。效用：花：疏風清熱，平肝明目，解毒消腫。治頭痛，眩暈，目赤，腫毒；葉：治疔瘡，頭風，目眩。散風清熱，平肝明目。用於治風熱感冒、頭痛眩暈、目赤腫痛、眼目昏花。
‧莖：	高 60~100 公分；莖直立，分枝或不分枝，被柔毛。
‧葉：	葉互生；有短柄；葉片卵形至披針形，長 5~15 公分，羽狀淺裂或半裂，基部楔形，下面被白色短柔毛。
‧花：	頭狀花序直徑約 2~3 公分，單個或數個集生於莖枝頂端；萼片內外兩層，每層 3 片，外層 3 片交疊於內層 3 片中間，共 6 片；總苞片多層，外層綠色，條形，邊緣膜質，外面被柔毛；舌狀花白色、紅色、紫色或黃色，大小總數約 270 片。花期 9~12 月。
‧果：	瘦果不發育。
‧特徵：	杭菊為多年生草本，高 60~100 公分；莖直立，分枝或不分枝，被柔毛。葉互生；有短柄；葉片卵形至披針形，長 5~15 公分，羽狀淺裂或半裂，基部楔形，下面被白色短柔毛。頭狀花序直徑約 2~3 公分，單個或數個集生於莖枝頂端；萼片內外兩層，每層 3 片，外層 3 片交疊於內層 3 片中間，共 6 片；總苞片多層，外層綠色，條形，邊緣膜質，外面被柔毛；舌狀花白色、紅色、紫色或黃色，大小總數約 270 片。瘦果不發育。花期 9~12 月。為栽培種，培育的品種極多，頭狀花序多變化，花色有白、黃。藥用菊花以河南、安徽、浙江栽培最多。
‧更多資料：	
http://plant.tesri.gov.tw/plant100/WebPlantDetail.aspx?tno=539026110 菊花
中國植物誌 第 76(1) 卷 035 頁 PDF 菊花(參考)
臺灣藥用植物資源名錄 行政院衛生署中醫藥委員會 編 菊 92年10月453頁

‧拍攝地點：	苗栗縣銅鑼鄉九湖村(961116)
</a>
<br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
<a id="screens1">	
‧英文名稱：	Florist's Daisy，Chrysanthemum Flower，Chrysanthemum
‧學   名：	Chrysanthemum x morifolium Ramat. (pro sp.)
Chrysanthemum morifolium Ramat.
Chrysanthemum morifolium
‧科   名：	菊科( Compositae)菊屬(Chrysanthemum)
‧別   名：	白菊花、滁菊花、亳菊、貢菊、懷菊花、菊花、杭菊花
‧原產地：	中國大陸，藥用菊花以河南、安徽、浙江栽培最多，品種多達二千種以上。
‧分布：	栽培。台灣主要產地為苗栗縣銅鑼鄉九湖村。
‧用   途：	1.觀賞用：可作切花用、盆花用或花壇布置用。2.食用：杭菊是「菊花茶」的主要原料，經烘焙後可作香料、藥用，自古以來沖泡菊花茶當養生保健飲料，經濟價值極高。3.藥用：性味：花：甘、苦、涼；葉：辛、甘、平。效用：花：疏風清熱，平肝明目，解毒消腫。治頭痛，眩暈，目赤，腫毒；葉：治疔瘡，頭風，目眩。散風清熱，平肝明目。用於治風熱感冒、頭痛眩暈、目赤腫痛、眼目昏花。
‧莖：	高 60~100 公分；莖直立，分枝或不分枝，被柔毛。
‧葉：	葉互生；有短柄；葉片卵形至披針形，長 5~15 公分，羽狀淺裂或半裂，基部楔形，下面被白色短柔毛。
‧花：	頭狀花序直徑約 2~3 公分，單個或數個集生於莖枝頂端；萼片內外兩層，每層 3 片，外層 3 片交疊於內層 3 片中間，共 6 片；總苞片多層，外層綠色，條形，邊緣膜質，外面被柔毛；舌狀花白色、紅色、紫色或黃色，大小總數約 270 片。花期 9~12 月。
‧果：	瘦果不發育。
‧特徵：	杭菊為多年生草本，高 60~100 公分；莖直立，分枝或不分枝，被柔毛。葉互生；有短柄；葉片卵形至披針形，長 5~15 公分，羽狀淺裂或半裂，基部楔形，下面被白色短柔毛。頭狀花序直徑約 2~3 公分，單個或數個集生於莖枝頂端；萼片內外兩層，每層 3 片，外層 3 片交疊於內層 3 片中間，共 6 片；總苞片多層，外層綠色，條形，邊緣膜質，外面被柔毛；舌狀花白色、紅色、紫色或黃色，大小總數約 270 片。瘦果不發育。花期 9~12 月。為栽培種，培育的品種極多，頭狀花序多變化，花色有白、黃。藥用菊花以河南、安徽、浙江栽培最多。
‧更多資料：	
http://plant.tesri.gov.tw/plant100/WebPlantDetail.aspx?tno=539026110 菊花
中國植物誌 第 76(1) 卷 035 頁 PDF 菊花(參考)
臺灣藥用植物資源名錄 行政院衛生署中醫藥委員會 編 菊 92年10月453頁

‧拍攝地點：	苗栗縣銅鑼鄉九湖村(961116)
            </a>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
<a id="screens1">	
‧英文名稱：	Florist's Daisy，Chrysanthemum Flower，Chrysanthemum
‧學   名：	Chrysanthemum x morifolium Ramat. (pro sp.)
Chrysanthemum morifolium Ramat.
Chrysanthemum morifolium
‧科   名：	菊科( Compositae)菊屬(Chrysanthemum)
‧別   名：	白菊花、滁菊花、亳菊、貢菊、懷菊花、菊花、杭菊花
‧原產地：	中國大陸，藥用菊花以河南、安徽、浙江栽培最多，品種多達二千種以上。
‧分布：	栽培。台灣主要產地為苗栗縣銅鑼鄉九湖村。
‧用   途：	1.觀賞用：可作切花用、盆花用或花壇布置用。2.食用：杭菊是「菊花茶」的主要原料，經烘焙後可作香料、藥用，自古以來沖泡菊花茶當養生保健飲料，經濟價值極高。3.藥用：性味：花：甘、苦、涼；葉：辛、甘、平。效用：花：疏風清熱，平肝明目，解毒消腫。治頭痛，眩暈，目赤，腫毒；葉：治疔瘡，頭風，目眩。散風清熱，平肝明目。用於治風熱感冒、頭痛眩暈、目赤腫痛、眼目昏花。
‧莖：	高 60~100 公分；莖直立，分枝或不分枝，被柔毛。
‧葉：	葉互生；有短柄；葉片卵形至披針形，長 5~15 公分，羽狀淺裂或半裂，基部楔形，下面被白色短柔毛。
‧花：	頭狀花序直徑約 2~3 公分，單個或數個集生於莖枝頂端；萼片內外兩層，每層 3 片，外層 3 片交疊於內層 3 片中間，共 6 片；總苞片多層，外層綠色，條形，邊緣膜質，外面被柔毛；舌狀花白色、紅色、紫色或黃色，大小總數約 270 片。花期 9~12 月。
‧果：	瘦果不發育。
‧特徵：	杭菊為多年生草本，高 60~100 公分；莖直立，分枝或不分枝，被柔毛。葉互生；有短柄；葉片卵形至披針形，長 5~15 公分，羽狀淺裂或半裂，基部楔形，下面被白色短柔毛。頭狀花序直徑約 2~3 公分，單個或數個集生於莖枝頂端；萼片內外兩層，每層 3 片，外層 3 片交疊於內層 3 片中間，共 6 片；總苞片多層，外層綠色，條形，邊緣膜質，外面被柔毛；舌狀花白色、紅色、紫色或黃色，大小總數約 270 片。瘦果不發育。花期 9~12 月。為栽培種，培育的品種極多，頭狀花序多變化，花色有白、黃。藥用菊花以河南、安徽、浙江栽培最多。
‧更多資料：	
http://plant.tesri.gov.tw/plant100/WebPlantDetail.aspx?tno=539026110 菊花
中國植物誌 第 76(1) 卷 035 頁 PDF 菊花(參考)
臺灣藥用植物資源名錄 行政院衛生署中醫藥委員會 編 菊 92年10月453頁

‧拍攝地點：	苗栗縣銅鑼鄉九湖村(961116)
            </a>

            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
<a id="screens4">	
‧英文名稱：	Florist's Daisy，Chrysanthemum Flower，Chrysanthemum
‧學   名：	Chrysanthemum x morifolium Ramat. (pro sp.)
Chrysanthemum morifolium Ramat.
Chrysanthemum morifolium
‧科   名：	菊科( Compositae)菊屬(Chrysanthemum)
‧別   名：	白菊花、滁菊花、亳菊、貢菊、懷菊花、菊花、杭菊花
‧原產地：	中國大陸，藥用菊花以河南、安徽、浙江栽培最多，品種多達二千種以上。
‧分布：	栽培。台灣主要產地為苗栗縣銅鑼鄉九湖村。
‧用   途：	1.觀賞用：可作切花用、盆花用或花壇布置用。2.食用：杭菊是「菊花茶」的主要原料，經烘焙後可作香料、藥用，自古以來沖泡菊花茶當養生保健飲料，經濟價值極高。3.藥用：性味：花：甘、苦、涼；葉：辛、甘、平。效用：花：疏風清熱，平肝明目，解毒消腫。治頭痛，眩暈，目赤，腫毒；葉：治疔瘡，頭風，目眩。散風清熱，平肝明目。用於治風熱感冒、頭痛眩暈、目赤腫痛、眼目昏花。
‧莖：	高 60~100 公分；莖直立，分枝或不分枝，被柔毛。
‧葉：	葉互生；有短柄；葉片卵形至披針形，長 5~15 公分，羽狀淺裂或半裂，基部楔形，下面被白色短柔毛。
‧花：	頭狀花序直徑約 2~3 公分，單個或數個集生於莖枝頂端；萼片內外兩層，每層 3 片，外層 3 片交疊於內層 3 片中間，共 6 片；總苞片多層，外層綠色，條形，邊緣膜質，外面被柔毛；舌狀花白色、紅色、紫色或黃色，大小總數約 270 片。花期 9~12 月。
‧果：	瘦果不發育。
‧特徵：	杭菊為多年生草本，高 60~100 公分；莖直立，分枝或不分枝，被柔毛。葉互生；有短柄；葉片卵形至披針形，長 5~15 公分，羽狀淺裂或半裂，基部楔形，下面被白色短柔毛。頭狀花序直徑約 2~3 公分，單個或數個集生於莖枝頂端；萼片內外兩層，每層 3 片，外層 3 片交疊於內層 3 片中間，共 6 片；總苞片多層，外層綠色，條形，邊緣膜質，外面被柔毛；舌狀花白色、紅色、紫色或黃色，大小總數約 270 片。瘦果不發育。花期 9~12 月。為栽培種，培育的品種極多，頭狀花序多變化，花色有白、黃。藥用菊花以河南、安徽、浙江栽培最多。
‧更多資料：	
http://plant.tesri.gov.tw/plant100/WebPlantDetail.aspx?tno=539026110 菊花
中國植物誌 第 76(1) 卷 035 頁 PDF 菊花(參考)
臺灣藥用植物資源名錄 行政院衛生署中醫藥委員會 編 菊 92年10月453頁

‧拍攝地點：	苗栗縣銅鑼鄉九湖村(961116)
            </a>
            </div>
		);
	}
}

export {Test}