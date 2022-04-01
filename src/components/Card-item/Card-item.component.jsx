import React from "react";

// styles 
import "./Card-item.styles.css"; 


const CardItem = ({ card, cards, setCards }) => {
	const { title, imageUrl, isActive } = card; 
	
	// this func is to allow cards to fold in order for only one card to expand at one time; 
	// const closeAllCards = () => {
	// 	setCards(cards.forEach(item => item.isActive = false)); 
	// }

	// const expandHandler = () => {
	// 	closeAllCards();
	// 	setCards(cards.map(item => {
	// 		if (item.id === card.id) {
	// 			return {...card, isActive:!card.isActive}
	// 		}
	// 		return item;
	// 	}))
	// }

	// The following function is another way of achieving the same functionality by chaining two map() methods; 
	const expandHandler = () => {
		setCards(cards
			.map(item => item && {...item, isActive: false})
			.map(item => item.id === card.id ? {...card, isActive: true} : item)
		)
	}


	return (
		<div
			onClick={expandHandler}
			className={`panel ${isActive ? 'active' : ''}`}
			style={{ backgroundImage: `url(${imageUrl})` }}>
			<h3>{title}</h3>
		</div>
	)
}

export default CardItem; 