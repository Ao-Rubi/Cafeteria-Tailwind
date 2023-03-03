import React from 'react';
import { Link } from 'react-router-dom';

const CardProducto = ({producto}) => {

    const { imagen, nombreProducto, precio, _id } = {...producto}

    return (
        <div className="card w-auto bg-base-100 shadow-xl">

        <figure><img src={imagen} alt="Shoes" className='w-full h-40 sm:h-48 object-cover'/></figure>

            <div className="card-body">

                <h2 className="card-title">{nombreProducto}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

                <div className='flex place-content-between'>
                    <div>
                        <h6 className='grow text-2xl font-medium'>${precio}</h6>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`/detalles/${_id}`} className="btn btn-primary">Ver Mas</Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CardProducto;