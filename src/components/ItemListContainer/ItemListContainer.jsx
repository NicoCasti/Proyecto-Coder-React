
const ItemListContainer = (greeting) => {
  return (
    <div
        style={{
            color:"red",
            textAlign: "center",
            backgroundColor: "lightskyblue"
        }}>
       <h1>Hola {greeting.nombre} {greeting.apellido}</h1>
    </div>
  )
}

export default ItemListContainer
