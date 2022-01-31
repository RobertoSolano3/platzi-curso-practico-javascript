const precioOriginal = 100;
const descuento = 25;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100-descuento;
    const precioFinal = (precio* porcentajePrecioConDescuento)/100;

    return precioFinal;
}

