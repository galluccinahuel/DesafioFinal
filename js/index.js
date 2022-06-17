class Carrito{
    
    constructor(){
        
        this.m_listaDeProductos = [];
        let m_precioTotalCompra;
    }
    
    vender(){

        for (const producto of this.m_listaDeProductos) {
            
            m_precioTotalCompra += producto.m_precio;
            
        }

        this.DevolverPrecioFinal();

    }

    CrearProducto(){

        const producto  = new Producto();
    }

    AgregarAListaDeCompras(producto){

        this.m_listaDeProductos.push(producto);

    }

    QuitarAListaDeCompras(Producto){
        this.m_listaDeProductos.pop(Producto);
    }

    DevolverPrecioFinal(){

        return m_precioTotalCompra;
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
