<?php

// Allow from any origin
if(isset($_SERVER["HTTP_ORIGIN"]))
{
    // You can decide if the origin in $_SERVER['HTTP_ORIGIN'] is something you want to allow, or as we do here, just allow all
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
else
{
    //No HTTP_ORIGIN set, so we allow any. You can disallow if needed here
    header("Access-Control-Allow-Origin: *");
}

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 600");    // cache for 10 minutes

if($_SERVER["REQUEST_METHOD"] == "OPTIONS")
{
    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT"); //Make sure you remove those you do not want to support

    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    //Just exit with 200 OK with the above headers for OPTIONS method
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
 
 $sql  = "Select * from  racking";
 $result = $conn->query($sql);

    while($row = $result->fetch_assoc())
    {
        $response[] = array(
            'rid'   => $row['rack_code'],
            'rack' => $row['rack'],
            'mtrl' => $row['material'],
            'bch'   => $row['batch'],
            'bsap'   => $row['batch_sap'],
            'boq' => $row['boq'],
            'qtyp' => $row['qty_pack'],
            'spl'   => $row['supplier'],
            'qtys' => $row['qty_ps'],
            'qtyw'   => $row['qty_pw']


        ) ;
    }
    
 echo json_encode($response);
 ?>
