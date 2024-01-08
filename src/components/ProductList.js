import React from "react";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import ProductImage from '../assets/Kit_Labiales_Lip_Addict.png';

export const ProductList = () => {
    const [url, setUrl] = useState("http://localhost:8000/products/");
    const { data: products, loading, error } = useFetch(url, { content: "ABC"});

    return (
        <section>
            <div className="filter">
                <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>Disponibles</button>
                <button onClick={() => setUrl("http://localhost:8000/products?in_stock=false")}>Agotados</button>
            </div>
            {loading && <p>Loading products...</p>}
            {error && <p>{error}</p>}
            {products && products.map((product) => (
                <div className="card" key={product.id}>
                    <p className="id">{product.id}</p>
                    <p className="name">{product.name}</p>
                    <img src={ProductImage} alt={product.name} className="product-image" />

                    <p className="info">
                        <span>${product.price}</span>
                        <span className={product.in_stock ? "instock" : "unavailable"}>
                            {product.in_stock ? "In Stock" : "Unavailable"}
                        </span>
                    </p>
                </div>
            ))}
        </section>
    )
}
