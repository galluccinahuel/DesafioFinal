 
function Producto(id, nombre, precio){

        this.m_id = id;
        this.m_nombre = nombre;
        this.m_precio = precio;
        this.m_cantidad = 1;
}

const cacerola = new Producto(1, "Cacerola", "100");
const Sarten = new Producto(2, "Sarten", "200");
const cacerolita = new Producto(3, "Cacerolita", "500");
const bifera = new Producto(4, "Bifera", "600");

let productosEnCarrito=[];

let carrito;

let productosEnVenta=[
    cacerola,
    Sarten,
    cacerolita,
    bifera,
]

console.log(productosEnCarrito);

if (JSON.parse(localStorage.getItem("carrito"))) {
        
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));

}else{

    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
    console.log(productosEnCarrito);
}



function DesplegarProductos(){


    
    let tabla = document.getElementById("tabla");

    for (const i of productosEnVenta) {
        
        let divCardTabla = document.createElement("div");
        let divCeldaTabla = document.createElement("div");
        let inputAgregar = document.createElement("input");
        let inputQuitar = document.createElement("input");
    
        inputAgregar.type = "button";
        inputQuitar.type = "button";
        inputAgregar.className = "btnAgregarCarrito"
        inputQuitar.className = "btnQuitarCarrito"
        inputAgregar.id = i.m_id;
        inputQuitar.id = i.m_id;
        
        divCardTabla.className = "celda";
        tabla.append(divCardTabla);
        divCardTabla.append(divCeldaTabla);
        divCeldaTabla.innerHTML = "<p>"+i.m_nombre+"</p><p>"+i.m_precio+"</p>";
        divCeldaTabla.append(inputAgregar);
        divCeldaTabla.append(inputQuitar);
    
        inputAgregar.value = "Agregar";
        inputQuitar.value = "Quitar";
    
    }
}

function DevolverMontoTotalCarrito(){    

    let montoTotal = 0;
    console.log(productosEnCarrito);
    for (const i of productosEnCarrito) {
        
        montoTotal += i.m_precio * i.m_cantidad;

    }
    console.log(montoTotal);

}


function AgregarAlCarrito(e){
    
    const btn = e.target;
    const id = btn.getAttribute("id"); 
    
    let productoEnVenta =  productosEnVenta.find(producto => producto.m_id == id);
    
    let productoEncarrito = productosEnCarrito.find(product => product.m_id ==  productoEnVenta.m_id ); 
    
    if (productoEncarrito) {
        
        productoEnVenta.m_cantidad++;
        console.log("Sumado");
    }
    else{
        
        productosEnCarrito.push(productoEnVenta);
        console.log("agregado");
    }
    console.log(productosEnCarrito);
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
}

function QuitarCarrito(e){
    
    const btn = e.target;
    const id = btn.getAttribute("id");
    
    let productoEnVenta =  productosEnVenta.find(producto => producto.m_id == id);
    
    let productoEncarrito = productosEnCarrito.find(product => product.m_id ==  productoEnVenta.m_id ); 
    
    if (productoEncarrito) {
        
        let cantidadDeProducto = productoEncarrito.m_cantidad;
        console.log("cantidad: " + cantidadDeProducto);
        
        if (cantidadDeProducto > 1) {
            
            productoEnVenta.m_cantidad--;
            console.log("Restado");
            
        }
        else{
            
            let index = productosEnCarrito.indexOf(productoEncarrito);
            console.log("index:" + index);
            productosEnCarrito.splice(index, 1);        
        }
    }
    else{
        
        console.log("producto no existe");
        
    }
    console.log(productosEnCarrito);
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));

    
}

function GetBtnAgregar(){

    const btnAgregar = document.getElementsByClassName("btnAgregarCarrito");

    for (const i of btnAgregar) {
        
        i.addEventListener("click", AgregarAlCarrito);
    }

}

function GetBtnQuitar(){

    const btnAgregar = document.getElementsByClassName("btnQuitarCarrito");

    for (const i of btnAgregar) {
        
        i.addEventListener("click", QuitarCarrito);
    }

}

let botonR = document.getElementById("botonR");
botonR.addEventListener("click", DevolverMontoTotalCarrito);


DesplegarProductos();
GetBtnAgregar();
GetBtnQuitar()
