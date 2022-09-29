import "./Header.css";
import {Link} from "react-router-dom"

export default function Header({cartItems}) {
    return (

        <header className="header">
            <div >
                <h1>
                    <Link to="/" className="logo">
                       TOON-PETS</Link>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <div className="filter">
                        <li>
                            <i class="fa fa-filter" aria-hidden="true"></i>
                        </li>
                    </div>
                    <div className="cart">
                        <li>
                            <Link to="/cart"><i class="fa fa-shopping-cart"/>
                                <span>{cartItems.length === 0
                                        ? ""
                                        : cartItems.length}</span>
                            </Link>
                        </li>

                    </div>
                </ul>
            </div>
        </header>

    )
}
