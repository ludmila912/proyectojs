const registrarse = document.querySelector("#registrarse");
registrarse.addEventListener("click", mostrarAlerta);

function mostrarAlerta() {
    alert(prompt("ingrese su nombre de usuario"));
}

/*let Usuario1 = "Ludmila";
let nomUsuario = prompt ("Ingrese su nombre de usuario");

if (nomUsuario == "Ludmila") {
    alert("Bienvenido/a " + nomUsuario);
} else {
    alert("Nombre de usuario incorrecto")
};
*/
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

function Campera(color, precio, talle) {
 this.color = color;
 this.precio = precio;
 this.talle = talle;
}

const campera1 = new Campera("negro", 5000, "s");
const campera2 = new Campera("rojo", 4500, "M");
const campera3 = new Campera("verde", 5000, "s");
const campera4 = new Campera("azul", 4500, "M");

console.log(campera1);
console.log(campera2);
console.log(campera3);
console.log(campera4);


function Remera(color, precio, talle) {
    this.color = color;
    this.precio = precio;
    this.talle = talle;
}

const remera1 = new Remera("negro", 3000, "M");
const remera2 = new Remera("blanco", 3000, "s");
const remera3 = new Remera("marron", 3000, "L");
const remera4 = new Remera("amarillo", 3000, "M");


function Pantalones(color, precio, talle) {
    this.color = color;
    this.precio = precio;
    this.talle = talle;
}

const pantalon1 = new Pantalones("negro", 3000, "M");
const pantalon2 = new Pantalones("blanco", 3000, "s");
const pantalon3 = new Pantalones("marron", 3000, "L");
const pantalon4 = new Pantalones("amarillo", 3000, "M");


console.log(remera1);
console.log(remera2);
console.log(remera3);
console.log(remera4);
console.log(pantalon1);
console.log(pantalon2);
console.log(pantalon3);
console.log(pantalon4);


const productos = ["remera2", "remera4", "pantalon3"];

productos.push(prompt ("Agregar producto al carrito"));
console.log(productos);


function sumarProductos(min, max) {
    let total = 0;

    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
}    

console.log(sumarProductos(1,2));