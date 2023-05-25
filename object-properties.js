const students =[
    {id: 21, name:'Allahhamdullilah'},
    {id: 31, name:'Subhan Allah'},
    {id: 41, name:'Allah'},
    {id: 71, name:'Rahman'}
];

const names = students.map( s=> s.name);
const ids = students.map(s=> s.id);
const bigger = students.filter( s=> s.id>40);
const biggerOne = students.find( s=> s.id>40);
console.log(biggerOne);