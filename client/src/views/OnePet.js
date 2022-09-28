import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import {
  deletePetById,
  getPetById,
} from '../services/internalApiService';

export const OnePet = (props) => {
  const [pet, setPet] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPetById(id)
      .then((data) => {
        console.log(data);
        setPet(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (pet === null) {
    return null;
  }

  const handleDeleteClick = () => {
    deletePetById(id)
      .then((deletedpet) => {
        navigate('/pets');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { petName, type, description, skillOne, skillTwo, skillThree } =
    pet;

  return (
    <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
        <h1>PETTIFIER</h1>
      <h4>Details About {petName}</h4>
      <p>Breed: {type}</p>
      <p>Description: {description}</p>
      <p>Skills: {skillOne}</p>
      <p>{skillTwo}</p>
      <p>{skillThree}</p>



      <div className="mt-2">
        <button
          onClick={(e) => {
            handleDeleteClick();
          }}
          className="btn btn-sm btn-outline-danger mx-1"
        >
          Adopt {petName}
        </button>

        <Link
                to={`/pets/${id}/edit`}
                className="btn btn-sm btn-outline-warning mx-1"
              >
                Edit {petName}
              </Link>




      </div>
    </div>
  );
};

export default OnePet;