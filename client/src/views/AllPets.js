import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  deletePetById,
  getAllPets,
} from '../services/internalApiService';

export const AllPets = (props) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getAllPets()
      .then((data) => {
        console.log(data);
        setPets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteClick = (idToDelete) => {
    deletePetById(idToDelete)
      .then((deletedPet) => {
        const filteredPets = pets.filter((pet) => {
          return pet._id !== idToDelete;
        });

        console.log('deletedPet:', deletedPet);
        setPets(filteredPets);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-50 mx-auto text-center">
      <h1>PETTIFIER</h1>
      <h3>These pets are looking for a good home</h3>


      {pets.map((pet) => {
        const { _id, petName, type, description, skillOne, skillTwo, skillThree} =
        pet;

        return (
          <div key={_id} className="shadow mb-4 rounded border p-4">
            <Link to={`/pets/${_id}`}>
              <h4>Name: {petName}</h4>
            </Link>
            <p>Breed: {type}</p>

            <div className="mt-2">
              <button
                onClick={(e) => {
                  handleDeleteClick(_id);
                }}
                className="btn btn-sm btn-outline-danger mx-1"
              >
                Adopt
              </button>

              <Link
                to={`/pets/${_id}/edit`}
                className="btn btn-sm btn-outline-warning mx-1"
              >
                Edit
              </Link>

              <Link
                to={`/pets/${_id}`}
                className="btn btn-sm btn-outline-warning mx-1"
              >
                Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllPets;