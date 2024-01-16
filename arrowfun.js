const user = {
    username: "Prakhar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// function chai(){
//     let username = "prakhar"
//     console.log(this.username);
// }

// chai()


const chai =() => {
    let username = "prakhar"
    console.log(this.username);
}
// chai()

// print only this cmmnd will give {} curly braces and by printing it through arrow funcction it will give undefined

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,4));

const addTwo = (num1, num2) => num1+num2
// removing curly bracket's and return function called this implicit function whereas explicit function are those function in which we use return function

console.log(addTwo(3,4))