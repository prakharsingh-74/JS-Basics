// ++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), heap (non-primitive)

let myYoutubename = "conatusgaming"
let anothername = myYoutubename
console.log(anothername);


let userone = {
    email: "user@google",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "hitesh@google.com"

console.log(userone.email);
console.log(usertwo.email);