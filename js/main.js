const width = 400;
const height =  400;

let objetivo = {
    x: obtenerNumeroAleatorio(width),
    y: obtenerNumeroAleatorio(height)
};
let $mapa = document.querySelector('#mapa');
let $distancia = document.querySelector('#distancia');
let click = 0;
$mapa.addEventListener('click', function (e) {//si queremos escuchar cuando el usuario da click
    console.log('click');
    click++;
    let distancia = obtenerDistancia(e, objetivo);
    let distanciaPista = obtenerPista(distancia);
    $distancia.innerHTML =`<h2>${distanciaPista}<h2/>`;

    if (distancia < 20){
        alert(`Excelente 😎, encontraste el tesoro en ${click} clicks!`);
        location.reload();
    }
}); 