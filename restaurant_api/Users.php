<?php
class UsersDB {
    
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
    public function checkUser($user,$passwd){      
        $stmt = $this->mysqli->prepare("SELECT id, user_role, coolname FROM users WHERE username=? AND userpass=? ;");
        //$stmt->bind_param('s', $user);
        $stmt->bind_param('ss', $user,$passwd);
        $stmt->execute();
        $result = $stmt->get_result();        
        $peoples = $result->fetch_assoc(); 
        $stmt->close();
        return $peoples;              
    }
}
?>