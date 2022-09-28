import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { createPet } from '../services/internalApiService';

export const NewPet = (props) => {
  const navigate = useNavigate();

  const [petName, setPetName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [skillOne, setSkillOne] = useState('');
  const [skillTwo, setSkillTwo] = useState('');
  const [skillThree, setSkillThree] = useState('');

  const [errors, setErrors] = useState(null);

  const handleNewPetSubmit = (event) => {
    event.preventDefault();

    const newPet = {
      petName: petName,
      type,
      description,
      skillOne,
      skillTwo,
      skillThree,
    };

    createPet(newPet)
      .then((data) => {
        console.log('new pet data:', data);
        navigate('/pets');
        // To navigate somewhere else, use below
        // navigate(`/pets/${data._id}`);

      })
      .catch((error) => {
        console.log(error);
        setErrors(error?.response?.data?.errors);
      });
  };

  return (
    <div>
      <h1>PETTIFIER</h1>
      <h4>Know a pet needing home?</h4>
    
    <div className="w-50 p-4 rounded mx-auto shadow">
      <form onSubmit={(e) => handleNewPetSubmit(e)}>
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
          />
        </div>

        <button className="btn btn-sm btn-outline-success">Add Pet</button>
        <Link
                to={`/pets`}
                className="btn btn-sm btn-outline-warning mx-1"
              >
                Cancel
              </Link>
      </form>
    </div>
    </div>
  );
};

export default NewPet;