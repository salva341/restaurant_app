<?php
require_once "Owners.php";
class API {    
    public function APIindex(){
        header('Content-Type: application/JSON');                
        $method = $_SERVER['REQUEST_METHOD'];
        switch ($method) {
            case 'GET'://consulta
                if($_GET['action']=='owners'){
                    $this->getOwners();
                }
                elseif($_GET['action']=='restaurants'){
                    $this->getRestaurants();
                }
                elseif($_GET['action']=='users'){
                    $this->getUsers();
                }
                elseif($_GET['action']=='tickets'){
                    $this->getTickets();
                }
                else{
                    echo 'There are different resources in this API. Please, ask for one.';
                }
                break;     
            case 'POST'://inserta
                if($_GET['action']=='owners'){
                    $this->saveOwners();
                }
                elseif($_GET['action']=='restaurants'){
                    $this->saveRestaurants();
                }
                elseif($_GET['action']=='users'){
                    $this->saveUsers();
                }
                elseif($_GET['action']=='tickets'){
                    $this->saveTickets();
                }
                else{
                    echo 'There are different resources in this API. Please, ask for one.';
                }
                break;                 
            case 'PUT'://actualiza
                if($_GET['action']=='owners'){
                    $this->updateOwners();
                }
                elseif($_GET['action']=='restaurants'){
                    $this->updateRestaurants();
                }
                elseif($_GET['action']=='users'){
                    $this->updateUsers();
                }
                elseif($_GET['action']=='tickets'){
                    $this->updateTickets();
                }
                else{
                    echo 'There are different resources in this API. Please, ask for one.';
                }        
                break;      
            case 'DELETE'://elimina
                if($_GET['action']=='owners'){
                    $this->deleteOwners();
                }
                elseif($_GET['action']=='restaurants'){
                    $this->deleteRestaurants();
                }
                elseif($_GET['action']=='users'){
                    $this->deleteUsers();
                }
                elseif($_GET['action']=='tickets'){
                    $this->deleteTickets();
                }
                else{
                    echo 'There are different resources in this API. Please, ask for one.';
                }        
                break; 
            default://metodo NO soportado
                echo 'METODO NO SOPORTADO';
                break;
        }
    }

    function getOwners(){
        if($_GET['action']=='owners'){         
            $db = new RestaurantDB();
            if(isset($_GET['id'])){//muestra 1 solo registro si es que existiera ID                 
                $response = $db->getOwner($_GET['id']);                
                echo json_encode($response,JSON_PRETTY_PRINT);
            }else{ //muestra todos los registros                   
                $response = $db->getOwners();              
                echo json_encode($response,JSON_PRETTY_PRINT);
            }
            }else{
                $this->response(400);
            }       
        }

    function saveOwners(){
         if($_GET['action']=='owners'){   
             //Decodifica un string de JSON
             $obj = json_decode( file_get_contents('php://input') );   
             $objArr = (array)$obj;
             if (empty($objArr)){
                 $this->response(422,"error","Nothing to add. Check json");                           
             }else if(isset($obj->name)){
                 $owners = new RestaurantDB();     
                 $owners->insert( $obj->name );
                 $this->response(200,"success","new record added");                             
             }else{
                 $this->response(422,"error","The property is not defined");
             }
         } else{               
             $this->response(400);
         }  
     }

    function updateOwners() {
        if( isset($_GET['action']) && isset($_GET['id']) ){
            if($_GET['action']=='owners'){
                $obj = json_decode( file_get_contents('php://input') );   
                $objArr = (array)$obj;
                if (empty($objArr)){                        
                    $this->response(422,"error","Nothing to add. Check json");                        
                }else if(isset($obj->name)){
                    $db = new RestaurantDB();
                    $db->update($_GET['id'], $obj->name);
                    $this->response(200,"success","Record updated");                             
                }else{
                    $this->response(422,"error","The property is not defined");                        
                }     
                exit;
           }
        }
        $this->response(400);
    }

    function deleteOwners(){
        if( isset($_GET['action']) && isset($_GET['id']) ){
            if($_GET['action']=='owners'){                   
                $db = new RestaurantDB();
                $db->delete($_GET['id']);
                $this->response(204, "success","record deleted");                   
                exit;
            }
        }
        $this->response(400);
    }
    /**
     * Respuesta al cliente
     * @param int $code Codigo de respuesta HTTP
     * @param String $status indica el estado de la respuesta puede ser "success" o "error"
     * @param String $message Descripcion de lo ocurrido
     */
     function response($code=200, $status="", $message="") {
        http_response_code($code);
        if( !empty($status) && !empty($message) ){
            $response = array("status" => $status ,"message"=>$message);  
            echo json_encode($response,JSON_PRETTY_PRINT);    
        }   
    }
}//end class
?>