//singleton
//   Object.create 
//This is constructor method in js which is in singleton

//object literals 

// const student = {
//     name:"amit",
//     rollNO : 41,
//     locations : "delhi",
//     email: "amit@123.com"
// } 

// // console.log(student)

// student.name = "sumit"
// console.log(student)


//=======================================================//
// singleton  - using constructor method

// const tinderUser = {}

// tinderUser.id ="123abc"
// tinderUser.name="sam"
// tinderUser.isLoggedIn = false

// console.log(tinderUser)

// const userData = {
//     email:"someone.com",
//     Name : { //we can do nesting inside nesting
//         firstName:"amit",
//         MiddleName:"",
//         lastName:"sharma"
//     }
    
// }

// console.log(userData.Name)
// console.log(userData)




// const obj1 = {
//     1:"a",
//     2:"b"
// }

// const obj2 = {
//     3:"c",
//     4:"d"
// }

// const obj3 = {
//     5:"e",
//     6:"f"
// }
// //to merge 3 objects
// const ans = Object.assign(obj1 ,obj2 ,obj3)


// //or we can use spread to merge objects

// const add = {...obj1, ...obj2, ...obj3}
// console.log("using object.assign : ",ans)
// console.log("using spread :",ans)

const course = {
    courseName:"js ",
    price :1000,
    Teacher:"Amit",
}

const{courseName}=course
console.log(courseName)


