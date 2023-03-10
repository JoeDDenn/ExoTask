
import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

/**
 * Your Component
 */
export default function Card({ text="hello" }) {
    const [cards, setCards] = useState([]);

    function handleOnDrag(e, id) {
        e.dataTransfer.setData("id", id);
    }

    function handleOnDrop(e) {
        const id = e.dataTransfer.getData("id");
        const card = cards.find((c) => c.id === id);
        card.status = e.target.id;
        setCards([...cards]);
    }

    function handleOnDragOver(e) {
        e.preventDefault();
    }



  return (
    <div draggable onDragStart={(e)=>handleOnDrag(e, "card")}>
      {text}
    </div>
  )
}