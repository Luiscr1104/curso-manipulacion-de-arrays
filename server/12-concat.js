const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);    
}

const rta = elements.concat(othersElements);
const rta2 = [...elements, ...othersElements]
console.log('for', newArray);
console.log('concat', rta);
console.log('concat2', rta2);