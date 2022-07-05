 
function Producto(id, nombre, precio, img){

        this.m_id = id;
        this.m_nombre = nombre;
        this.m_precio = precio;
        this.m_cantidad = 1;
        this.m_img = img;
}

const Bifera = new Producto(1, "Bifera", "30000","../img/misc/Bifera.png");
const Cacerola20cmAqua = new Producto(2, "Cacerola20cmAqua", "20000","../img/misc/Cacerola20cmAqua.png");
const Cacerola24cmRosa = new Producto(3, "Cacerola24cmRosa", "25000","../img/misc/Cacerola24cmRosa.png");
const Cuadrada24cmAqua = new Producto(4, "Cuadrada24cmAqua", "25000","../img/misc/Cuadrada24cmAqua.png");
const Cuadrada24cmTerra = new Producto(5, "Cuadrada24cmTerra", "35000","../img/misc/Cuadrada24cmTerra.png");
const FlipMangoRosa = new Producto(6, "FlipMangoRosa", "38000","../img/misc/FlipMangoRosa.png");
const SarténChef = new Producto(7, "SarténChef", "21000","../img/misc/SarténChef.png");
const SarténContemporánea24cmRosa = new Producto(8, "SarténContemporánea24cmRosa", "30000","../img/misc/SarténContemporánea24cmRosapng");
const SartenNUIT = new Producto(9, "SartenNUIT", "25000","../img/misc/SartenNUIT.png");
const Savarin24 = new Producto(10, "Savarin24", "12000","../img/misc/Savarin24.png");
const UtensillosRosa = new Producto(11, "UtensillosRosa", "8000","../img/misc/UtensillosRosa.png");
const CacerolaMoka = new Producto(12, "CacerolaMoka", "24000","../img/misc/CacerolaMoka.png");
const SarténAqua18cm = new Producto(13, "SarténAqua18cm", "18000","../img/misc/SarténAqua18cm.png");

let productosEnCarrito=[];

let carrito;

let productosEnVenta=[
    Bifera,
    Cacerola20cmAqua,
    Cacerola24cmRosa,
    Cuadrada24cmAqua,
    Cuadrada24cmTerra,
    FlipMangoRosa,
    SarténChef,
    SartenNUIT,
    Savarin24,
    UtensillosRosa,
    CacerolaMoka,
    SarténAqua18cm
]

function ImplementarStorage(){
    
    if (JSON.parse(localStorage.getItem("carrito"))) {
            
        productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
    
    }else{
    
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
        productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
        console.log(productosEnCarrito);
    }

}

function DesplegarProductos(){

    let tabla = document.getElementById("tabla");

    for (const i of productosEnVenta) {
        
        let divCardTabla = document.createElement("div");
        let divCeldaTabla = document.createElement("div");
        let imgTabla = document.createElement("img");
        let divBtnTabla = document.createElement("div");
        let inputAgregar = document.createElement("input");
        let inputQuitar = document.createElement("input");
    
        inputAgregar.type = "button";
        inputQuitar.type = "button";
        inputAgregar.className = "btnAgregarCarrito"
        inputQuitar.className = "btnQuitarCarrito"

        inputAgregar.id = i.m_id;
        inputQuitar.id = i.m_id;
        

        divBtnTabla.className= "divBtn";
        divCardTabla.className = "celda";
        tabla.append(divCardTabla);
        divCardTabla.append(divCeldaTabla);
        divCardTabla.append(imgTabla);


        divCardTabla.append(divBtnTabla);
        divBtnTabla.append(inputAgregar);
        divBtnTabla.append(inputQuitar);

        imgTabla.src = i.m_img;
        divCeldaTabla.innerHTML = "<p>"+" "+i.m_nombre+" -"+"</p> <p>"+"$"+i.m_precio+"</p>";
    
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


ImplementarStorage();
DesplegarProductos();
GetBtnAgregar();
GetBtnQuitar()
