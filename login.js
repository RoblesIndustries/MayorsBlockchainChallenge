var pwd;

function checkPassword() {
  console.log("Checking Password...")
  getUserPassword($("#email").val());
  readPasswordFile();
  var password = pwd;
  console.log(password)
  if ($("#password").val() != password) {
    document.getElementById("response").innerHTML = "Please Try Again";
  } else {
    window.location = 'user.html';
  }
}

function getUserPassword(email) {
  var data = JSON.stringify(false);

  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      var result = this.responseText;
      console.log('***' + result + '***')
    }
  });

  var url = "http://localhost:3000/password/'" + email +"'";

  xhr.open("GET", url);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(data);
}

function readPasswordFile()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "http://localhost:8000/password.json", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                console.log(allText);
                var response = JSON.parse(allText);
                console.log(response.password);
                var feedback = response.password;
                pwd = feedback;
                console.log(feedback);
                // return feedback
            }
        }
    }
    rawFile.send(null);
}
