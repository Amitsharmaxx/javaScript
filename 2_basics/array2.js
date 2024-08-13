//Mergin two arrays using concat 
const marvel =["iron man" , "thor","spiderman"]
const dc = ["superman","flash","batman"]

const heroes=marvel.concat(dc)
console.log(heroes)


//mergin arrays using spread (...)

const allHero = [...marvel , ...dc]
console.log(allHero)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) 