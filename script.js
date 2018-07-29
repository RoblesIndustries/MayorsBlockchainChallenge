
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




      //canvas.fillStyle = "blue";
      //drawTwo();
      //ctx.globalCompositeOperation = 'destination-over';




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



  var width = 200;
      height = 200;

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
  ctx.drawImage(img, 13.9, 127.8, 272.2, 272.2);
  //alert('the image is drawn');
  }
  img.src = URL.createObjectURL(x.files[x.files.length-1]);
  }

 function submit(){
   /*
   image = document.getElementById('black');
   ctx.drawImage(image,0,0,300,450);
   */
   putBrand();
   showQR2();
   //takeSnapshot(); 225 275
   putName();
   document.getElementById("snap").style.zIndex= 4;
    //document.getElementById('redbox').style.zIndex = -1;
    var image = document.getElementById('snap');
   ctx.drawImage(image,13.9,13.9,100,100);

   //alert("where is my screenshoot?");


 }
 function putBrand(){
   var brand = document.getElementById('brand');
   ctx.drawImage(brand,13.9,405,40,40);
   ctx.font = "23px Georgia";
   ctx.fillText("https://austin.city", 90,445);
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

/*
  function hideUI(){
    // Helper function for clearing the app UI.

    controls.classList.remove("visible");
    start_camera.classList.remove("visible");
    video.classList.remove("visible");
    snap.classList.remove("visible");
    error_message.classList.remove("visible");
  }
  */
