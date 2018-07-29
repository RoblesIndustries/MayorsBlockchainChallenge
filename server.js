var http = require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var data = JSON.stringify({
  wallet_email: "james@digitaltown.com",
  wallet_amount: 0.5
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

var user_access_token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk3YThjNTA3MTNhYWE2NjQ5MmE1ZjU5YzY3NjhiMzZhNTY0ZDUzNDYxNGFmZTJiYjI3MGM1MTgwMjM3NGZhNWFlMDA1ZWE2OTk1NzhmNTA5In0.eyJhdWQiOiIxMTkiLCJqdGkiOiI5N2E4YzUwNzEzYWFhNjY0OTJhNWY1OWM2NzY4YjM2YTU2NGQ1MzQ2MTRhZmUyYmIyNzBjNTE4MDIzNzRmYTVhZTAwNWVhNjk5NTc4ZjUwOSIsImlhdCI6MTUzMjgxMDg2NSwibmJmIjoxNTMyODEwODY1LCJleHAiOjE1NDE0NTA4NjUsInN1YiI6Ijg2NDEiLCJzY29wZXMiOlsiSUQiLCJlbWFpbCIsInByb2ZpbGUiLCJidXNpbmVzcyIsImF2YXRhciJdfQ.HMXCCmKHDotl9f-wT8h47F4oxxrq6e1UMR4IgQkFpwyHgPfh57k1mrbnw10thUPnxvXy9HNnT8H2swYY7059ifs9BFiVzEiZ9dwFEhKIyG4eQOWYlm1wFa4pfBTloRUhMXtRmxaHVwQgA3hKT67eVYysTP7dnDy9RlYUK137RGzADrEaZKB90JNM3x4566bHGReCQ31Nd7fAvexdZiU6e7GVPkuQ1GDUhpUL0HhqxFc6vkyYNpNW9akcCgEqOUAx4LJQUzj1Q4R6JAn0c1rIU4PLz_bkL4FE_rusgEaD-mWkhPJ4CKCOXC_XnESYChpOJ0RHUEbgTsrjjS43CjIm_cYH7Of_uDjAlVUN1rslWuSqXmk4RWBdmnUUH38a1r6OEtFXp1WSa5qHzr4_Brkh6rRKwmE4cEKjtBI-jV7BVBH7BqRsi5yi8Pfz4Lh3oMZHpQ1hi-5iK3PFQhOzRekE_8NmsZ0zg2TUgM5OLPra_YjR5Bhs3qxhs_SLGfnM9kgYiE_ehNdznnZMHAskdHyTtWXR4cyaw4dtbFLTRSp3XR-Y-BwEdYOsyc4V1RZuPUysO1oNoJnKlb3pwu5F0ocyfOQi0491SefFHd7li5vHWUU3rInP3OyJs07h2ab9ZBpZ4aia84lTttJllcR5HO3DjDZMeBBmk3OhhHTTpTA6bWE"
// Creating a new user with entered credentials

xhr.open("POST", "https://wallet-api.digitaltown.com/api/v1/wallets/" + "3308" + "/transfers/email?userID=acfa4a04-74ba-11e8-bafc-06e27ab0abf8");
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.setRequestHeader("APIKey", 'uk6kxk8fzy6jtbknl18v');
xhr.setRequestHeader("authorization", user_access_token)
xhr.send(data);

var user_access_token = "Bearer "


// Create a new DT account using API // Done
// Have the user enter a new "payment" code
// Get the QR code for the user
// Print the QR code
// Have the User upload the file
// Hash The file
// Save the Hash and TimeStamp on Blockchain list
// Save the "original version" of the file
