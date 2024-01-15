import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//components
import Cards from '../cards/Cards'
import Detail from '../detail/Detail';
import './Main.css'
//actions
import { getActives } from '../../actions/index';
// ...

const Main = () => {
      const dispatch = useDispatch();
      const allNotes = useSelector(state => state.actives);
      {console.log(allNotes);}
      useEffect(() => {
        dispatch(getActives());
      }, [dispatch]);
    
      return (
        <div>
          <button src="../../assets/menu.png" className='filtrs'>CATEGORIES</button>
          <button className='create'>CREATE</button>
          <div className='titlePage'>
            <h1>NOTE APP ♥</h1>
          </div>
          <div className='cards'>
            <Cards notes={allNotes} />
          </div>
        </div>
      );
    };
    
    export default Main;
    