import React from 'react';
import "./Cards.css"
import Card from '../card/Card';
import { getbyId } from '../../actions';
const Cards = ({ notes, selectedCategory }) => {
  if (!notes || notes.length === 0) {
    return <div class="notFound">Let's write some notes!</div>;
  }
  const filteredNotes = selectedCategory === 'All'
    ? notes
    : notes.filter((note) => note.categoryId === selectedCategory);
  
  return (
    <ul className="cardsList">
      {notes.map((note) => (
        <li key={note.id} className="cardItem">
          <Card 
          title={note.title}
          content={note.content}
          id={note.id}
          status={note.status}
           />
        </li>
      ))}
    </ul>
  );
};
export default Cards;
