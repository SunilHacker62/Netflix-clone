import { useState } from "react";
import "./Row.css";

const dummyMovies = [
  {
    id: 1,
    title: "The Dark Future",
    image:
      "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    title: "Lost Kingdom",
    image:
      "https://picsum.photos/200/300?random=2",
  },
  {
    id: 3,
    title: "Silent Hunter",
    image:
      "https://picsum.photos/200/300?random=3",
  },
  {
    id: 4,
    title: "Midnight Escape",
    image:
      "https://picsum.photos/200/300?random=4",
  },
];

function Row({ title }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {dummyMovies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={movie.image}
            alt={movie.title}
            onClick={() => setSelectedMovie(movie.title)}
          />
        ))}
      </div>

      {selectedMovie && (
        <div className="dummy_popup">
          <h3>{selectedMovie}</h3>
          <p>Trailer not available (Dummy Version)</p>
        </div>
      )}
    </div>
  );
}

export default Row;
