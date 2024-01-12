const name = "prakhar"
const repocount = 50

console.log(name + repocount + "value");

console.log('hello my name is ${name} and my repo count is ${repocount}'); //modern way of concatenating strings

const gameName = new String('hiteshhc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(anotherString);

const newStringOne = " prakhar "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prakhar.com/prakhar%20singh"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));