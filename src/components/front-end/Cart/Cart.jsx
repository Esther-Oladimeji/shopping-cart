import "./Cart.css"

export default function Cart({cartItems, handleAddToCart, handleRemoveItem, handleClearingCart}) {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)

    return (
        <div className="cart-items">
            <div className="cart-items-header">Cart Lists</div>
            {cartItems.length === 0 && (
                <div className="cart-items-empty">No items in your Cart</div>
            )}
            <div>
                <div className="clear-all-cart">
                    {cartItems.length >= 1 && <button onClick= {() => handleClearingCart()}>
                        Clear Cart</button>}
                </div>
                {cartItems.map((item, index) => (
                    <>
                    <div key={item.id} className="cart-list">
                        <div className="cart-image-container">
                            <img className="cart-image" src={item.image} alt={item.name}/>
                        </div>
                        <div>
                        <div className="cart-name">{item.name}</div>
                        <div className="item-price">{item.price}/item</div>
                        </div>
                        <div className="cart-functions">
                            <button className="cart-add-button" onClick={() => handleAddToCart(item)}>
                                +
                            </button>
                            <div className= "item-quantity">{item.quantity}</div>
                            <button className="cart-remove-button" onClick={() => handleRemoveItem(item)}>
                                -
                            </button>
                            <div className="cart-price">
                            {item.quantity * item.price}
                        </div>
                        </div>
</div>
                        <div className="mobile-cart-list">
                            <div className="cart-image-container">
                                <img className="cart-image" src={item.image} alt={item.name}/>
                            </div>

                            <div className= "mobile-cart-time-details">
                            <div className="cart-name">{item.name}</div>
                            <div className="item-price">{item.price}/item</div>
                            <div className="cart-functions">
                                <button className="cart-add-button" onClick={() => handleAddToCart(item)}>
                                    +
                                </button>
                                <div className= "item-quantity">{item.quantity}</div>
                                <button className="cart-remove-button" onClick={() => handleRemoveItem(item)}>
                                    -
                                </button>
                            </div>
                            </div>
                            <div className="cart-price">
                            {item.quantity * item.price}
                        </div>
                        </div>
                        
</>
                    

                ))}
                <div className="cart-total-price-letter">
                    <div className="cart-total-price">Total price</div>
                    <div className="cart-total-price-amount">
                        N{totalPrice}
                    </div>
                </div>
            </div>

        </div>
    )
}