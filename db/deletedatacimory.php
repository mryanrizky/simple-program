<?php
 
if(isset($_SERVER["HTTP_ORIGIN"]))
{
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
else
{
    header("Access-Control-Allow-Origin: *");
}

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 600");

if($_SERVER["REQUEST_METHOD"] == "OPTIONS")
{
    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");

    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    exit(0);
}

 $serverName = "localhost";
 $userName = "root";
 $passWord = "";
 $dbName = "cimory";

 $EndCode = file_get_contents('php://input');
 $DeCode  = json_decode($EndCode,true);
 
 $conn = new mysqli($serverName,$userName,$passWord,$dbName);
 if ($conn->connect_error) {
	   die("Connection Failed !!");
 }

    $rid = $DeCode['rid'];
    
    $sql  = "Delete from racking where rack_code='$rid'";

    if ($conn->query($sql) === true) 
    { $pesan = "Delete Record successfully";} 
    else 
    { $pesan = $conn->error;}
    
    $response[] = array("Message" => $pesan) ;
    echo json_encode($response);

?>