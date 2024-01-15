import React, { useEffect } from 'react';
import { getbyId } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';

import "./Detail.css"
const Detail = ({id}) => {
    const dispatch = useDispatch();
      const note = useSelector(state => state.note);

      useEffect(() => {
        dispatch(getbyId(id));
      }, [dispatch]);
    return(
        <div calss="conteiner">
            <div class0="note">
            <div class="title">
            {note.title}
            </div>
            <div class="content">
                {note.content}
            </div>
            </div>
        </div>
    )
}


export default Detail;