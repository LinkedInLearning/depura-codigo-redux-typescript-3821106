import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductList from './componentes/ListaProductos';
import FormularioProducto from './componentes/FormularioProducto';

function App() {
  return (
    <Provider store={store}>
        <div className="container mt-5">
        <h3 className="text-center">Inventario de Productos</h3>
            <FormularioProducto />
            <ProductList />
        </div>
    </Provider>
)
}

export default App;
