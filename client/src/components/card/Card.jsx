import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { toggleStatus } from '../../actions';
import "./Card.css"
import Detail from '../detail/Detail';


const Card = ({title, content, id, status}) => {
    const dispatch = useDispatch();
    const handleToggleClick = () => {
        dispatch(toggleStatus(id));};
     const [showDetail, setShowDetail] = useState(false);
    const [showCards, setCards] = useState(true)
     const handleShowDetail = () => {
      setShowDetail(!showDetail)
     }
     const handleCards = () => {
      setCards(!showCards)
     }
  return (
    <div class="card" onClick={handleShowDetail} >
      {showDetail && <Detail
        id= {id} 
      />}
        <button
        className={`toggle-button ${status === 'active' ? 'active' : 'archived'}`}
        onClick={handleToggleClick}
      ></button>
        <div class="title">
      <h2>{title}</h2>
      </div>
      <div class="content">
      <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
