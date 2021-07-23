import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditPet = (props) => {


    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills1, setSkills1] = useState("");
    const [skills2, setSkills2] = useState("");
    const [skills3, setSkills3] = useState("");
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/pets/" + props.id)
            .then((res) => {
                console.log(res);
                setName(res.data.name)
                setType(res.data.type)
                setDescription(res.data.description)
                setSkills1(res.data.skills1)
                setSkills2(res.data.skills2)
                setSkills3(res.data.skills3)
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response?.data?.errors);
            })
    }, [props._id]);

    if (name === null) {
        return "...Loading"
    }


    const handleEditPetSubmit = (e) => {
        e.preventDefault();

        const updatedPet = {
            name: name,
            type: type,
            description: description,
            skills1,
            skills2,
            skills3
        };

        axios.put(`http://localhost:5000/api/pets/edit/${props.id}`, updatedPet)
            .then((res) => {
                console.log(res);
                navigate("/pets/" + props.id);
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response?.data?.errors);
            })
    }

    return <div className="w-50 p-4 rounded mx-auto shadow">
        <h3 className="text-center">Edit: {name}</h3>

        <form onSubmit={(e) => {
            handleEditPetSubmit(e);
        }}>

            <div className="form-group">
                <label className="h6">Name</label>
                {
                    errors?.name && <span style={{ color: "red" }}>{errors.name.message}</span>
                }
                <input
                    onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" className="form-control" value={name} />
            </div>

            <div className="form-group">
                <label className="h6">Type: </label>
                {
                    errors?.type && <span style={{ color: "red" }}>{errors.type.message}</span>
                }
                <input
                    onChange={(e) => {
                        setType(e.target.value)
                    }} type="text" className="form-control" value={type} />
            </div>

            <div className="form-group">
                <label className="h6">Description</label>
                {
                    errors?.description && <span style={{ color: "red" }}>{errors.description.message}</span>
                }
                <input
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }} type="text" className="form-control" value={description} />
            </div>
            <div className="form-group">
                <label className="h6">Skill 1: </label>
                <input
                    onChange={(e) => {
                        setSkills1(e.target.value)
                    }} type="text" className="form-control" value={skills1} />
            </div>
            <div className="form-group">
                <label className="h6">Skill 2: </label>
                <input
                    onChange={(e) => {
                        setSkills2(e.target.value)
                    }} type="text" className="form-control" value={skills2} />
            </div>
            <div className="form-group">
                <label className="h6">Skill 3: </label>
                <input
                    onChange={(e) => {
                        setSkills3(e.target.value)
                    }} type="text" className="form-control" value={skills3} />
            </div>
            <button className="btn btn-sm btn-outline-success">Edit Pet</button>
        </form>
    </div >
};

export default EditPet;