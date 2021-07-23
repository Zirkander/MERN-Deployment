import NotFound from './views/notFound';
import Pet from './views/pet';
import Pets from './views/pets';
import NewPet from './views/NewPet';
import EditPet from './views/EditPet';
import { Link, Redirect, Router } from "@reach/router";

import './App.css';

function App() {
  return (
    <div className="constainer">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top justify-content-center mb-4">

        <h1 className='navbar-brand mb-0'>Pet Shelter</h1>

        <div>
          <Link to="pets/new"><h8>add a pet to the shelter</h8></Link> |
          <Link to="pets"><h8>home</h8></Link>
        </div>
      </nav>

      <Router>
        <Pets path="/pets" />
        <Pet path="/pets/:_id" />
        <EditPet path="/pets/:id/edit" />
        <NewPet path="/pets/new" />
        <Redirect from='/' to='/pets' noThrow='true' />
        <NotFound default />
      </Router>
    </div >
  );
}

export default App;
