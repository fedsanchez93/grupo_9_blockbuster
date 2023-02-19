import React from "react";
import SmallCard from "./SmallCard";

let productInDataBase = {
    color: "primary",
    titulo: "Total Peliculas",
    valor: 21,
    icono: "fas fa-film",
};

let amount = {
    color: "success",
    titulo: "Total Generos",
    valor: 79,
    icono: "fas fa-award",
};

let user = {
    color: "warning",
    titulo: "Total Usuarios",
    valor: 49,
    icono: "fas fa-user",
};

let cardProps = [productInDataBase, amount, user];

function ContentRowTop() {
    return (
        <div className="row">
            {cardProps.map((producto, index) => {
                return <SmallCard {...producto} key={index} />;
            })}
        </div>
    );
}
export default ContentRowTop;
