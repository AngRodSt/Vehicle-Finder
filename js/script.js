//Declarations

const marca= document.querySelector('#marca');
const modelo = document.querySelector('#modelo');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

let carSearch = {
    marca : '',
    year  : '',
    minimo : '',
    maximo  : '',
    puertas  : '',
    transmision : '',
    color : ''
}


const currentYear = new Date().getFullYear();
const minYear = currentYear - 14;


document.addEventListener('DOMContentLoaded', ()=>{

    //Load Cars
    loadCars(autos)

    //Fill Year Select
    fillSelect();
})

//EventListener
marca = document.addEventListener('change', fillSearch);
year = document.addEventListener('change', fillSearch);
minimo = document.addEventListener('change', fillSearch);
maximo = document.addEventListener('change', fillSearch);
puertas = document.addEventListener('change', fillSearch);
transmision = document.addEventListener('change', fillSearch);
color = document.addEventListener('change', fillSearch);


//Functions

function fillSearch(e){
    carSearch[e.target.id] = e.target.value;
    filterSearch();
    
}
function filterSearch(){
    const resultados = autos.filter(filterBrand).filter(filterYear).filter(filterMin).filter(filterMax).filter(filterDoors).filter(filterTransmition).filter(filterColor);
    console.log(resultados)
    clearHTML();
    if(resultados.length){
        loadCars(resultados);
        console.log('here');
        return;
    };
    noResult();
}

function filterBrand(auto){
    const {marca} = carSearch;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
}
function filterYear(auto){
    const {year} = carSearch;
    if(year){
        return auto.year === parseInt(year)
    }
    return auto;
}

function filterMin(auto){
    const {minimo} = carSearch
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}
function filterMax(auto){
    const {maximo} = carSearch
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}
function filterDoors(auto){
    const {puertas} = carSearch;
    if(puertas){
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}
function filterTransmition(auto){
    const {transmision} = carSearch;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filterColor(auto){
    const {color} = carSearch;
    if(color){
        return auto.color === color;
    }
    return auto;
}


function fillSelect(){
    for(i = currentYear; i>= minYear; i--){
        const options = document.createElement('option');
        options.textContent = i;
        options.value = i;
        year.appendChild(options);
    }
}

function loadCars(autos){
    
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, transmision, color} = auto;
        const carHTML = document.createElement('P');
        carHTML.classList.add('font-bold', 'text-center', 'border-b','font-mono', 'pt-5', 'pb-5')
        carHTML.innerHTML = `
        ${marca} ${modelo} - ${year} - ${precio} - ${puertas} Puertas - Transmision: ${transmision} - Color: ${color}
        `
        resultado.appendChild(carHTML);
    });
}
function noResult(){
    const alert = document.createElement('P');
    alert.classList.add('bg-red-600','text-white','font-bold','text-center','p-3');
    alert.textContent = 'There are no results with the filter';
    resultado.appendChild(alert);
}

function clearHTML(){
    while(resultado.firstChild){
        resultado.firstChild.remove();
    }
}