// dates

let myDate = new Date()
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date("01-14-2023")
// console.log(mycreateDate.toLocaleString());

let myTimeStamp  =Date.now()
// console.log(mycreateDate.getTime());
// console.log(Date.now()/1000);

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

//  '${newDdate.getDay()} and the time'

newDate.toLocaleString('default', {
  weekday: "long",  
})

