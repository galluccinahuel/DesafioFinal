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

    constructor( id, nombre, precio, categoria, descripcion,){

        this.m_id = id;
        this.m_nombre  = nombre;
        this.m_precio = precio;
        this.m_categoria = categoria;
        this.m_descripcion = descripcion;

    }


}

const cacerolaGrande = new Producto(1, "cacerolaGRande", 1200, "cacerolas", "breve descripcion");
const cacerolaChica = new Producto(1, "cacerolaChica", 800, "cacerolas", "breve descripcion");

let precioCacerolaGrande = cacerolaGrande.m_precio;
let precioCacerolaChica = cacerolaChica.m_precio;

let tamañoCacerola = prompt("¿Buscas cacerolas grandes o chicas?");

if (tamañoCacerola == "grande" || tamañoCacerola == "grandes") {
    
    let cantidad = prompt("¿Cuantas quieres?")
    let precioFinal = precioCacerolaGrande * cantidad;
    alert("el precio a abonar es de: " + precioFinal);
    alert("FELICIDADES, REALIZASTE UNA COMPRA");


}
else if(tamañoCacerola == "chica" || tamañoCacerola == "chicas"){

    let cantidad = prompt("¿Cuantas quieres?")
    let precioFinal = precioCacerolaChica * cantidad;
    alert("el precio a abonar es de: " + precioFinal);
    alert("FELICIDADES, REALIZASTE UNA COMPRA");
}
else{
    prompt("Ese tamaño no existe");
}

const carrito = new Carrito();
