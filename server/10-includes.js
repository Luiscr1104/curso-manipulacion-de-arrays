const pets = ['cat', 'dog', 'bat'];

<<<<<<< HEAD
const rta= pets.includes('bat')
console.log(rta);
=======
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }   
}

const rta = pets.includes('dog');
console.log('for', includeInArray);
console.log('Incluede', rta);
>>>>>>> 7882fd5d7b535c4a5602100f9d9bcc7d6f94cc91
