class Producto {
    constructor(nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id
        this.cantidad = 1
    }
    toString() {
        return `${this.id}. ${this.nombre}: $${this.precio}`;
    }

    productoConCantidad() {
        return `${this.cantidad} ${this.nombre}: $${this.precio}`
    }

}

class CarritoDeCompras {
    constructor() {
        this.productos = []
    }

    validarProducto(id) {
        let productoEncontrado = this.productos.find(producto => producto.id == id)
        return productoEncontrado
    }

    agregarProducto(producto) {
        if (this.validarProducto(producto.id)) {
            producto.cantidad++
        } else this.productos.push(producto);

    }

    calcularTotal() {
        let total = 0;
        for (const producto of this.productos) {
            total += producto.cantidad * producto.precio
        }
        return total;
    }

    mostrarCarrito() {
        let mensaje = "Carrito de compras:\n"
        for (const producto of this.productos) {
            mensaje += producto.productoConCantidad() + "\n"
        }
        return mensaje + "Total: $" + this.calcularTotal();

    }

    finalizarCompra() {
        return alert("El total de la compra es de $ " + this.calcularTotal())
    }
}

let p1 = new Producto("Leche", 1000, 1)
let p2 = new Producto("Pan de Molde", 2000, 2)
let p3 = new Producto("Queso", 1200, 3)
let p4 = new Producto("Mermelada", 890, 4)
let p5 = new Producto("Azúcar", 1300, 5)

let arrayProductos = [p1, p2, p3, p4, p5]

function encontrarProducto(idProducto) {
    let obtenerProducto = arrayProductos.find(producto => producto.id === idProducto)
    return obtenerProducto;
}

let carrito = new CarritoDeCompras();

function mostrarProductos(productos) {
    return productos.map(producto => producto.toString()).join("\n");
}

alert("Productos disponibles:\n" + mostrarProductos(arrayProductos))


let rta = ""

function seleccionarItems() {
    let seleccionar = Number((prompt("Ingrese el id del producto que desea agregar al carrito")))

    if (seleccionar <= 0 || seleccionar >= arrayProductos.length) {
        alert("Ingrese un id válido")
    } else {
        carrito.agregarProducto(encontrarProducto(seleccionar));
        alert(carrito.mostrarCarrito());
        rta = prompt("Desea seguir agrenando productos? s/n")
        if (rta == "n") {
            carrito.finalizarCompra()
        } else if (rta =="s") {
            seleccionarItems();
        } else {
            alert("Ingrese una respuesta valida")
            seleccionarItems();
        }
    }
}

seleccionarItems()








