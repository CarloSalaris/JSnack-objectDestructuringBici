/* Creare un array di oggetti: 
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

const bikesArray = [
    {
        nome: 'Atala',
        peso: 8
    },{
        nome: 'Bianchi',
        peso: 10
    },{
        nome: 'Cinelli',
        peso: 5
    },{
        nome: 'De Rosa',
        peso: 8
    },{
        nome: 'Cipollini',
        peso: 13
    },{
        nome: 'Carrera',
        peso: 7
    }
];

console.log(...bikesArray);

const container = document.getElementById("container");

let lightBike = bikesArray[0];

bikesArray.forEach(element => {
    if (element.peso < lightBike.peso) {
        lightBike = element;
    }
});

console.log(lightBike);

const {peso, nome} = lightBike;

container.innerHTML = `La bici più leggera è la ${nome} con il peso di ${peso}kg`






