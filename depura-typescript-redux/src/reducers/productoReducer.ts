import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Producto } from "../tipos/tipos";
import { RootState } from '../store';

interface EstadoProducto {
    productos: Producto[];
}

const estadoInicial: EstadoProducto = {
    productos: [],
};

const productoSlice = createSlice({
    name: 'productos',
    initialState: estadoInicial,
    reducers: {
        agregarProducto(state, action: PayloadAction<Producto>) {
            state.productos.push(action.payload);
        },
    },
});

export const { agregarProducto } = productoSlice.actions;
export const seleccionarProductos = (state: RootState) => state.productos.productos;
export default productoSlice.reducer;