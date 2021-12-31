const numbers = [1, 2, 3, 4];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2===0 ){
        rta = true;
        break;
    }
}
console.log(rta);


const orders = [
    {
      customerName: "Nicolas",
      total: 500,
      delivered: true,
    },
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

const rta3 = orders.some(item => item.delivered);
console.log(rta3 , 'rta3');