let productosEnCarrito=[];

function ImplementarStorage(){
    
    if (JSON.parse(localStorage.getItem("carrito"))) {
            
        productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
    
    }else{
    
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
        productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
    }

}

ImplementarStorage();

const TotalCarrito = () =>{
    return productosEnCarrito.reduce((acc, prod) => acc +  prod.precio * prod.cantidad, 0);
}

const carrito = document.getElementById("Pcarrito");


if (productosEnCarrito.length == 0) {
    

    carrito.innerHTML = "<div><p class='titulo'>No hay productos en el carrito</p></div>"
}
else{

    for (const i of productosEnCarrito) {
        
        const {id, nombre, precio, cantidad, img} = i;
        
        carrito.innerHTML += "<div class='divCarrito'><p>"+nombre+"</p><p>"+cantidad+"</p><p>"+'$'+precio+"</p></div>";
    }

    const divPrecioTotal = document.createElement("div");
    divPrecioTotal.className = "divCarrito";
    divPrecioTotal.innerHTML = "<p>Precio Total:</p><p>"+'$'+TotalCarrito()+"</>";
    carrito.append(divPrecioTotal);
}




