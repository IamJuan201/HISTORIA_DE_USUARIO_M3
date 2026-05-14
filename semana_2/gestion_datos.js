//Task 1
const productos = {
    producto1: {id: 1, nombre: "Cafe", precio: 2000},
    producto2: {id: 2, nombre: "Leche", precio: 4700},
    producto3: {id: 3, nombre: "Azucar", precio: 2500},
    producto4: {id: 4, nombre: "Pan", precio: 3800},
    producto5: {id: 5, nombre: "Atun", precio: 5200},
};

console.log("Productos:");
console.log("-------------------");
console.log(productos);


// Task 2

let numeros = new set([1, 2, 3, 4, 4, 4, 5, 5]);

// Numeros sin duplicados
console.log("\nNumeros sin duplicados:");
console.log("-------------------");
console.log(numeros);

// Añadir numero
numeros.add(6);
console.log("Se agrego el numero 6: ", numeros);

// Comprobar un numero
console.log("Existe el 7?", numeros.has(7));

// ELiminar un numero
numeros.delete(2);
console.log("Se elimino el 2: ", numeros);

// Recorrer el set con for of
console.log("Recorrer el set: ")
for (const numero of numeros){
    console.log(numero);
}


// Task 3
const categorias = new Map();
categorias.set("Computadores", "Laptop");
categorias.set("Alimentos", "Cafe");
categorias.set("Accesorios", "Audifonos");
 
console.log("\nCategorías de los productos:");
console.log(categorias);


// Task 4
console.log("\nIteraciones:");
 
// for in sobre el objeto
console.log("\nfor in sobre el objeto:");
for (const clave in productos) {
  console.log(clave, ":", productos[clave]);
}
 
// for of sobre el Set
console.log("\nfor of sobre el Set:");
for (const numero of numeros) {
  console.log(numero);
}
 
// for Each sobre el Map
console.log("\nfor Each sobre el Map:");
categorias.forEach((valor, clave) => {
  console.log("Categoría:", clave, " Producto:", valor);
});

// Task 5

// Función que valida si un producto tiene id, nombre y precio
function validarProducto(producto) {
  if (!producto.id) {
    console.log("Error: falta el id");
    return false;
  }
  if (!producto.nombre) {
    console.log("Error: falta el nombre");
    return false;
  }
  if (!producto.precio || producto.precio <= 0) {
    console.log("Error: precio inválido");
    return false;
  }
  return true;
}
 
console.log("\nValidaciones:");
 
// Probar con los productos del objeto
for (const clave in productos) {
  const esValido = validarProducto(productos[clave]);
  console.log(productos[clave].nombre, "- válido:", esValido);
}
 
// Probar con un producto incompleto
const productoMalo = { id: 4, nombre: "", precio: 0 };
console.log("Producto incompleto - válido:", validarProducto(productoMalo));
 