// var http = require('http');
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var wID;
var user;
var video = document.querySelector('#camera-stream'),
    image = document.querySelector('#snap'),
    start_camera = document.querySelector('#start-camera'),
    controls = document.querySelector('.controls'),
    take_photo_btn = document.querySelector('#take-photo'),
    delete_photo_btn = document.querySelector('#delete-photo'),
    download_photo_btn = document.querySelector('#download-photo'),
    error_message = document.querySelector('#error-message');
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext('2d');
    canvas2 = document.getElementById('myCanvas2');
    ctx = canvas2.getContext('2d');
    var x = document.getElementById("snap");
    x.style.visibility = "hidden";
    var y = document.getElementById("black");
    y.style.visibility = "hidden";
    var z = document.getElementById("myCanvas");
    z.style.visibility = "hidden";

    var a = document.getElementById('brand');
    a.style.visibility = "hidden";
    var number = 13.9*4;


function newUserSignUp() {
    var attributes = {
      first_name: $("#first_name").val(),
      last_name: $("#last_name").val(),
      email: $("#email").val(),
      password: $("#password").val()
    };

    var data = JSON.stringify(false);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        var result = JSON.parse(this.responseText);
        user = result;
        console.log(result.sso.uuid)
        console.log(result.profile.accessToken)
        // saveNewUser(result, $("#password").val());
        walletID(result.sso.uuid, result.profile.accessToken)
        readWalletIdFile()
        console.log(wID);
        console.log("End of Sign UP")
        console.log("http://digitaltown.app.link/gmGHUkpJOL" + "," + attributes.email + "," + attributes.first_name + " " + attributes.last_name + "," + wID + ",USD,digitaltownQR");
        // http://digitaltown.app.link/gmGHUkpJOL,md@comencia.com,Mike Cartwright,881,USD,digitaltownQR
        //
        jQuery('#qrcodeCanvas').qrcode({
        		text	: "http://digitaltown.app.link/gmGHUkpJOL" + "," + attributes.email + "," + attributes.first_name + " " + attributes.last_name + "," + wID + ",USD,digitaltownQR"
        });

        // makePrintOut();
      }
    });

    xhr.open("POST", "https://v1-sso-api.digitaltown.com/api/v1/users");
    xhr.setRequestHeader("APIKey", 'uk6kxk8fzy6jtbknl18v');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(attributes));
}

// The getUserMedia interface is used for handling camera input.
// Some browsers need a prefix so here we're covering all the options
navigator.getMedia = ( navigator.getUserMedia ||
                      navigator.webkitGetUserMedia ||
                      navigator.mozGetUserMedia ||
                      navigator.msGetUserMedia);


if(!navigator.getMedia){
  displayErrorMessage("Your browser doesn't have support for the navigator.getUserMedia interface.");
}
else{

  // Request the camera.
  navigator.getMedia(
    {
      video: true
    },
    // Success Callback
    function(stream){

      // Create an object URL for the video stream and
      // set it as src of our HTLM video element.
      video.src = window.URL.createObjectURL(stream);

      // Play the video element to start the stream.
      video.play();
      video.onplay = function() {
        showVideo();
      };

    },
    // Error Callback
    function(err){
      displayErrorMessage("There was an error with accessing the camera stream: " + err.name, err);
    }
  );

}



// Mobile browsers cannot play video without user input,
// so here we're using a button to start it manually.
start_camera.addEventListener("click", function(e){

  e.preventDefault();

  // Start video playback manually.
  video.play();
  showVideo();

});


take_photo_btn.addEventListener("click", function(e){

e.preventDefault();

var snap = takeSnapshot();

// Show image.
image.setAttribute('src', snap);
image.classList.add("visible");
image.style.zIndex = 4;

// Enable delete and save buttons
delete_photo_btn.classList.remove("disabled");
download_photo_btn.classList.remove("disabled");

// Set the href attribute of the download button to the snap url.
//download_photo_btn.href = snap;

// Pause video playback of stream.
video.pause();

});


delete_photo_btn.addEventListener("click", function(e){

  e.preventDefault();

  // Disable delete and save buttons
  delete_photo_btn.classList.add("disabled");
  download_photo_btn.classList.add("disabled");

  // Resume playback of stream.
  video.play();

});



function showVideo(){
  // Display the video stream and the controls.

  //hideUI();
  video.classList.add("visible");
  //controls.classList.add("visible");
}


