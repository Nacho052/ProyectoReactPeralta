import { Link } from "react-router-dom";
import carrito from "../assets/carrito.svg";

export const CartWidget = () => {
    return (
        <Link to="/cart">
            <img src= {carrito} height={30}/> 
        </Link>
    );
};