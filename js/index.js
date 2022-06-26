class Carrito{
    
    constructor(){
        
        this.m_listaDeProductos = [];
        this.m_precioTotalCompra;
    }
    
    AgregarProducto(producto){


        if (carrito.m_listaDeProductos.includes(producto)) {    

            this.DevolverProducto(producto);

            producto.m_cantidad++;
                
        }
        else{
            
            this.m_listaDeProductos.push(producto);
            
        }

    }

    QuitarProducto(producto){

        if (carrito.m_listaDeProductos.includes(producto)) {    

            if (this.DevolverProducto(producto).m_cantidad >1 )  {
            
                producto.m_cantidad--;

            }
            else{
    
                let index = this.m_listaDeProductos.indexOf(producto);
                console.log(index);
                this.m_listaDeProductos.splice(index, 1);
                
            }            
   
        }
        else{
            console.log("no hay producto: " + producto.m_nombre);
        }
        
    }

    DevolverMontoTotalCarrito(){

        let montoTotal =0;

        for (const i of this.m_listaDeProductos) {
            
            montoTotal += i.m_precio * i.m_cantidad;
        }

        return montoTotal;
    }

    DevolverProducto(producto){

        for (const producto of this.m_listaDeProductos) {
            
            return producto;
        }

    }

}

class Producto{

    constructor(id, nombre, precio){
        
        this.m_id = id;
        this.m_nombre = nombre;
        this.m_precio = precio;
        this.m_cantidad = 1;
    }

}

const carrito = new Carrito();

const cacerola = new Producto(1, "cacerola", 280);
const sarten = new Producto(2, "sarten", 100);
const vaso = new Producto(3, "vaso", 500);
const tenedor = new Producto(4, "tenedor", 100);


carrito.AgregarProducto(cacerola);
carrito.AgregarProducto(cacerola);
carrito.AgregarProducto(sarten);
carrito.AgregarProducto(sarten);
carrito.AgregarProducto(vaso);
carrito.AgregarProducto(vaso);

const carritoJSON = JSON.stringify(carrito);

/* sessionStorage.setItem("carrito", carritoJSON );
 */



//console.log(carritoJSON);
console.log(carrito.m_listaDeProductos);

carrito.QuitarProducto(cacerola);
carrito.QuitarProducto(cacerola);
//carrito.QuitarProducto(sarten);
//carrito.QuitarProducto(sarten);

console.log(carrito.DevolverMontoTotalCarrito());