function takeSnapshot(){
// Here we're using a trick that involves a hidden canvas element.



var width = 440;
    height = 440;

if (width && height) {

  // Setup a canvas with the same dimensions as the video.
  canvas.width = width;
  canvas.height = height;

  // Make a copy of the current frame in the video on the canvas.
  context.drawImage(video, 0, 0, width, height);

  // Turn the canvas image into a dataURL that can be used as a src for our photo.
  return canvas.toDataURL('image/png');
}
var z = document.getElementById("myCanvas");
x.style.visibility = "hidden";
}


function showQR2(){

var x = document.getElementById("uploadedQR");
//x.style.zIndex = -1;

var img = new Image;

img.onload = function() {
ctx.drawImage(img, 13.9*4, 127.8*4, 272.2*4, 272.2*4);
//alert('the image is drawn');
}
img.src = URL.createObjectURL(x.files[x.files.length-1]);
}


function putBrand(){
 var brand = document.getElementById('brand');
 ctx.drawImage(brand,13.9*4,398*4-30,200,200);
 ctx.font = "63px Georgia";
 ctx.fillText("https://austin.city", 90*4,420*4);
 //(brand,13.9,413.9,22.2,22.2);
}
function putName(){
 /*
 context.font = "60pt Calibri";
//alert(context.font.value)
font_num = 60;

while(context.measureText(name).width>canvas.width){
  font_num = font_num -2;
  font_string = font_num +"pt Calibri";
  context.font = font_string;

}
//alert(name);
context.fillStyle = "white";
context.fillText(name,400,150);
 */
 ctx.fillStyle = "#000000";
 ctx.font = "70px Georgia";

 var first = "James";
 var last  = "Kirk";
 ctx.fillText(first, 120, 60);
 ctx.fillText(last, 120, 120);
 /*
 ctx.font = "30px Georgia";
 ctx.fillText("Austin.city",10,340);
*/
}


function displayErrorMessage(error_msg, error){
  error = error || "";
  if(error){
    console.log(error);
  }

  error_message.innerText = error_msg;

  //hideUI();
  error_message.classList.add("visible");
}

function addName() {
  var first_name = $("#first_name").val();
  var last_name  = $("#last_name").val();

  max_name = first_name;
  if(last_name.length > first_name.length){
    max_name = last_name;
  }

  ctx.font = "180pt Calibri";
    //alert(context.font.value)
    font_num = 180;

  while(ctx.measureText(max_name).width>(760-number-number)){
      font_num = font_num -2;
      font_string = font_num +"pt Calibri";
      ctx.font = font_string;

  }
    //alert(name);
  ctx.fillStyle = "black";
  ctx.fillText(first_name,13.9*4,font_num+50);
  ctx.fillText(last_name,13.9*4,font_num+font_num+120);
}

function makePrintOut() {
  putBrand();
  showQR2();
  addName();
  document.getElementById("snap").style.zIndex= 4;
  var image = document.getElementById('snap');
  ctx.drawImage(image,1200-440-number,64,110*4,110*4);
}

function readWalletIdFile()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "http://localhost:8000/text.json", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                console.log(allText);
                var response = JSON.parse(allText);
                console.log(response.walletID);
                var feedback = response.walletID;
                wID = feedback;
                console.log(feedback);
                // return feedback
            }
        }
    }
    rawFile.send(null);
}

function walletID(uuid, accessToken) {
  var data = JSON.stringify(false);

  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      var result = this.responseText;
      console.log('***' + result + '***')
    }
  });

  var url = "http://localhost:3000/walletID/" + uuid + "/" + accessToken;

  xhr.open("GET", url);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(data);
}

function getUserWalletID(user_uuid, user_access_token) {
  var data = JSON.stringify(false);

  var attributes = {
    userID: user_uuid
  };

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      var result = JSON.parse(this.responseText);
      console.log(result);
      var rt = '2111';
      return rt;
    }
  });

  xhr.open("GET", "https://wallet-api.digitaltown.com/api/v1/wallets");
  xhr.setRequestHeader("APIKey", 'uk6kxk8fzy6jtbknl18v');
  xhr.setRequestHeader("authorization", user_access_token)
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(attributes));
}

function saveNewUser() {
  var data = JSON.stringify(false);

  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.onreadystatechange = function(data) {
    if (this.readyState == 4 && this.status == 200) {
        console.log("Done Adding user");
    }
  };
  var access_token = "Bearer " + user.profile.accessToken;
  var wallet_id = wID;
  var pp = $("#payment_pin").val();
  // console.log(wallet_id);

  var url = "http://localhost:3000/adduser/" + user.sso.first_name + "/" + user.sso.last_name + "/" + user.sso.email + "/" + $("#password").val() + "/" + user.sso.uuid + "/" + wallet_id + "/" + pp + "/" + access_token;

  xhr.open("GET", url);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(data);
}
