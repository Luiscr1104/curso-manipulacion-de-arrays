const elements = ["Fire","Air", "Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join('--0--')
console.log('For', rtaFinal);
console.log('join', rta);

const title = 'Curso de manipulacion de arrys';

const urlFinal = title.split(' ').join('-').toLocaleLowerCase();
console.log(urlFinal);
