// singleton

// object literals
const Jsuser = {
    name: "prakhar",
    "full name": "Prakhar singh",
    mySym: "mykey1",
    age: 19,
    location: "jaipur",
    email: "prakhar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

Jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "prakhar@microsoft.com"
console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greetingtwo = function(){
    console.log(`helllo js user, ${this.name}`);
}

// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingtwo());

// PART-2---------------------------------------------------------

// const tinderUser = new Object() singleton obj
const tinderUser ={} //non-singleton obj

tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Prakhar",
            lastname: "singh"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const users=[
    {
        id:"001",
        email: "h@gmail.com"
    
    },
    {
        id:"002",
        email: "i@yahoo.com"
    },
    {
        id:"003",
        email: "j@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('IsLoggedIn'));

// PART-3 -------------------------------------------------------------Destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Prakhar"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);


const navbar = ({company}) => {

}

navbar(company = "hitesh")