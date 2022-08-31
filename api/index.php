<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: *');
ini_set('display_errors',1);

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case "GET":
        $sql = "SELECT * FROM Chanels";
        $path = explode('/',$_SERVER['REQUEST_URI']);
        if(isset($path[2]) && is_numeric($path[2])){
            $sql = " SELECT * FROM Chanels WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id',$path[2]);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }else{
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO Chanels(id,nazwa,ilosc) VALUES (null,:nazwa,:ilosc)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nazwa',$user->name);
        $stmt->bindParam(':ilosc',$user->number);
        if($stmt->execute()){
            $response = ['status'=>1, 'message' => 'Record created'];
        }else{
            $response = ['status'=>0, 'message' => 'failed to create Record'];
        }
        break;
     case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE Chanels SET nazwa =:nazwa, ilosc = :ilosc Where id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id',$user->id);
        $stmt->bindParam(':nazwa',$user->nazwa);
        $stmt->bindParam(':ilosc',$user->ilosc);
        if($stmt->execute()){
            $response = ['status'=>1, 'message' => 'Record Updated'];
        }else{
            $response = ['status'=>0, 'message' => 'failed to update Record'];
        }
        echo json_encode($response);
        break;
    case "DELETE":
        $sql = "DELETE FROM Chanels WHERE id = :id";
        $path = explode('/',$_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id',$path[2]);
        if($stmt->execute()){
            $response = ['status'=>1, 'message' => 'Record Deleted'];
        }else{
            $response = ['status'=>0, 'message' => 'failed to delete Record'];
        }
        echo json_encode($response);
        break;      
}