// Validar solo letras
const regexLetras = /^[A-Za-z]+$/;
console.log(regexLetras.test("Hola")); // true
console.log(regexLetras.test("Hola123")); // false

//Validar solo números
const regexNum = /^[0-9]+$/;
console.log(regexNum.test("12345")); // true
console.log(regexNum.test("12a45")); // false

//Validar correo electrónico
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(regexEmail.test("correo@gmail.com")); // true
console.log(regexEmail.test("correo@.com")); // false

//Validar número telefónico de 10 digitos
const regexTel = /^\d{10}$/;

console.log(regexTel.test("5512345678")); // true
console.log(regexTel.test("12345")); // false

//Validar fecha con formato (YYYY-MM-DD)
const regexFecha = /^\d{4}-\d{2}-\d{2}$/;

console.log(regexFecha.test("2026-04-14")); // true
console.log(regexFecha.test("14/04/2026")); // false

//Validar contraseña fuerte
const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

console.log(regexContraseña.test("Password1")); // true
console.log(regexContraseña.test("password")); // false

//Validar código postal
const regexCP = /^\d{5}$/;

console.log(regexCP.test("55880")); // true
console.log(regexCP.test("5588")); // false

//Validar URL básica
const regexURL = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*$/;

console.log(regexURL.test("https://google.com")); // true
console.log(regexURL.test("google")); // false

//Verificar si un texto contiene números
const regexStringNum = /\d/;

console.log(regexStringNum.test("Hola123")); // true
console.log(regexStringNum.test("Hola")); // false

//Reemplazar espacios múltiples en uno solo
const texto = "Hola     mundo    JS";
const resultado = texto.replace(/\s+/g, " ");

console.log(resultado); // "Hola mundo JS"


