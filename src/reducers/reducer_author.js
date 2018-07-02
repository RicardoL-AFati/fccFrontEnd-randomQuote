let last;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

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

const getName = () => {
  const name = ronNickNames[getRandomInt(0, ronNickNames.length)];
  if (name === last) getName();
  last = name;
  return name;
};

export default function () {
  return getName();
}
