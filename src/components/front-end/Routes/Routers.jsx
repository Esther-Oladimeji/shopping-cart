import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import {Route, Switch} from "react-router-dom";

export default function Routers({lists, cartItems, handleAddToCart, handleRemoveItem, handleClearingCart}) {
    return (
        <div>
            <Switch>

                <Route path="/" exact>
                    <Products lists={lists} handleAddToCart={handleAddToCart}/>
                </Route>
                <Route path="/cart" exact>
                    <Cart
                        cartItems={cartItems}
                        handleAddToCart={handleAddToCart}
                        handleRemoveItem={handleRemoveItem}
                        handleClearingCart = { handleClearingCart}
                        />
                </Route>
            </Switch>
        </div>
    )
}
