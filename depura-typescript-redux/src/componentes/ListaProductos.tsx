// components/ProductList.tsx

import React from 'react';
import { seleccionarProductos } from '../reducers/productoReducer';
import { useAppSelector } from '../hooks/hooks';

const ListaProductos: React.FC = () => {
    const productos = useAppSelector(seleccionarProductos);

    return (
        <div className="mt-5 w-100">
            <ol className="list-group">
                {productos.map(producto => (
                    <li key={producto.id} className="list-group-item">
                        <div className="row">
                            <div className="fw-bold col-6">{producto.nombre}</div>
                            <div className="col-6 text-end">€{producto.precio}</div>
                        </div>
                        <div className="row d-flex mt-2">
                            <div className="col-6">{producto.categoria}</div>
                            <div className="col-6 text-end">{producto.cantidad} unidad(es)</div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ListaProductos;
