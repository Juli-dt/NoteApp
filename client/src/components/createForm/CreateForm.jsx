import React, { useEffect, useState } from "react";
import { postNote, getCategories } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Createform.css";

const CreateForm = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    title: "",
    content: "",
    categoryId: "",
    
  });
  function handleSelect(e) {
    setInput({
      ...input,
      categoryId: e.target.value,
    });
  }
  
  function validate(input) {
    let errors = {};
    if (!input.title) {
      errors.title = "The title is mandatory";
    } else if (!input.content) {
      errors.content = "Content is mandatory";
    } 
    return errors;
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("Submitting with input:", input); 
      dispatch(postNote(input));
      alert("Note created");
      setInput({
        title: "",
        content: "",
        category: "",
      });
      navigate("/")
    } else {
      alert("Please fix the errors before submitting");
    }
  }
  

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="form">
      <h2>CREATE YOUR NOTES</h2>
      <div className="title">
        <h4>TITLE</h4>
        <input
          className="titleInput"
          type="text"
          name="title"
          value={input.title}
          onChange={handleChange}
        />
        {errors.title && <p className="error">{errors.title}</p>}
      </div>
      <div className="contentForm">
        <h4> CONTENT </h4>
        <input
          className="contentInput"
          type="text"
          name="content"
          value={input.content}
          onChange={handleChange}
        />
        {errors.content && <p className="error">{errors.content}</p>}
      </div>
      <div className="categoriesForm">
        <h4> SELECT CATEGORY </h4>
        <select
          className="categorySelector"
          name="category"
          onChange={handleSelect}
          value={input.categoryId}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && <p className="error">{errors.category}</p>}
      </div>

      <button className="submit" type="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default CreateForm;
