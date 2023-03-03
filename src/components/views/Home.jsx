import React, { useEffect, useState } from 'react';
import CardProducto from './products/CardProducto';

const Home = () => {

    const URL = process.env.REACT_APP_API_SERVER;

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async()=>{

        //Peticion Get
        try {
            const resultado = await fetch(URL)
            const listarProductos = await resultado.json();

            setProductos(listarProductos)
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <div className='px-5'>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">

                {productos.map( (producto)=>{return <CardProducto key={producto._id} producto={producto} ></CardProducto>} )}

            </div>
        </div>

    );
};

export default Home;