import { useState } from "react";
import "./App.css";
import { HeaderMain } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";

function App() {
  const [movielist, setMovielist] = useState([]);

  const addMovieList = (nameMovie, urlMovie, ratingMovie) => {
    setMovielist((prevMovilist) => {
      return [
        ...prevMovilist,
        {
          name: nameMovie,
          url: urlMovie,
          rating: ratingMovie,
          id: Math.random().toString(),
        },
      ];
    });
  };
  console.log(movielist);

  const deleteById = (id) => {
    setMovielist((prevMovilist) => {
      return prevMovilist.filter((elment) => elment.id !== id);
    });
  };
  // console.log(deleteById);
  return (
    <div className="App">
      <HeaderMain onMovieList={addMovieList} />
      <Main movielist={movielist} deleteById={deleteById} />
    </div>
  );
}

export default App;
