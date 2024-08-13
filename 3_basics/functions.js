// function sayMyName(){
//     console.log("A")
//     console.log("M")
//     console.log("I")
//     console.log("T")
// }
// sayMyName()  //sayMyName : this is called reference (matlab ye wha rehta hai)
            // If i add () after reference then that is execution EX- sayMyName();

function addTwoNumber(number1 , number2){
    // console.log(number1+number2) NHI KRNA CONSOLE.LOG

    // let result = number1 +number2;
    return  number1 +number2;
}

const answer =addTwoNumber(3,5);
console.log ("Sum is :",answer)




// --------------------------------------------------------------------------------//

const user = {
    username : "amit",
    price :999
}

function handleObjects(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)

}

handleObjects(user)
