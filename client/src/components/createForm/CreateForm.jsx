import React, { useEffect, useState } from "react";
import { postNote, getCategories } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

import "./Createform.css"

const CreateForm = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories)
    const [errors, setErrors] = useState({})
    
    const [input, setInput] = useState({
        title: "",
        content: "",
        categories: [],
        status: [],
    })

    function validate(intput) {
        let errors= {};
        if (!input.title){
            errors.name = "The title is mandatory"
        }else if (!input.content){
            errors.name = "Content is mandatory"
        }
        return errors
    }

    function handleSelect (e) {
        setInput({
            ...input,
            categories: [input.categories, e.target.value]
        })
    }

    function handleDelete(el){
        setInput
    }
    return (
        <div>


        </div>
    )

}



export default CreateForm