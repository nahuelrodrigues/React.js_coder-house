// SPREAD OPERATOR [...]
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
const valor = sum(...numbers);

document.getElementById("suma").innerHTML = `La suma entre ${numbers.join(
  ","
)} es ${valor}`;

// console.log(numbers);
// console.log(...numbers);

/////////////////////////////////////////////

const animals = ["pigs", "goats", "sheeps"];

// animals.push("dogs");
// animals.push("cats");
// [...animals, 'dogs', 'cats', ...animals]

const newAnimals = [...animals, "dogs", "cats", "rats"];

document.getElementById(
  "array"
).innerHTML = `Estos son todos los animales ${newAnimals.join(",")}`;

//// OBJETOS

const usuarioDatos = {
  primerNombre: "Pablo",
  segundoNombre: "Torres",
};

const usuarioOtrosDatos = {
  direccion: "New Address 123",
  telefono: 35235235,
};

const usuario = {
  ...usuarioDatos,
  ...usuarioOtrosDatos,
};

// console.log(usuario);

let propiedades = "";
Object.entries(usuario).forEach(([key, value]) => {
  propiedades += `${key}: ${value}, `;
});
const textoPropiedades = `Las propiedades del objeto usuario son ${propiedades}`;
document.getElementById("objeto").innerHTML = textoPropiedades;

////////// PROPIEDADES DINAMICAS

// EJEMPLO 1

// let cliente = {
//   id: 21312,
// };

// cliente["nombre"] = "Pablo";

// EJEMPLO 2
const hash = "oasjfoasjf";
const cliente = {
  id: 21312,
  ["nombre " + hash]: "Pablo",
};

// console.log(cliente);

// DEEP MATCHING

const {
  ip: ipAdd,
  mask: maskAdd,
  ip: ipAdd2,
} = {
  ip: "192.168.10.2",
  mask: "255.255.255.0",
};

console.log(ipAdd);
console.log(ipAdd2);
console.log(maskAdd);
