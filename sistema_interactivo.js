//Sistema interactivo en javascript

// Aqui declaro dos constantes para almacenar el nombre y otra para la edad segun lo que escriba el usuario en el prompt
const nombre = prompt("Escribe tu nombre: ");
const edad = prompt("Escribe tu edad: ");

// Aqui verifico si la edad ingresada es un numero, sino lo es se muestra un error en consola
if (isNaN(edad)) {
    console.error("Por favor, ingresa una edad válida en números.");
}
// Si es la constante es un numero pasa a verificar en este condicional si es mayor o igual a 18 años, si es asi se muestra un mensaje de bienvenida para mayores de edad
else if (edad >= 18) {
    console.log(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
}

// En caso contrario se muestra un mensaje de bienvenida para menores de edad
else {
    console.log(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y pronto podrás explorar el mundo de la programación!`);
}