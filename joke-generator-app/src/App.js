import React from 'react'
import './App.css';
import useRandomJoke from './useRandomJoke';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { joke, fetchJoke }= useRandomJoke();

  return (
    <div className="App bg-dark text-warning min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <center>
        <h1 className="mb-4 text-decoration-underline">Questionable Chuck Norris Jokes</h1>
        <h2 className="mb-4 fst-italic">{joke}</h2>
        <button className="btn btn-warning" onClick={fetchJoke}>Generate Joke</button>
      </center>
    </div>
  );
}

export default App;
