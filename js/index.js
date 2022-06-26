 


function Producto(id, nombre, precio){

        this.m_id = id;
        this.m_nombre = nombre;
        this.m_precio = precio;
        this.m_cantidad = 1;
}

const cacerola = new Producto(1, "Cacerola", "$100");
const Sarten = new Producto(2, "Sarten", "$200");
const cacerolita = new Producto(3, "Cacerolita", "$500");
const bifera = new Producto(4, "Bifera", "$600");


let productosEnCarrito=[
    cacerola
];

let productosEnVenta=[
    cacerola,
    Sarten,
    cacerolita,
    bifera,
]

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


function AgregarProducto(id){


}

function QuitarProducto(producto){

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

function DevolverMontoTotalCarrito(){

    let montoTotal =0;

    for (const i of this.m_listaDeProductos) {
        
        montoTotal += i.m_precio * i.m_cantidad;
    }

    return montoTotal;
}

function DevolverProducto(id){

    if(this.m_listaDeProductos.find(prod => prod.m_id == id)){

        return producto;
    }
    else{
        console.log("no existe");
    }

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
}

function QuitarCarrito(e){

    const btn = e.target;
    const id = btn.getAttribute("id");
    console.log(productosEnCarrito);
}


DesplegarProductos();
GetBtnAgregar();
GetBtnQuitar()
