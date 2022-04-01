import React, { useState, useEffect } from "react";
// components
import CardItem from "./Card-item/Card-item.component";
// styles
import './expanding-cards.styles.css'



const images = [
	{
		id: 1, 
		title: "Explore The World",
		imageUrl: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 
		isActive: false
	},
	{
		id: 2,
		title: "Wild Forest",
		imageUrl: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		isActive: false
	}, 
	{
		id: 3,
		title: "Sunny Beach",
		imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
		isActive: false
	}, 
	{
		id: 4,
		title: "City on Winter",
		imageUrl: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
		isActive: false
	}, 
	{
		id: 5,
		title: "Mountains - Clouds",
		imageUrl: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		isActive: false
	}
]


const ExpandingCards = () => {
	const [cards, setCards] = useState([]); 

	useEffect(() => {
		setCards(images); 
	}, [])



	return (
		<div className="container">
			{
				cards.map(card => {
					const {id} = card; 
					return (
						<CardItem key={id} card={card} cards={cards} setCards={setCards}/>
					)
				})
			}
		</div>
	)
}

export default ExpandingCards; 