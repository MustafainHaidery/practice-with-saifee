const isEven = (num: number): boolean => num % 2 === 0;


const dynamicValue: string = isEven(5) ? 'The number is odd' : 'The number is even';

console.log(dynamicValue); 
