import React from "react";
import Movie from "./Movie";
import  { Link } from 'react-router-dom'
// import {useEffect, useState} from 'react';

export default class MovieList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { movies: [], meta:'' };
    }

    async fetchMovies() {
        const response = await fetch("http://localhost:5000/api/products");
        const result = await response.json();
        this.setState({ movies: result.data, meta: result.meta });
    }

    componentDidMount() {
        this.fetchMovies();
    }

    render() {

        return (
            <>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800">
                    Lista de Peliculas
                </h1>
                <Link className="btn btn-primary mr-10 d-none" rel="nofollow" to="/"> Pagina Anterior</Link>
                <Link className="btn btn-primary d-none" rel="nofollow" to="/"> Pagina Siguiente</Link>
                {/* <Link to="{this.state.meta.paginaSiguiente}">Siguiente</Link> */}

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
                                        <th>Calificación Blockbuster</th>
                                        <th>Calificación Imdb</th>
                                        <th>Calificación Rotten Tomatoes</th>
                                        <th>Año Lanzamiento</th>
                                        <th>Duración</th>
                                    </tr>
                                </thead>
                                {/* <tfoot>
                                <tr>
                                        <th>Id</th>
                                        <th>Titulo</th>
                                        <th>Calificación Blockbuster</th>
                                        <th>Calificación Imdb</th>
                                        <th>Calificación Rotten Tomatoes</th>
                                        <th>Año Lanzamiento</th>
                                        <th>Duración</th>
                                    </tr>
                                </tfoot> */}
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
