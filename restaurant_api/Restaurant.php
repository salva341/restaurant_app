<?php
class RestaurantsDB {
    
    protected $mysqli;
    const LOCALHOST = '127.0.0.1';
    const USER = 'root';
    const PASSWORD = '';
    const DATABASE = 'restaurant_api_db';
    
    /**
     * Constructor de clase
     */
    public function __construct() {           
        try{
            //conexión a base de datos
            $this->mysqli = new mysqli(self::LOCALHOST, self::USER, self::PASSWORD, self::DATABASE);
            $this->mysqli->set_charset("utf8");
        }catch (mysqli_sql_exception $e){
            //Si no se puede realizar la conexión
            http_response_code(500);
            exit;
        }     
    } 
    
    /**
     * obtiene un solo registro dado su ID
     * @param int $id identificador unico de registro
     * @return Array array con los registros obtenidos de la base de datos
     */
    public function getRestaurant($id=0){      
        $stmt = $this->mysqli->prepare("SELECT * FROM restaurants WHERE id=? ; ");
        $stmt->bind_param('s', $id);
        $stmt->execute();
        $result = $stmt->get_result();        
        $restaurants = $result->fetch_all(MYSQLI_ASSOC); 
        $stmt->close();
        return $restaurants;              
    }
    
    /**
     * obtiene todos los registros de la tabla "people"
     * @return Array array con los registros obtenidos de la base de datos
     */
    public function getRestaurants(){        
        $result = $this->mysqli->query('SELECT * FROM restaurants');          
        $peoples = $result->fetch_all(MYSQLI_ASSOC);          
        $result->close();
        return $peoples; 
    }
    
    /**
     * obtiene todos los registros de la tabla "people"
     * @return Array array con los registros obtenidos de la base de datos
     */

    public function getRestaurantsByUser($user_id){   
        $stmt = $this->mysqli->prepare("SELECT restaurants.* FROM restaurants 
            INNER JOIN owners o ON restaurants.id_owner = o.id
            INNER JOIN users u ON o.id_user = u.id 
            WHERE u.id = ?");
        $stmt->bind_param('s', $user_id);      
        $stmt->execute();
        $result = $stmt->get_result();        
        $restaurants = $result->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $restaurants[0];
    }

    /**
     * añade un nuevo registro en la tabla persona
     * @param String $name nombre completo de persona
     * @return bool TRUE|FALSE 
     */
    public function insert($reference, $name, $email, $phone, $comments, $description){
        $stmt = $this->mysqli->prepare("INSERT INTO restaurants SET `reference`=?,`name`= ?, `email`=?, `phone`=?, `comments`=?, `description`=? ");
        $stmt->bind_param('ssssss', $reference,$name,$email,$phone,$comments,$description);
        $r = $stmt->execute(); 
        $stmt->close();
        return $r;        
    }
    
    /**
     * elimina un registro dado el ID
     * @param int $id Identificador unico de registro
     * @return Bool TRUE|FALSE
     */
    public function delete($id=0) {
        $stmt = $this->mysqli->prepare("DELETE FROM owners WHERE id = ? ; ");
        $stmt->bind_param('s', $id);
        $r = $stmt->execute(); 
        $stmt->close();
        return $r;
    }
    
    /**
     * Actualiza registro dado su ID
     * @param int $id Description
     */
    public function update($id, $name, $email, $phone, $mobile, $comments, $description) {
        if($this->checkID($id)){
            $stmt = $this->mysqli->prepare("UPDATE owners SET `name`= ?, `email`=?, `phone`=?, `mobile`=?, `comments`=?, `description`=? WHERE id = ? ; ");
            $stmt->bind_param('sssssss',$name,$email,$phone,$mobile,$comments,$description,$id);
            $r = $stmt->execute(); 
            $stmt->close();
            return $r;    
        }
        return false;
    }
    
    /**
     * verifica si un ID existe
     * @param int $id Identificador unico de registro
     * @return Bool TRUE|FALSE
     */
    public function checkID($id){
        $stmt = $this->mysqli->prepare("SELECT * FROM owners WHERE ID=?");
        $stmt->bind_param("s", $id);
        if($stmt->execute()){
            $stmt->store_result();    
            if ($stmt->num_rows == 1){                
                return true;
            }
        }        
        return false;
    }

}