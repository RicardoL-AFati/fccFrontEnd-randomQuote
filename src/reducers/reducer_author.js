// last holds last generated name (same name isn't returned twice)
let last;
// random number for index
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// nick names given to ron swanson by tom haverford
const ronNickNames = [
  'Ron Corleone',
  'Le-Ron James',
  'Re-Ron',
  'Swiss Family Ron-Binson',
  'Ron-Solo',
  'Rondoleezza Rice',
  'Ron in 60 seconds',
  'Ron "P.Diddy" Combs',
  'Ron-Tanamo Bay',
  'Duke Silver',
  'Ron Swanson',
];
// Gets random name from array, if same as last - calls itself
const getName = () => {
  const name = ronNickNames[getRandomInt(0, ronNickNames.length)];
  if (name === last) getName();
  last = name;
  return name;
};
// reducer function calls getName to return author for application state
export default function () {
  return getName();
}
