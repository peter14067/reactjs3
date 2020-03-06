import React from "react"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {Carousel,CarouselCaption,CarouselItem,CarouselControl,CarouselIndicators } from "reactstrap";

import Logo5 from './pc6.jpg';
import Logo6 from './pc7.jpg';
import Logo7 from './pc8.jpg';
import Logo8 from './pc9.jpg';
import Logo9 from './pc10.jpg';


//import {Form,Col,Row} from 'react-bootstrap/Form'

const items = [
	{
		src:Logo7 ,
		altText: 'Slide 1',
		caption: 'Slide 1'
	},
	{
		src: Logo8,
		altText: 'Slide 2',
		caption: 'Slide 2'
	},
	{
		src: Logo9,
		altText: 'Slide 3',
		caption: 'Slide 3'
	}
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

   



    render(){
        const { activeIndex } = this.state;

		const slides = items.map((item) => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
				>
					<img src={item.src} alt={item.altText} />
					<CarouselCaption captionText={item.caption} captionHeader={item.caption} />
				</CarouselItem>
			);
		});

		return (
			<div style={{width:"100%"}}>
				
				<Carousel
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
				>
					<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
					{slides}
					<CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
					<CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
				</Carousel>
			</div>
		);
	}
}

export {Test}