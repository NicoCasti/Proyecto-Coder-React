import { Link } from "react-router-dom";

import "./CartWidget.css";
import { TiShoppingCart } from "react-icons/ti";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="contenedor-carro">
        <TiShoppingCart/>
        <div className="contador-carro">
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
