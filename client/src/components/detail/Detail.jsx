import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getbyId, deleteNote, getCategoryById, editNotes } from '../../actions/index';

import './Detail.css';

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const noteDetails = useSelector((state) => state.note);
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(noteDetails.title);
  const [editedContent, setEditedContent] = useState(noteDetails.content);
  const [editedStatus, setEditedStatus] = useState(noteDetails.status);
  const [editedCategoryId, setEditedCategoryId] = useState(noteDetails.categoryId);
  const categories = useSelector((state) => state.categories)
  const handleDelete = () => {
    const noteId = noteDetails.id;
    dispatch(deleteNote(noteId));
    navigate('/');
  };

  const handleEditSubmit = () => {
    const editedData = {
      title: editedTitle,
      content: editedContent,
      status: editedStatus,
      categoryId: editedCategoryId,
    };

    dispatch(editNotes(noteDetails.id, editedData));

    setEditMode(false);
    navigate("/")
    alert("Note updated")
  };

  useEffect(() => {
    const categoryId = noteDetails.categoryId;
    dispatch(getCategoryById(categoryId));
  }, [dispatch, noteDetails.categoryId]);

  const category = useSelector((state) => state.category);

  return (
    <div class="conteiner">
      {editMode ? (
        <button class="submit" onClick={handleEditSubmit}>
          SUBMIT
        </button>
      ) : (
        <button class="edit" onClick={() => setEditMode(true)}>
          EDIT
        </button>
      )}

      <div class="info">
        <button class="deleteNote" onClick={handleDelete}>
          DELETE
        </button>
        <Link to="/">
          <button class="back"> X </button>
        </Link>
        <div class="titleDetail1">
          TITLE
          {editMode ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            <h5>{noteDetails.title}</h5>
          )}
        </div>
        <div class="titleDetail">
          CONTENT
          {editMode ? (
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            <h5>{noteDetails.content}</h5>
          )}
        </div>
        <div class="titleDetail">
          STATUS
          {editMode ? (
            <select
              value={editedStatus}
              onChange={(e) => setEditedStatus(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="archived">Archived</option>
            </select>
          ) : (
            <h5>{noteDetails.status}</h5>
          )}
        </div>
        <div class="titleDetail">
          CATEGORIES
          {editMode ? (
            <select>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          ) : (
            <h5>{category.name}</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
