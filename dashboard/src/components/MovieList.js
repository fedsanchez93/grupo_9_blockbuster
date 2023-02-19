import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: [] };
    }

    async fetchMovies() {
        const response = await fetch("http://localhost:3001/api/movies");
        const result = await response.json();
        this.setState({ movies: result.data });
    }

    componentDidMount() {
        this.fetchMovies();
    }

    render() {
        return (
            <>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800">
                    All the movies in the Database
                </h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table
                                className="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellSpacing="0"
                            >
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Titulo</th>
                                        <th>Calificación</th>
                                        <th>Premios</th>
                                        <th>Duración</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Titulo</th>
                                        <th>Calificación</th>
                                        <th>Premios</th>
                                        <th>Duración</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {this.state.movies.map((m) => {
                                        return <Movie key={m.id} movie={m} />;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
