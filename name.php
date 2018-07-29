<?php
require '../db/connect.php';
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);

$sql = "INSERT INTO users (first_name, last_name, email, password, uuid, wallet_id, access_token) VALUES ($obj->first_name, $obj->last_name, $obj->email, $obj->password, $obj->uuid, $obj->wallet_id, $obj->access_token)";
$query = mysql_query($sql)

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
