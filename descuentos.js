const precioOriginal = 100;
const descuento = 25;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100-descuento;
    const precioFinal = (precio* porcentajePrecioConDescuento)/100;

    return precioFinal;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const pricevalue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountvalue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(pricevalue, discountvalue);
    
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio final es de $" + precioConDescuento;
}

