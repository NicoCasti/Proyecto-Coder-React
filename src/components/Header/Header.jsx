import CartWidget from "../CartWidget/CartWidget";
import {Navbar} from "../Navbar/Navbar";

const Header = () => {
  return (
    <div
        style={{
            display:"flex",
            width: "100%",
            height:"20vh",
            justifyContent: "space-between",
            alignItenms: "center",
            backgroundColor: "lightblue"
        }}
    >   
        <h2>Logo</h2>
        <Navbar/>
        <CartWidget/>
    </div>
  )
}

export default Header
