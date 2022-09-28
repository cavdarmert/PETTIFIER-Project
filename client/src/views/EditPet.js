import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import {
  getPetById,
  updatePetById,
} from '../services/internalApiService';

export const EditPet = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [petName, setPetName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [skillOne, setSkillOne] = useState('');
  const [skillTwo, setSkillTwo] = useState('');
  const [skillThree, setSkillThree] = useState('');


  const [errors, setErrors] = useState(null);

  useEffect(() => {
    getPetById(id)
      .then((data) => {
        setPetName(data.petName);
        setType(data.type);
        setDescription(data.description);
        setSkillOne(data.skillOne);
        setSkillTwo(data.skillTwo);
        setSkillThree(data.skillThree);

      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEditPetSubmit = (event) => {
    event.preventDefault();

    const editedPet = {
      petName: petName,
      type,
      description,
      skillOne,
      skillTwo,
      skillThree,
    };

    updatePetById(id, editedPet)
      .then((updatedPet) => {
        console.log('updatedPet:', updatedPet);
        navigate(`/pets/${id}`);
        // AFTER EDIT BUTTON, use below if want to go to main page
        // navigate(`/pets`);

      })
      .catch((error) => {
        console.log(error);
        setErrors(error?.response?.data?.errors);
      });
  };

  return (
    
    <div className="w-50 p-4 rounded mx-auto shadow">
      <h1>PETTIFIER</h1>
      <h3>Edit {petName}</h3>
      <form onSubmit={(e) => handleEditPetSubmit(e)}>
        <div className="form-group">
          <label className="h6">Pet Name:</label>
          {errors?.petName && (
            <span style={{ color: 'red' }}> 
            {' '}
            {errors?.petName?.message}
            </span>
          )}
          <input
            onChange={(event) => {
              setPetName(event.target.value);
            }}
            type="text"
            className="form-control"
            value={petName}
          />
        </div>

        <div className="form-group">
          <label className="h6">Breed:</label>
          {errors?.type && (
            <span style={{ color: 'red' }}>
              {' '}
              {errors?.type?.message}
            </span>
          )}
          <input
            onChange={(event) => {
              setType(event.target.value);
            }}
            type="text"
            className="form-control"
            value={type}
          />
        </div>

        <div className="form-group">
          <label className="h6">Description:</label>
          {errors?.description && (
            <span style={{ color: 'red' }}>
              {' '}
              {errors?.description?.message}
            </span>
          )}
          <input
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            type="text"
            className="form-control"
            value={description}
          />
        </div>

        <div className="form-group">
          <label className="h6">Skill 1:</label>
          {errors?.skillOne && (
            <span style={{ color: 'red' }}>
              {' '}
              {errors?.skillOne?.message}
            </span>
          )}
          <input
            onChange={(event) => {
              setSkillOne(event.target.value);
            }}
            type="text"
            className="form-control"
            value={skillOne}
          />
        </div>

        <div className="form-group">
          <label className="h6">Skill 2:</label>
          {errors?.skillTwo && (
            <span style={{ color: 'red' }}>
              {' '}
              {errors?.skillTwo?.message}
            </span>
          )}
          <input
            onChange={(event) => {
              setSkillTwo(event.target.value);
            }}
            type="text"
            className="form-control"
            value={skillTwo}
          />
        </div>

        <div className="form-group">
          <label className="h6">Skill 3:</label>
          {errors?.skillThree && (
            <span style={{ color: 'red' }}>
              {' '}
              {errors?.skillThree?.message}
            </span>
          )}
          <input
            onChange={(event) => {
              setSkillThree(event.target.value);
            }}
            type="text"
            className="form-control"
            value={skillThree}
          />
        </div>

        <button className="btn btn-sm btn-outline-success">Edit </button>
        <Link
                to={`/pets`}
                // AFTER CANCEL on EDIT PAGE, To navigate showOne page use below
                // to={`/pets/${id}`}
                className="btn btn-sm btn-outline-warning mx-1"
              >
                Cancel
              </Link>
      </form>
    </div>
  );
};

export default EditPet;