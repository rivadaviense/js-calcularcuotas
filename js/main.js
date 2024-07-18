// El usuario ingresa el valor de un producto
let precio = 0;
do {
    precio = parseFloat(prompt("Ingrese el valor del producto. Debe ser mayor a 0"));
    } while (precio <= 0 || isNaN (precio));

// el usuario selecciona la tarjeta para pagar     
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
    
// el usuario selecciona la cantidad de cuotas 
let cuotas;
    while (true){
        cuotas = prompt(`
            Seleccione las cuotas:
            1. En 3 cuotas
            2. En 6 cuotas
            3. En 12 cuotas `
        );
    if (cuotas === "1" || cuotas === "2" || cuotas === "3" ) {
        break;
    } 
    else {
    alert ("La cantidad de cuotas es inválida");    
    }
    }
          
//funcion para calcular las cuotas 
function calcularCuotas (precio, cuotas){
    switch (cuotas){
        case "1":
          return precio / 3;
        case "2":
          return precio / 6;
        case "3":
          return precio / 12;
        default:
          return ("ingreso de cuotas no válidas")
    }
}

// muestra el resultado de la compra 
let resultado = calcularCuotas (precio, cuotas)

alert(`
    DETALLES DE SU COMPRA: 
    -Precio del producto: ${precio} pesos
    -Tarjeta seleccionada: ${tarjeta === "1" ? "Visa" : "Mastercard"}
    -Cuotas seleccionadas: ${cuotas === "1" ? "3 cuotas" : cuotas === "2" ? "6 cuotas" : "12 cuotas"}
    -La cuota por mes es de: ${resultado.toFixed(2)}`
);

