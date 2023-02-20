import React from "react";
import Genre from "./Genre";


export default class GenresInDb extends React.Component {
    constructor(props) {
        super(props);
        this.state = { listaGeneros: [] };
    }

    async fetchMovies() {
        const response = await fetch("http://localhost:5000/api/products");
        const result = await response.json();
        //console.log(result)
        this.setState({ listaGeneros: result.meta.countByCategory });
        //console.log(this.state.listaGeneros)

    }

    componentDidMount() {
        this.fetchMovies();
        //console.log(this.state.listaGeneros)
    }

    render() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-gray-800">
                        Generos
                    </h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {this.state.listaGeneros.map((genre, index) => {
                            return <Genre {...genre} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

}



