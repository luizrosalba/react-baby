import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { babyLinks } from '../util/baby-links'

// const Wrapper = (props) => {
// 	return (
// 		<Carousel 
// 		variant="dark"
// 		controls={true}
// 		fade={true}
// 		>
// 		{props.children}

// 		</Carousel>
// 	)
// }

// function CarouselItens(props) {
// 	return( 
// 		<Carousel.Item>
// 		<img
// 			className="d-block w-20"
// 			src= {babyLinks.links[0]}
// 			alt="First slide"
// 		/>
// 		<Carousel.Caption>
// 		<h5>Bebê 1</h5>
// 		</Carousel.Caption>
// 		</Carousel.Item>
// 	)
// }

// function CarouselComp(props) {
// 	const ListItens = ['1','2','3'].map((number) =>
// 		// <CarouselItens 
// 		// 	key={number.toString()}
// 		// 	value={number} />
// 		<div>{number}</div>
//   	);
//     return (
// 		// <Wrapper>
// 		// 	<ListItens />
// 		// </Wrapper>
// 		<ListItens />
//     )
// }



function ListItem(props) {
	// Correct! There is no need to specify the key here:
	return <li>{props.value}</li>;
  }
  
  function CarouselComp(props) {
	const numbers = babyLinks.links;
	const listItems = numbers.map((number, i) =>
	  // Correct! Key should be specified inside the array.
	  <ListItem key={i}
				value={number} />
	);
	return (
	  <ul>
		{listItems}
	  </ul>
	);
  }

export default CarouselComp;
  