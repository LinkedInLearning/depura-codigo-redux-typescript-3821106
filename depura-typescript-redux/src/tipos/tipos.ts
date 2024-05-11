export type Producto = {
    id: number;
    nombre: string;
    descripcion?: string;
    precio: number;
    cantidad: number;
    categoria: string;
    esFavorito: boolean;
};
