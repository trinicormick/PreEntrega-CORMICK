import React from "react";
import carrito from "../img/carrito.jpg"
const CardWidgets = ({cardWidgets}) => {
    return (
        <div>
            <img src = {carrito} alt="carrito de compras" />
        </div>
    );
};
export default CardWidgets;
