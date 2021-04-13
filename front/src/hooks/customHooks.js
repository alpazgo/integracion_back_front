import { useState } from "react";
const useAddForm = (schema) => {
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = "/offers";
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        })
    };

    const handleInputChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    return { handleSubmit, handleInputChange };
};


export default useAddForm;