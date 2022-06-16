
class ListaDeComprasActual{

    constructor(){
        let precioFinal;
    }

    precioFinal = carrito.DevolverPrecioFinal;
}


class Carrito{
    
    constructor(){
        
        this.m_numeroDeProductos = [];
        let m_precioFinal;
    }
    
    Vender(){

        for (const producto of this.m_numeroDeProductos) {
            
            m_precioFinal += producto.m_precio;
            
        }

        this.DevolverPrecioFinal();

    }

    CrearProducto(){

        const producto  = new Producto();
    }

    AgregarAListaDeCompras(producto){

        this.m_numeroDeProductos.push(producto);

    }

    QuitarAListaDeCompras(Producto){
        this.m_numeroDeProductos.pop(Producto);
    }

    DevolverPrecioFinal(){

        return m_precioFinal;
    }


}



class Producto{

    constructor( id, nombre, precio, categoria, descripcion, cantidad){

        this.m_id = id;
        this.m_nombre  = nombre;
        this.m_precio = parseFloat(precio);
        this.m_categoria = categoria;
        this.m_descripcion = descripcion;
        this.m_cantidad = cantidad;
    }


}


const carrito = new Carrito();

const listaDeComprasActual = new ListaDeComprasActual();