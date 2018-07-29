<?php
//provide your hostname, username and dbname
$host=""; 
$username="";  
$password="";
$db_name=""; 
//$con=mysql_connect("$host", "$username", "$password")or die("cannot connect");
$con=mysql_connect("$host", "$username", "$password");
mysql_select_db("$db_name");
$book_name = $_POST['book_name'];
$sql = "select book_name from book_mast where book_name LIKE '$book_name%'";
$result = mysql_query($sql);
while($row=mysql_fetch_array($result))
{
echo "<p>".$row['book_name']."</p>";
}
?>
