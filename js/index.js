

function Producto(id, nombre, precio, img){

        this.m_id = id;
        this.m_nombre = nombre;
        this.m_precio = precio;
        this.m_cantidad = 1;
        this.m_img = img;
}

const Bifera = new Producto(1, "Bifera", "30000","../img/misc/Bifera.png");
const Cacerola20cmAqua = new Producto(2, "Cacerola 20cm Aqua", "20000","../img/misc/Cacerola20cmAqua.png");
const Cacerola24cmRosa = new Producto(3, "Cacerola 24cm Rosa", "25000","../img/misc/Cacerola24cmRosa.png");
const Cuadrada24cmAqua = new Producto(4, "Cuadrada 24cm Aqua", "25000","../img/misc/Cuadrada24cmAqua.png");
const Cuadrada24cmTerra = new Producto(5, "Cuadrada 24cm Terra", "35000","../img/misc/Cuadrada24cmTerra.png");
const FlipMangoRosa = new Producto(6, "Flip Mango Rosa", "38000","../img/misc/FlipMangoRosa.png");
const SarténChef = new Producto(7, "Sartén Chef", "21000","../img/misc/SarténChef.png");
const SarténContemporánea24cmRosa = new Producto(8, "Sartén Contemporánea 24cm Rosa", "30000","../img/misc/SarténContemporánea24cmRosapng");
const SartenNUIT = new Producto(9, "Sarten NUIT", "25000","../img/misc/SartenNUIT.png");
const Savarin24 = new Producto(10, "Savarin 24cm", "12000","../img/misc/Savarin24.png");
const UtensillosRosa = new Producto(11, "Utensillos Rosa", "8000","../img/misc/UtensillosRosa.png");
const CacerolaMoka = new Producto(12, "Cacerola Moka", "24000","../img/misc/CacerolaMoka.png");
const SarténAqua18cm = new Producto(13, "Sartén Aqua 18cm", "18000","../img/misc/SarténAqua18cm.png");

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
    }

}

function DesplegarProductos(){

    let tabla = document.getElementById("tabla");

    for (const i of productosEnVenta) {
        
        const {m_id, m_nombre, m_precio, m_cantidad, m_img} = i;

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

        inputAgregar.id = m_id;
        inputQuitar.id = m_id;
        

        divBtnTabla.className= "divBtn";
        divCardTabla.className = "celda";
        tabla.append(divCardTabla);
        divCardTabla.append(divCeldaTabla);
        divCardTabla.append(imgTabla);


        divCardTabla.append(divBtnTabla);
        divBtnTabla.append(inputAgregar);
        divBtnTabla.append(inputQuitar);

        imgTabla.src = m_img;
        divCeldaTabla.innerHTML = "<p>"+m_nombre+"</p> <p>"+"$"+m_precio+"</p>";
    
        inputAgregar.value = "Agregar";
        inputQuitar.value = "Quitar";
    
    }
}

function ActualizarNumeroCarrito() {

    let precioP = document.getElementById("precio");

    let cantidadDeProducto = 0;

    for (let i = 0; i < productosEnCarrito.length; i++) {
        const element = productosEnCarrito[i];
        cantidadDeProducto += element.m_cantidad;
    }

    precioP.innerHTML = cantidadDeProducto;
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
    }
    else{
        
        productosEnCarrito.push(productoEnVenta);
    }
    
    ActualizarNumeroCarrito();

    showToast();

    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));

}

function QuitarCarrito(e){
    
    const btn = e.target;
    const id = btn.getAttribute("id");
    
    let productoEnVenta =  productosEnVenta.find(producto => producto.m_id == id);
    
    let productoEncarrito = productosEnCarrito.find(product => product.m_id ==  productoEnVenta.m_id ); 
    
    if (productoEncarrito) {
        
        let cantidadDeProducto = productoEncarrito.m_cantidad;
        
        if (cantidadDeProducto > 1) {
            
            productoEnVenta.m_cantidad--;
            
        }
        else{

            let index = productosEnCarrito.indexOf(productoEncarrito);
            productosEnCarrito.splice(index, 1);        
        }
    }
    else{
        
        console.log("producto no existe");
        
    }


    ActualizarNumeroCarrito();
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

const showToast = () =>{

    Toastify({
        text: "Agregaste Producto al Carrito",
        duration: 5000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#FFBCBC",
          color: "black",
          with: "200px",
          height: "100px",
        },
        onClick: function(){} // Callback after click
      }).showToast();

}


ImplementarStorage();
DesplegarProductos();
GetBtnAgregar();
GetBtnQuitar()
