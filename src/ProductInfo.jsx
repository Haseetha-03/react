import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IMG from "./assets/react.svg";

function ProductInfo() {
    const Data = [
        { id: 1, name: "Product 1", price: 100, desc: "This is product 1" },
        { id: 2, name: "Product 2", price: 200, desc: "This is product 2" },
        { id: 3, name: "Product 3", price: 300, desc: "This is product 3" },
        { id: 4, name: "Product 4", price: 400, desc: "This is product 4" },
        { id: 5, name: "Product 5", price: 500, desc: "This is product 5" },
        { id: 6, name: "Product 6", price: 600, desc: "This is product 6" }
    ];

    const RecievedData = useParams();
    const [myCards, setMyCards] = useState(null);

    useEffect(() => {
        const product = Data.find(ele => ele.id === parseInt(RecievedData.id));
        setMyCards(product);
    }, [RecievedData.id]);

    if (!myCards) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Name: {myCards.name}</h1>
            <img src={IMG} alt={myCards.name} />
            <p>Description: {myCards.desc}</p>
            <p>Price: ${myCards.price}</p>
        </div>
    );
}

export default ProductInfo;