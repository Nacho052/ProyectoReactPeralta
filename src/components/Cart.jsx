import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import { useContext} from "react";
import { Checkout } from "./Checkout"

import { ItemsContext } from "../contexts/ItemsContext";


export const Cart = () => {


    const { reset, removeItem, items } = useContext(ItemsContext);

    return (
    <Container className="d-flex">
        <Card className="w-50">
        {items.map((i) => {
            return (
                <div key={i.fireId} className="m-3 ">
                    <h1 className="mb-4 h3" >{i.titulo}</h1>
                    <div className="d-flex align-items-center mt-4">
                        <img src={i.imagen} height={250}/>
                        <div>
                            <h3>cantidad: {i.quantity}</h3>
                            <h2>${i.precio}</h2>
                            <button className="btn btn-danger" onClick={() => removeItem(i.fireId)}>X</button>
                        </div>
                    </div>
                </div>
        );
    })}
    <div className="d-flex justify-content-center">
        <button className="w-25 rounded btn btn-warning" onClick={reset}>Vaciar el carrito</button>
    </div>
    </Card>
        <div className="w-50">
            <Checkout/>
        </div>
    </Container>
    );
};