import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ItemsContext } from "../contexts/ItemsContext";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

import Card from 'react-bootstrap/Card';


export const Checkout = () => {
    const db = getFirestore();

    const { items, totalPrice, reset } = useContext(ItemsContext)

    const { register, handleSubmit } = useForm();

    const buy = (data) => {

        if (data.email !== data.confEmail) {
            alert("Los emails no coinciden!")
            return
        }

        const order = {
            cliente: data,
            productos: items,
            total: totalPrice(),
            date: new Date
        }

        const ordersRef = collection(db, "recibos")

        addDoc(ordersRef, order)
            .then((doc) => {
                alert("Gracias por su compra! \nAqui tienes el codigo de seguimiento: " + doc.id)
            })
            .finally(() => {
                reset()
            })
    }

    return (
        <Card className="border-0">
            <form className="bg-dark text-white border-0 p-4" onSubmit={handleSubmit(buy)}>
                <div className="form-group mb-3">
                    <label>Nombre</label>
                    <input type="text" className="form-control" placeholder="Ingresá tu nombre" required {...register("nombre")}/>
                </div>
                <div className="form-group mb-3">
                    <label>Apellido</label>
                    <input type="text" className="form-control" placeholder="Ingresá tu apellido" required {...register("apellido")}/>
                </div>
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Ingresá tu e-mail" required {...register("email")}/>
                </div>
                <div className="form-group mb-3">
                    <label>Confirmar Email</label>
                    <input type="email" className="form-control" placeholder="Ingresá nuevamente tu e-mail" required {...register("confEmail")}/>
                </div>
                <div className="form-group mb-4">
                    <label>Teléfono</label>
                    <input type="phone" className="form-control" placeholder="Ingresá tu teléfono" required {...register("telefono")}/>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="buy btn btn-info w-50">Finalizar compra</button>
                </div>
                
            </form>
        </Card>
    )
}