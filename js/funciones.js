let obtenerNumeroAleatorio = size => {
    return Math.floor(Math.random() * size); //genera un numero desde 0 hasta el 4
}

let obtenerDistancia = (e, objetivo) => {
    let difX = e.offsetX - objetivo.x;//en donde ha dado click el usuario y lo vamos a restar con la ubi de la imf
    let difY =  e.offsetY - objetivo.y;
    return Math.sqrt((difX * difX) + (difY * difY));
}
let obtenerPista = distancia => {
    if (distancia < 30){
        return "Hirviendo";
    }else if (distancia <40) {
        return "Muy caliente";
    }else if (distancia < 60) {
        return "Caliente";
    }else if (distancia < 80) {
        return "Medio caliente";
    }else if (distancia < 100) {
        return "Muy cálido";
    }else if (distancia < 120) {
        return "Cálido";
    }else if (distancia < 150) {
        return "Medio cálido";
    }else if (distancia < 180) {
        return "Medio frío";
    }else if (distancia < 280) {
        return "Frío";
    }else if(distancia < 300) {
        return "Muy frío";
    }else if(distancia < 320) {
        return 'Helado';
    }else if (distancia < 350) {
        return "Muy helado";
    }else if(distancia < 390) {
        return "Congelado";
    }else{
        return "Muy congelado";
    }
}
