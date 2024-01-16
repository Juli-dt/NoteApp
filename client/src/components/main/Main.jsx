import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cards from '../cards/Cards';
import Detail from '../detail/Detail';
import './Main.css';
import { getActives, getArchived, getCategories } from '../../actions/index';

const Main = () => {
  const dispatch = useDispatch();
  const [currentView, setCurrentView] = useState('ACTIVES');
  const [selectedCategory, setSelectedCategory] = useState('ALL'); // Por defecto, muestra todas las categorías
  const archived = useSelector((state) => state.archived);
  const actives = useSelector((state) => state.actives);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getActives());
    dispatch(getCategories());
  }, [dispatch]);

  const handleViewChange = (view) => {
    setCurrentView(view);
    if (view === 'ACTIVES') {
      dispatch(getActives());
    } else if (view === 'ARCHIVED') {
      dispatch(getArchived());
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredActives = actives.filter((note) => {
    // Filtra por categoría si la categoría seleccionada no es 'ALL'
    return selectedCategory === 'ALL' || note.categoryId === selectedCategory;
  });

  const filteredArchived = archived.filter((note) => {
    // Filtra por categoría si la categoría seleccionada no es 'ALL'
    return selectedCategory === 'ALL' || note.categoryId === selectedCategory;
  });

  return (
    <div>
      <select
        className="filtrs"
        onChange={(e) => handleCategoryChange(e.target.value)}
        value={selectedCategory}
      >
        <option value="ALL">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <Link to="/create">
        <button className="create">CREATE</button>
      </Link>
      <div className="titlePage">
        <h1>NOTE APP </h1>
      <Link to="/createCategory">
        <button className='categorybutton'>CREATE CATEGORY</button>
      </Link>
        <div className="viewButtons">
          <button
            onClick={() => handleViewChange('ACTIVES')}
            className={currentView === 'ACTIVES' ? 'activeView' : ''}
          >
            ACTIVES
          </button>
          <button
            onClick={() => handleViewChange('ARCHIVED')}
            className={currentView === 'ARCHIVED' ? 'activeView' : ''}
          >
            ARCHIVED
          </button>
        </div>
      </div>
      <div className="cards">
        <Cards notes={currentView === 'ACTIVES' ? filteredActives : filteredArchived} />
      </div>
    </div>
  );
};

export default Main;
