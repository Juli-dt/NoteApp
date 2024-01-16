import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleStatus } from '../../actions';
import "./Card.css"
import Detail from '../detail/Detail';
import { getbyId } from '../../actions';

const Card = ({title, content, id, status}) => {
    const dispatch = useDispatch();
    const history = useNavigate();

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
     const handleClick = async () => {
      const noteDetails = await dispatch(getbyId(id));
      history("/detail");
    };
  return (
    <div class="card" >
      {showDetail && <Detail
        id= {id} 
      />}
        <button
       className={`toggle-button ${status === 'active' ? 'active' : 'archived'}`}
        onClick={handleToggleClick}
      ></button>
        <div class="titleCard"  onClick={handleClick}>
      <h2>{title}</h2>
      </div>
      <div class="content">
      <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
