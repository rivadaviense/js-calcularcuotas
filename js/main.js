let precio = 0;

while (true) {
    precio = parseFloat(prompt("Ingrese el valor del producto"));

    if (precio > 0 && !isNaN(precio)) {
        break; 
    } else {
        alert("Ingrese un valor mayor a 0");
    }
}

    
let tarjeta;
    while (true) {
    tarjeta = prompt(`
        Seleccione una tarjeta:
        1. Visa 
        2. Mastercard`
        ); 
    if (tarjeta === "1" || tarjeta === "2" ) {
        break;
    }
    else {
    alert ("La opción seleccionada es inválda");    
    }    
    }   
    

let cuotas;
    while (true){
        cuotas = prompt(`
            Seleccione las cuotas:
            1. En 3 cuotas
            2. En 6 cuotas
            3. En 12 cuotas`
        );
    if (cuotas === "1" || cuotas === "2" || cuotas === "3" ) {
        break;
    } 
    else {
    alert ("La cantidad de cuotas es inválida");    
    }
    }
          

function calcularcuotas (precio, tarjeta, cuotas){
    switch (cuotas){
        case "1":
        return precio / 3;
        case "2":
        return precio / 6;
        case "3":
        return precio / 12;
        
    }

    
}
let resultado = calcularcuotas (precio, tarjeta, cuotas)
alert(`
    DETALLES DE SU COMPRA: 
    -Precio del producto: ${precio} pesos
    -Tarjeta seleccionada: ${tarjeta === "1" ? "Visa" : "Mastercard"}
    -Cuotas seleccionadas: ${cuotas}
    -La cuota por mes es de: ${resultado.toFixed(2)}`

);

