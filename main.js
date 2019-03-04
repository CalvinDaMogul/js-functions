//Calvin Foster
//JayZ
//Prince
//John Doe 


// const firstname = 'Calvin';
// const lastname = 'Foster';
// console.log(firstname +' '+ lastname);
// console.log(`${firstname} ${lastname}`);

// const firstname1 = 'John';
// const lastname1 = 'Doe';
// console.log(`${firstname1} ${lastname1} `);

// const firstname2 = 'J';
// const lastname2 = 'Cole';
// console.log(`${firstname2} ${lastname2}`);


const namePrinter = (firstname, lastname) => {
    console.log(`${firstname} ${lastname}`);
};

namePrinter('Calvin', 'Foster');
namePrinter('Tobe', 'Nwigwe');






const nuggetizer = (animal) => {
    return `processed ${animal}` ;
};

console.log(nuggetizer('pig'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('chicken'));
console.log(nuggetizer('beef'));



const dogBreed = (dogname) => {
    return `my favorite dog breed is ${dogname}`
}

console.log(dogBreed('pitbull'));




const dogBreedDiv = document.getElementById('dog-breeds');
console.log('dogbreedDiv', dogBreedDiv);
dogBreedDiv.innerHTML = dogBreed('pitbull');

const nuggetizerDiv = document.getElementById('nuggets');
console.log('nuggetizerDiv', nuggetizerDiv);
nuggetizerDiv.innerHTML = nuggetizer('chicken');
nuggetizerDiv.innerHTML += nuggetizer('deer');

const printToDom = (divId, textToPrint) => {
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML += textToPrint;
};

printToDom('nuggets', ' eewwwwww');
printToDom('nuggets', nuggetizer('bear'));

let bandNumber = 1;

const addBand = (bandName) => {
    const bandText = `<h5>${bandNumber}. ${bandName}</h5>`;
    bandNumber =bandNumber + 1;
    printToDom('band-list', bandText);
    
};

addBand('Outkast');
addBand('The Roots');
addBand('Jimi Hendrix');