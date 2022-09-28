import './App.css';

import { Link, Navigate, Route, Routes } from 'react-router-dom';

import AllPets from './views/AllPets';
import OnePet from './views/OnePet';
import NewPet from './views/NewPet';
import EditPet from './views/EditPet';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">PETTIFIER - Online Pet Adoption Platform</h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/pets"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            See All Pets
          </Link>
          <Link
            to="/pets/new"
            className="btn btn-sm btn-outline-info mx-1"
          >
            Add New Pet
          </Link>
        </div>
      </nav>

      {/*
      Front-end routes to display view components.
      these are separate from our server routes.
      */}
      <Routes>
        {/* Redirect example */}
        <Route path="/" element={<Navigate to="/pets" replace />} />
        <Route path="/pets" element={<AllPets />} />
        <Route path="/pets/:id/edit" element={<EditPet />} />
        <Route path="/pets/:id" element={<OnePet />} />
        <Route path="/pets/new" element={<NewPet />} />
      </Routes>
    </div>
  );
}

export default App;