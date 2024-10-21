import React, { useEffect, useState } from 'react'
import { Producto } from './Producto'
import { InsertProd } from './InsertProd'

export const ListProd = () => {

    const [listadoProductos, setListadoProductos] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const resp = await fetch("http://localhost:3000/productos")
            setListadoProductos(await resp.json())
        }
        fetchProducts()
    }, [listadoProductos])

    return (
        <div className="p-4">
            <div className='mb-4'>
                <InsertProd handleProdCreated={setListadoProductos} />
            </div>
            <div className='flex flex-wrap gap-4'>
                {listadoProductos ? listadoProductos.map((e, i) => <Producto key={i} producto={e} />) : ""}
            </div>
        </div>
    )
}
