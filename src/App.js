import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer nombre="Nico" apellido="Castillo"/>
    </div>
  );
}

export default App;
