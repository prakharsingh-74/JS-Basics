function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result;
}

const result = addTwoNumbers(3,4)
// console.log("Result:", result);

function loginUserMessage(username = "Prakhar"){
    if(username === undefined){
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Prakhar"));

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "prakhar",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price:399
})

const myNewArray = [200, 400, 100, 660]

function returnSecondValue(getArray){
    return getArray
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));