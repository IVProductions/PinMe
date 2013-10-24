<?php
$con = new mysqli("mysql.stud.ntnu.no", "simoneik_admin", "komtekpete", "simoneik_wankerthegame");
if (mysqli_connect_errno()) {
    die(mysqli_connect_error());
}

$data = file_get_contents("php://input");
$objData = json_decode($data)->data;
$objData2 = json_decode($data)->mongo;
//$fuck = $_REQUEST[data];


$statement = $con->prepare(
//"SELECT list_of_names FROM ActiveWanks WHERE wankd_id = ?"
"UPDATE ActiveWanks SET list_of_names = 'SYRELEIF' WHERE wankd_id = ?"
);

$statement->bind_param("i",$objData);

$rowNames = '';
$statement->bind_result($rowNames);

$statement->execute();

//while ($result = $statement->fetch()){
	//print $rowNames."\n";
//	$output[]=$result;
//}
//print(json_encode($output));
echo($objData2);
mysqli_close();

?>