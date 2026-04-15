//Doble click
element.addEventListener("dblclick", () => {
    console.log("Doble click detectado");
});

//Mouse sobre elemento
element.addEventListener("mouseover", () => {
    console.log("Mouse encima");
});

//Mouse sale del elemento
element.addEventListener("mouseout", () => {
    console.log("Mouse fuera");
});

//Detectar escritura en input
input.addEventListener("input", (e) => {
    console.log(e.target.value);
});

//Evento sublit de formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
});

//Detectar tecla presionada
document.addEventListener("keydown", (e) => {
    console.log("Tecla:", e.key);
});

//Página cargada
window.addEventListener("load", () => {
    console.log("Página cargada");
});

//Detectar cambio en select
select.addEventListener("change", (e) => {
    console.log("Valor:", e.target.value);
});

//Detectar cambio de tamaño de ventana
window.addEventListener("resize", () => {
    console.log("Ventana redimensionada");
});

// Cuando el usuario sale del input
input.addEventListener("blur", () => {
    input.style.border = "2px solid red";
    console.log("Input inactivo");
});
