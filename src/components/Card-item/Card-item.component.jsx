import React from "react";

// styles 
import "./Card-item.styles.css"; 


const CardItem = ({ card, cards, setCards }) => {
	const { title, imageUrl, isActive } = card; 
	
	const closeAllCards = () => {
		setCards(cards.forEach(card => 
			card.isActive = false))
	}

	const expandHandler = () => {
		setCards(cards.map(item => {
			closeAllCards(); 
			if (item.id === card.id) {
				return {...card, isActive:!card.isActive}
			}
			return item; 
		}))
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