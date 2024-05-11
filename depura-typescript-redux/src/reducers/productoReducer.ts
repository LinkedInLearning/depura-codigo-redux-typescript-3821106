import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Producto } from "../tipos/tipos";
import { RootState } from '../store';
import PRODUCTOS from '../datos/productos';

interface EstadoProducto {
    productos: Producto[];
}

const estadoInicial: EstadoProducto = {
    productos: PRODUCTOS,
};

const productoSlice = createSlice({
    name: 'productos',
    initialState: estadoInicial,
    reducers: {
        agregarProducto(state, action: PayloadAction<Producto>) {
            state.productos.push(action.payload);
        },
        marcarProductoFavorito(state, action: PayloadAction<number>) {
            state.productos.forEach((producto: Producto) => {
                if(producto.id === action.payload){
                    producto.esFavorito = !producto.esFavorito;
                }
            });
        },
    },
});

export const { agregarProducto, marcarProductoFavorito } = productoSlice.actions;
export const seleccionarProductos = (state: RootState) => state.productos.productos;
export default productoSlice.reducer;