import { Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CartContextUse } from "../../context/CartContext";
import "../../styles/cart.css";

function CartWidget() {
  const { totalProducts } = CartContextUse();

  return (
    <NavLink to="/cart">
      <div className="cart-item-list">
        <FaShoppingCart />
        <Badge pill bg="danger" style={{ fontSize: 15 }}>
          {totalProducts()}
        </Badge>
      </div>
    </NavLink>
  );
}

export default CartWidget;
