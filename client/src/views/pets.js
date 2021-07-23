import React, { useEffect, useState } from 'react';
import { Link } from "@reach/router";
import axios from 'axios';

const Pets = (props) => {
    const [pets, setPets] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/pets/")
            .then((res) => {
                console.log(res);
                setPets(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);


    return <div className='w-50 mx-auto text-center'>
        <h3>These pets are looking for a good home!</h3>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>


                {pets.map((pet) => {
                    return (
                        <tr key={pet._id} className="shadow mb-4 rounded border p-4">
                            <td><h4>{pet.name}</h4></td>
                            <td><h4>{pet.type}</h4></td>
                            <td>
                                <Link to={/pets/ + pet._id}>details | </Link>

                                <Link to={"/pets/" + pet._id + "/edit"}>{" "}Edit</Link>
                            </td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
};

export default Pets;