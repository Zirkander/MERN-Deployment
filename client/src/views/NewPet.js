import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const NewPet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills1, setSkills1] = useState("");
    const [skills2, setSkills2] = useState("");
    const [skills3, setSkills3] = useState("");
    const [errors, setErrors] = useState([]);

    const handleNewPetSubmit = (e) => {
        e.preventDefault();



        const newPet = {
            name: name,
            type: type,
            description: description,
            skills1: skills1,
            skills2: skills2,
            skills3: skills3
        };

        axios.post("http://localhost:5000/api/pets/", newPet)
            .then((res) => {
                console.log(res);
                navigate("/pets/");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response?.data?.errors);
            })
    }

    return <div className="w-50 p-4 rounded mx-auto shadow">
        <h3 className="text-right">Know a pet needing a home?</h3>

        <form onSubmit={(e) => {
            handleNewPetSubmit(e);
        }}>

            <div className="form-group">
                <label className="h6">Name</label>
                {
                    errors?.name && (<span style={{ color: "red" }}>{errors.name.message}</span>
                    )}
                <input
                    onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label className="h6">Type</label>
                {
                    errors?.type && <span style={{ color: "red" }}>{errors.type.message}</span>
                }
                <input
                    onChange={(e) => {
                        setType(e.target.value)
                    }} type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label className="h6">Description</label>
                {
                    errors?.description && <span style={{ color: "red" }}>{errors.description.message}</span>
                }
                <input
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }} type="text" className="form-control" />
            </div><hr /> <span style={{ color: "red" }}>Skills are optional</span>
            <div className="form-group">
                <label className="h6">Skills 1</label>
                <input
                    onChange={(e) => {
                        setSkills1(e.target.value)
                    }} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="h6">Skills 2</label>
                <input
                    onChange={(e) => {
                        setSkills2(e.target.value)
                    }} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="h6">Skills 3</label>
                <input
                    onChange={(e) => {
                        setSkills3(e.target.value)
                    }} type="text" className="form-control" />
            </div>
            <button className="btn btn-sm btn-outline-success">Add Pet</button>

        </form>
    </div >
};

export default NewPet;