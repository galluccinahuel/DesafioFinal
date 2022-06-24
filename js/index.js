class Carrito{
    
    constructor(){
        
        const m_listaDeProductos = [];
        let m_precioTotalCompra;
    }
    
    vender(){

        for (const producto of m_listaDeProductos) {
            
            m_precioTotalCompra += producto.m_precio;
            
        }
    }

    AgregarAListaDeCompras(producto){

        this.m_listaDeProductos.push(producto);
        
    }

    QuitarAListaDeCompras(Producto){
        m_listaDeProductos.pop(Producto);
    }

    DevolverLista(){
        return m_listaDeProductos.length;
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


let celda1 = document.getElementById("celda1");
let celda2 = document.getElementById("celda2");
let celda3 = document.getElementById("celda3");

let div = document.createElement("div");


/* let tamañoCacerola = prompt("¿Buscas cacerolas grandes o chicas?");

if (tamañoCacerola == "grande" || tamañoCacerola == "grandes") {
    
    let cantidad = prompt("¿Cuantas quieres?")
    let precioFinal = precioCacerolaGrande * cantidad;
    alert("el precio a abonar es de: " + precioFinal);
    alert("FELICIDADES, REALIZASTE UNA COMPRA");
    celda1.innerText = "";
    celda1.append(div);

    div.className = "titulo";
    div.innerHTML = "<p>Compraste cacerolas <strong>GRANDES</strong> y se va a mostrar en este recuadro, el monto total es de: </p>" + precioFinal;

}
else if(tamañoCacerola == "chica" || tamañoCacerola == "chicas"){

    let cantidad = prompt("¿Cuantas quieres?")
    let precioFinal = precioCacerolaChica * cantidad;
    alert("el precio a abonar es de: " + precioFinal);
    alert("FELICIDADES, REALIZASTE UNA COMPRA");
    celda2.innerText = "";
    celda2.append(div);
    div.className = "titulo";
    div.innerHTML = "<p>Compraste cacerolas <strong>CHICAS</strong> y se va a mostrar en este recuadro, el monto total es de: </p>" + precioFinal;

}
else{

    alert("Ese tamaño no existe");
}

*/

let producto1 = new Producto(1, "cacerolaGRande", 1200, "cacerolas", "breve descripcion")

let carrito = [];

let cantidad = carrito.length;


function SumarCantidad() {
    carrito.push(producto1);
    pCantidad.innerText = carrito.length;
}

function RestarCantidad() {
    carrito.pop(producto1);
    pCantidad.innerText = carrito.length;
}

function MostrarTotal(){
    total.innerText = "Total: " + carrito.length * producto1.m_precio;
}

let pCantidad = document.getElementById("cantidad");


let total = document.getElementById("total");



let boton1 = document.getElementById("btnCarrito1");
boton1.onclick =  () =>{SumarCantidad()};



let boton2= document.getElementById("btnCarrito2")
boton2.onclick =  () =>{RestarCantidad() };


let boton3= document.getElementById("btnCarrito3")
boton3.onclick =  () =>{MostrarTotal()};


