import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
    getFirestore,
    getDocs,
    where,
    query,
    collection,
} from "firebase/firestore" ;


export const ItemListContainer = () => {
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);

const { id } = useParams();

useEffect(() => {
    const db = getFirestore();

    const refCollection = !id
    ? collection(db, "items")
    : query(collection(db, "items"), where("categoryId", "==", id));

    getDocs(refCollection)
        .then((snapshot) => {
            setItems(
                snapshot.docs.map((doc) => {
                    return { fireId: doc.id, ...doc.data() };
                })
            );
        })
        .finally(() => setLoading(false));

}, [id]);

    if (loading) return <Container className="mt-4">Wait</Container>

    if (items.length === 0)
        return <Container className="mt-4">No hay productos, la recesión</Container>

    return (
    <Container className="mt-4 ">
        <h1>Productos</h1>
    <Container className=" d-flex flex-wrap gap-4">
        {items.map((i) => (
        <Card key={i.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={i.imagen} height={250} />
            <Card.Body>
            <Card.Title>{i.titulo}</Card.Title>
            <Card.Text>${i.precio}</Card.Text>
            <Link to={`/item/${i.fireId}`}>
                <div className="d-flex justify-content-center">
                    <Button variant="primary" className="btn btn-info ">Ver</Button>
                </div>
            </Link>
            </Card.Body>
            </Card>))}
            </Container>
        </Container>
);
};