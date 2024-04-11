let Usuario1 = "Ludmila";
let nomUsuario = prompt ("Ingrese su nombre de usuario");

if (nomUsuario == "Ludmila") {
    alert("Bienvenido/a " + nomUsuario);
} else {
    alert("Nombre de usuario incorrecto")
};

function sumar(ropa1, ropa2){
    console.log("El costo es de " + (ropa1 + ropa2)) ;
}

sumar(18500, 10000);

for (let remera = 1; remera <= 10; remera = remera + 1 ) {
    console.log ("tipos de remeras " + remera);

    for (let tipos = 1; tipos <= 5; tipos = tipos + 1) {
        console.log ("remera " + tipos);
    }
}

let promo = Number (prompt("Cual promo quiere"));
switch (promo) {
    case 1: 
    console.log ("promo 1");
    break;
    case 2: 
    console.log ("promo 2");
    break;
    case 3:
        console.log ("promo 3");
        break;
    default: 
     alert("esta promo no existe");
}