const botonesDiv = document.getElementById ('botones');
const resultadoDiv = document.getElementById ('resultado');

resultadoDiv.innerHTML = "Empezamos funciones hoy";
botonesDiv.innerHTML = `
<button class="btn btn-dark col-3 mt-2 mb-2" onclick="letraRepeat()">Repetir letra</button>
`;

function letraRepeat() {
    let letra = prompt("ingrese una letra ");
    let cantidad = parseInt(prompt("ingrese  la cantidad a repetir"));
    resultadoDiv.innerHTML = ""
    for (let i = 1; i<= cantidad; i ++){
        resultadoDiv.innerHTML += letra;
    }

}
