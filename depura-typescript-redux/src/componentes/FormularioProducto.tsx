// components/ProductList.tsx

import React, { SyntheticEvent, useState } from 'react';
import { Producto } from '../tipos/tipos';
import { agregarProducto } from '../reducers/productoReducer';
import { useAppDispatch } from '../hooks/hooks';

const FormularioProducto: React.FC = () => {
    const estadoDefault: Partial<Producto> = {
        nombre: '',
        cantidad: 0,
        categoria: '',
        precio: 0,
        descripcion: '',
    };
    const dispatch = useAppDispatch();
    const [producto, setProducto] = useState<Partial<Producto>>(estadoDefault);

    const handleAgregarProducto = () => {
        const productoNuevo = { ...producto, id: Math.random() };
        dispatch(agregarProducto(productoNuevo as Producto));
        setProducto(estadoDefault);
    };

    // Función para manejar cambios en los campos del formulario
    const manejaCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SyntheticEvent<HTMLSelectElement>) => {
        if ('name' in e.target && 'value' in e.target) {
            const { name, value } = e.target;
            setProducto(prevState => ({
                ...prevState,
                [name]: value
            }));
        }

    };

    return (
        <div className="border rounded-top px-5 py-4">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleAgregarProducto();
            }}>
                <div className="mb-3 row">
                    <div className="col-6">
                        <label className="form-label">Nombre del producto:</label>
                        <input type="text" name="nombre" value={producto.nombre} className="form-control" onChange={manejaCambio} />
                    </div>
                    <div className="col-6">
                        <label className="form-label">Cantidad:</label>
                        <input type="number" name="cantidad" value={producto.cantidad} className="form-control" onChange={manejaCambio} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <label className="form-label">Categoría</label>
                        <select className="form-select" name="categoria" defaultValue={producto.categoria} onChange={manejaCambio}>
                            <option value="Electrónica">Electrónica</option>
                            <option value="Ropa">Ropa</option>
                            <option value="Hogar">Hogar</option>
                            <option value="Alimentación">Alimentación</option>
                            <option value="Deportes">Deportes</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label className="form-label">Precio:</label>
                        <input type="number" name="precio" value={producto.precio} className="form-control" onChange={manejaCambio} />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripción:</label>
                    <textarea className="form-control" name="descripcion" value={producto.descripcion} rows={3} onChange={manejaCambio}></textarea>
                </div>
                <button className="btn btn-primary">Guardar producto</button>
            </form>
        </div>
    );
};

export default FormularioProducto;
