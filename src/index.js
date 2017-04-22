import './index.css';
import numeral from 'numeral';//handy for formatting numbers

const courseValue = numeral(1).format('$0,0.00');
console.log(`I would pay ${courseValue} for this course`);//eslint-disable-line no-console