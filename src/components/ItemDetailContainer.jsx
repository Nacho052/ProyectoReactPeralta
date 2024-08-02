import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import data from "../data/products.json";



export const ItemDetailContainer = () => {
const [item, setItem] = useState(null);
const [loading, setLoading] = useState(true);

const { id } = useParams();

useEffect(() => {
    new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000);
    }).then((response) => {
        const finded = response.find(i => i.id === id);
        setItem(finded)
    })
    .finally(() => setLoading(false));
}, [id]);

    if (loading) return <Container className="mt-4">Wait</Container>

    if (!item)
        return <Container className="mt-4">No hay productos, la recesión</Container>


    return (
    <Container className="mt-4 ">
        <h1>Productos</h1>
        <h2>{item.name}</h2>
        <img src={item.imagen} height={250}/>
        <h4>{item.titulo}</h4>
        <p>${item.precio}</p>
        </Container>
);
};