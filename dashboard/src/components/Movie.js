import React from "react";

export default function Movie({ movie }) {
    return (
        <tr>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.rating}</td>
            <td>{movie.awards}</td>
            <td>{movie.length}</td>
        </tr>
    );
}
