import React, { useEffect, useState } from "react";
import { postCategory, getCategories } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import "./CategoryForm.css";

const CategoryForm = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
    });

    function validate(input) {
        let errors = {};
        if (!input.name) {
            errors.name = "The category name is mandatory";
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
        const validationErrors = validate(input);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            dispatch(postCategory(input));
            alert("Category created");
            setInput({
                name: "",
            });
        }
        history('/');

    }

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div className="form">
            <h2>CREATE YOUR CATEGORY</h2>
            <div className="inputName">
                <h4> NAME</h4>
                <input
                    className="nameInput"
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <button className="submit" type="submit" onClick={handleSubmit}>
                SUBMIT
            </button>
        </div>
    );
};

export default CategoryForm;
