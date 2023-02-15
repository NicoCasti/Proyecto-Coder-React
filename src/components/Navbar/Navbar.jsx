import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import ListNavbar from "../ListNavbar/ListNavbar";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "20vh",
        justifyContent: "space-between",
        alignItenms: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Link to="/">
        <h2>Logo</h2>
      </Link>
      <div>
        <ul>
        <Link to="/">
        <ListNavbar title="Productos" />
      </Link>

      <Link to="/category/Ollas">
        <ListNavbar title="Ollas" />
      </Link>

      <Link to="/category/Quemadores">
        <ListNavbar title="Quemadores" />
      </Link>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};
