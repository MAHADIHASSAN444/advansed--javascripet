const students =[
    {id: 21 , name: "omor sany"},
    {id: 34 , name: "Maannaaaa"},
    {id: 41 , name: "dipjol"},
    {id: 45 , name: "shabnur"}
]
const names = students.map(s =>s.name);
const ids = students.map(s =>s.id);
const bigger = students.filter(s =>s.id>40);
const bigger1 = students.find(s =>s.id>40);
console.log(bigger1);