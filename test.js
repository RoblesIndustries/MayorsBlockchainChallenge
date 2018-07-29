var FileAPI = require('file-api')
  , File = FileAPI.File
  , FileList = FileAPI.FileList
  , FileReader = FileAPI.FileReader
  ;

var fs = require('fs');
var blobUtil = require('blob-Util');

var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'austin',
  // insecureAuth: true,
  //port: '8080'
});

// connection.connect();

// var user_1 = {
//   first_name: "James",
//   last_name: "Kirkkkkkkk",
//   email: "james.douglass.kirk@gmail.com",
//   password: "asdfasdf"
// }
//
//

function getFilesizeInBytes(filename) {
    const stats = fs.statSync(filename)
    const fileSizeInBytes = stats.size
    return fileSizeInBytes
}

fs.open("files/James_Kirk_PDF.pdf", 'r', function (status, fd) {
    if (status) {
        console.log(status.message);
        return;
    }
    var fileSize = getFilesizeInBytes("files/James_Kirk_PDF.pdf");
    var buffer = new Buffer(fileSize);
    fs.read(fd, buffer, 0, fileSize, 0, function (err, num) {

        var query = "INSERT INTO files SET ?",
            values = {
                file_name: 'testt.pdf',
                file: buffer
            };
        db.query(query, values, function (err, result) {
            if(err)throw err;
            console.log("1 record inserted");
        });

    });
});

// var reader = new FileReader();
// var file = new File("3-pager-draft.pdf");
//
// reader.onload = function() {
//     var data = reader.result;
//     var blob = blobUtil.arrayBufferToBlob(data);
//     var array = new Int8Array(data);
//     // console.log(blob.size);
//     console.log(array);
//     // output.value = JSON.stringify(array, null, '  ');
//     // window.setTimeout(ReadFile, 1000);
// };
//
// reader.readAsArrayBuffer(file);

// *************
// db.connect(function(err) {
//   var filex = new File("test.png");
//   var query = "INSERT INTO files SET ?",
//               values = {
//                   file_name: 'test.png',
//                   file: filex
//               };
//           db.query(query, values, function (err, result) {
//               if(err)throw err;
//               console.log("1 record inserted");
//           });
// });

// db.connect(function(err) {
//   var reader = new FileReader();
//   var query = "SELECT file FROM files WHERE file_name = 'test.png'"
//               // values = {
//               //     file_name: 'test.png',
//               //     file: filex
//               // };
//           db.query(query, function (err, result) {
//               if(err)throw err;
//               console.log(JSON.stringify(result));
//               var binary = '';
//               var array = new Int8Array(result);
//               var t = JSON.stringify(result);
//
//               console.log(t[0]['file']);
//               // reader.onload = function() {
//               //     var data = reader.result;
//               //     //var blob = blobUtil.arrayBufferToBlob(data);
//               //     var array = new Int8Array(data);
//               //     // console.log(blob.size);
//               //     console.log(array);
//               //     // output.value = JSON.stringify(array, null, '  ');
//               //     // window.setTimeout(ReadFile, 1000);
//               // };
//               // reader.readAsArrayBuffer(JSON.stringify(result));
//           });
//
// });

// var doc = new jsPDF()
//
// doc.text('Hello world!', 10, 10)
// doc.save('a4.pdf')

// pool.query('insert into users set ?', user_1, function (err, results, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', results[0].solution);
// });

// pool.getConnection(function(err, connection) {
//   connection.query('insert into users set ?', user_1, function (err, result) {
//     console.log("Inside query");
//
//     connection.release();
//
//     if (err) {
//       throw err;
//     } else {
//       console.log(result);
//     }
//   });
// });

// setInterval(function () {
//   connection.query('insert into users set ?', user_1, function (err, result) {
//     console.log("Inside query");
//     if (err) {
//       throw err;
//     } else {
//       console.log(result);
//     }
//   });
// }, 5000);

// connection.query('insert into users set ?', user_1, function (err, result) {
//   console.log("Inside query");
//   if (err) {
//     throw err;
//   } else {
//     console.log(result);
//   }
// });
