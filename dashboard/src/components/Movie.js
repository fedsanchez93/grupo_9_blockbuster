import React from "react";

export default function Movie({ movie }) {
    return (
        <tr>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.blockbuster_rating}</td>
            <td>{movie.imdb_rating}</td>
            <td>{movie.rotten_tomatoes_rating}</td>
            <td>{movie.release_year}</td>
            <td>{movie.length}</td>
        </tr>
    );
}
