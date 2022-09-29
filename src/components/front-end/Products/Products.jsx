import "./Products.css"
import {useState} from "react"

export default function Products({lists, handleAddToCart}) {

    return (
        <div className= "products">
            <div className= "product-section-title">The Shopping Cart</div>
        
        <div className="products-card-section">
            {lists.map((product) => (
                <div className="cards">
                    <div>
                        <img className="product-image" src={product.image} alt=""/>
                    </div>
                    <div >
                        <h3 className="product-name">Toon {product.name}</h3>
                    </div>
                    <div className="product-price">
                        N{product.price}
                    </div>
                    <div>
                        <button className="product-button" onClick={() => handleAddToCart(product)}>ADD TO CART</button>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}

