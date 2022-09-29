import "./Cart.css"

export default function Cart({cartItems, handleAddItem, handleRemoveItem, handleClearingCart}) {

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
                    <div key={item.id} className="cart-list">
                        <div className="cart-image-container">
                            <img className="cart-image" src={item.image} alt={item.name}/>
                        </div>
                        <div className="cart-name">{item.name}</div>

                        <div className="cart-functions">
                            <button className="cart-add-button" onClick={() => handleAddItem(item)}>
                                +
                            </button>
                            <button className="cart-remove-button" onClick={() => handleRemoveItem(item)}>
                                -
                            </button>
                        </div>
                        <div className="cart-price">
                            {item.quantity}
                            * N{item.price}
                        </div>

                    </div>

                ))}
                <div className="cart-total-price-letter">
                    Total price
                    <div className="cart-total-price-amount">
                        N{totalPrice}
                    </div>
                </div>
            </div>

        </div>
    )
}