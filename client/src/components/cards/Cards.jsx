import React from 'react';
import "./Cards.css"
import Card from '../card/Card';

const Cards = ({ notes }) => {
  if (!notes || notes.length === 0) {
    return <div class="notFound">Let's write some notes!</div>;
  }

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
// 