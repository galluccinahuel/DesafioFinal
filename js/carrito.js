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
    return productosEnCarrito.reduce((acc, prod) => acc +  prod.m_precio * prod.m_cantidad, 0);
}

const carrito = document.getElementById("Pcarrito");


if (productosEnCarrito.length == 0) {
    

    carrito.innerHTML = "<div><p class='titulo'>No hay productos en el carrito</p></div>"
}
else{

    for (const i of productosEnCarrito) {
        
        const {m_id, m_nombre, m_precio, m_cantidad, m_img} = i;
        
        carrito.innerHTML += "<div><p>"+m_nombre+"</p></div>";
    }


}




