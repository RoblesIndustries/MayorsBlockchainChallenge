<?php


// require '../db/connect.php';
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");
// $obj = json_decode($_POST["x"], false);
//
// $sql = "INSERT INTO users (first_name, last_name, email, password, uuid, wallet_id, access_token) VALUES ($obj->first_name, $obj->last_name, $obj->email, $obj->password, $obj->uuid, $obj->wallet_id, $obj->access_token)";
// $query = mysql_query($sql)

$servername = "localhost:8080";
$username = "root";
$password = "password";
$dbname = "austin";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO users (first_name, last_name, email, password, uuid, wallet_id, access_token) VALUES ('James', 'Kirk', 'john@example.com', 'asdfasdf', 'aesrabwsaserf-era', '2345', 'a;lskdfja;lskdjfa;lskdjf;asldkf')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
