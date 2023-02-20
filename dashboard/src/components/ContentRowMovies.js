import React from "react";
import SmallCard from "./SmallCard";


export default class ContentRowTop extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            totalMovies: 0,
            totalGeneros:0,
            totalUsers:0
        };
    }

    async fetchMoviesUsers() {
        const responseMovies = await fetch("http://localhost:5000/api/products");
        const resultMovies = await responseMovies.json();

        const responseUsers = await fetch("http://localhost:5000/api/users");
        const resultUsers = await responseUsers.json();

        this.setState({ 
            totalMovies: resultMovies.meta.totalMovies,
            totalGeneros: resultMovies.meta.totalGeneros,
            totalUsers: resultUsers.meta.totalUsers
         });
    }

    componentDidMount() {
        this.fetchMoviesUsers();
    }

    render() {

        let productInDataBase = {
            color: "primary",
            titulo: "Total Peliculas",
            valor: this.state.totalMovies,
            icono: "fas fa-film",
        };
        
        let amount = {
            color: "success",
            titulo: "Total Generos",
            valor: this.state.totalGeneros,
            icono: "fas fa-award",
        };
        
        let user = {
            color: "warning",
            titulo: "Total Usuarios",
            valor: this.state.totalUsers,
            icono: "fas fa-user",
        };
        
        let cardProps = [productInDataBase, amount, user];

    return (
        
        <>
        <div className="row">
            {cardProps.map((producto, index) => {
                return <SmallCard {...producto} key={index} />;
            })}
        </div>
        </>
    );

        }
} 
