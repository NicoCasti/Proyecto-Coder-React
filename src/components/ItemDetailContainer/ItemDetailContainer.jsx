import React, { useEffect, useState } from 'react'

import { products } from '../../productsMock'

import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})


    useEffect( ()=>{

       let productSelected = products.find( prod => prod.id === Number(id) )

        setProduct( productSelected )

    },[])


  return (
    <div style={{paddingBottom: "100px", textAlign: "center"}}>
      <h1>
        Producto: {product.title}
        </h1>
      <h2>
        Precio: ${product.price}
      </h2>
      
    </div>
  )
}

export default ItemDetailContainer