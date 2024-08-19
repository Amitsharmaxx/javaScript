// // let myArr= [ "amit" , "suman", "hero"];

// // for(let i=0 ; i<myArr.length ; i++){
// //     const elem = myArr[i];
// //     console.log(elem)
// //

// let index = 0;
// while(index <= 10){
//     // console.log("value is :",index)
//     index = index + 2 ;
// }

// const map = new Map()
// map.set('IN' , "india")
// map.set('USA' , "America")
// map.set('ca' , "canada")

// // console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

// //arrow function
// coding.forEach( () => {} )


// const coding = ["js", "react" ,"ruby", "perl","python"]
// coding.forEach((item)=>{
//     console.log(item);

    
// })

// const myNums = [1,2,3,4,5,6,7,78,9,10]
// const newNums = myNums.filter( (num)=>{
//    return num>4
// })
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((bk)=>{
    return bk.genre === 'Science'
  })
//   console.log(userBooks);
  

const number = [1,2,3,4,5,6,7,8,9,10]
const newNumber = number.map((num)=>{ return num+10})
// console.log(newNumber)


const goods = [
    {
        item:'jeans',
        price:999
    },
    {
        item:'shirt',
        price:1999
    },
    {
        item:'shoes',
        price:3999
    },
]

const cart = goods.reduce((acc, item)=> acc + item.price,0)
console.log(`Amout to Pay : ${cart} Only`);
