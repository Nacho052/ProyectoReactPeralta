import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';

import { ItemsContext } from "../contexts/ItemsContext";
import { ItemCount } from "./ItemCount";

export const ItemDetailContainer = () => {
const [item, setItem] = useState([]);
const [loading, setLoading] = useState(true);

const { id } = useParams();

const {addItem} = useContext(ItemsContext);

const onAdd = (count) => {
    addItem({...item, quantity: count });
};

useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items" , id);

    getDoc(refDoc)
        .then((snapshot) => {

        setItem({ fireId: snapshot.id, ...snapshot.data() });
    })
        .finally(() => setLoading(false));

}, [id]);

    if (loading) return "wait";

    return (    
    <Container className="mt-4 ">
        <div className="d-flex justify-content-center">
        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={item.imagen} height={300} />
        <div className="d-flex justify-content-center mt-2">
            <Card.Title>{item.titulo}</Card.Title>
        </div>
        <div className="d-flex justify-content-center mb-3">
            <Card.Text>${item.precio}</Card.Text>
        </div>
            <ItemCount stock={item.stock} onAdd={onAdd}/>
        </Card>
        </div>
    </Container>
);
};