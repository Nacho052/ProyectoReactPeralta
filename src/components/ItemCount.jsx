import { useState } from "react";

export const ItemCount  = ({ stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const handleIncrease = () => {
        setCount((prev) => prev + 1);
        
    };

    const handleDecrease = () => {
        if(count > 1) {
            setCount((prev) => prev - 1)
        }
    };

    const handleAdd = () => {
        onAdd(count);
        setCount(1);
    };
    return (
    <>  
        <div className="d-flex justify-content-center">
            <button onClick={handleDecrease} className="w-20 rounded btn btn-danger ">-</button>
            <span className="text-dark m-2">{count}</span>
            <button onClick={handleIncrease} className="w-20 rounded btn btn-success ">+</button>
        </div>
        <hr />
        <div className="d-flex justify-content-center mb-3">
        <button onClick={handleAdd} className="w-50  rounded btn btn-info">Agregar al carrito</button>
        </div>
    </>
);
};