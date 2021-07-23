import { useEffect, useState } from 'react';
import axios from "axios";
import { Link, navigate } from "@reach/router";




const Pet = (props) => {
    const [pet, setPet] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/pets/" + props._id)
            .then((res) => {
                console.log(res);
                setPet(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, [props._id]);

    if (pet === null) {
        return "...Loading"
    }


    //Copy the handleDelete from Pets, remove the filter and add navigate.
    const handleDelete = (id) => {
        axios
            .delete("http://localhost:5000/api/pets/" + id)
            .then((res) => {
                console.log(res);
                navigate("/pets");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return <div className="w-100 mx-auto shadow mb-4 rounded border p-4 text-center">
        <h3>Details about: {pet.name}</h3>
        <Link to={/pets/ + pet._id + /edit/}><h4>{pet.name}</h4 ></Link>
        {/* <h4>{pet.pet}</h4> */}
        <h4>Pet Type: {pet.type}</h4>
        <h4>Description: {pet.description}</h4>
        <h4>Skills: {pet.skills1}</h4><h4>{pet.skills2}</h4><h4>{pet.skills3}</h4>
        <button onClick={(e) => {
            handleDelete(pet._id);
        }} className="btn btn-sm btn-outline-danger" style={{ backgroundColor: "red", color: "white" }}>Adopt {pet.name}</button>
    </div >
};

export default Pet;