const accountId = 144533
let accountEmail = "prakhar@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "24350"
accountCity = "bengalauru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
