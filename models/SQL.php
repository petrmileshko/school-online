<?php
/**
 * Class SQL Служит для подключения к БД, с использованием Singleton, и использования основных запросов.
 * Code by Aleksand Baukov
 */
namespace School\models;

class SQL {

    private static $instance;
    private $db;

    /**
     * @return SQL
     */
    public static function Instance(){
        if (self::$instance == null){
            self::$instance = new SQL();
        }
        return self::$instance;
    }

    private function __construct() {
        setlocale(LC_ALL, 'ru_RU.UTF8');
        $this->db = new \PDO(DRIVER . ':host='. SERVER . ';dbname=' . DB, USERNAME, PASSWORD);
        $this->db->exec('SET NAMES UTF8');
        $this->db->setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE, \PDO::FETCH_ASSOC);
    }

    /**
     * @param $table
     * @param bool $where_key
     * @param bool $where_value
     * @param bool $fetchAll
     * @return array|mixed
     * Пример :
     * хотим получить = "select * from table where id = 1"
     * пишем = Select('table', 'id', 1)  // 'название таблицы', '', ''
     */
    public function Select($table, $where_key = false, $where_value = false) {

        if ($where_key AND $where_value) {
            $query = "SELECT * FROM " . $table . " WHERE " . $where_key . " = '" . $where_value . "'";
        } else {
            $query = "SELECT * FROM " . $table;
        }

        $q = $this->db->prepare($query);
        $q->execute();

        if ($q->errorCode() != \PDO::ERR_NONE) {
            $info = $q->errorInfo();
            throw new \PDOException($info[2]);
        }

        if ($where_key AND $where_value) {
            return $q->fetch();
        } else {
            return $q->fetchAll();
        }
    }



    //'Insert into table(f1,f2) value(1,2)'
    //insert("goods",['title'=>'Товар 1','price'=>100])
    /**
     * @param $table
     * @param $object
     * @return string
     */
    public function Insert($table, $object) {

        $columns = array();

        foreach ($object as $key => $value) {

            $columns[] = $key;
            $masks[] = ":$key";

            if ($value === null) {
                $object[$key] = 'NULL';
            }
        }

        $columns_s = implode(',', $columns);//"'title','price'"
        $masks_s = implode(',', $masks);//"'title','price'"

        $query = "INSERT INTO $table ($columns_s) VALUES ($masks_s)";

        $q = $this->db->prepare($query);
        $q->execute($object);

        if ($q->errorCode() != \PDO::ERR_NONE) {
            $info = $q->errorInfo();
            throw new \PDOException($info[2]);
        }

        return $this->db->lastInsertId();
    }

    //UPDATE table set count=10,price=1000 where id = 2
    //Update('table', ['count' => 10,'price'=>1000], 'id = 2')

    public function Update($table, $object, $where) {

        $sets = array();

        foreach ($object as $key => $value) {

            $sets[] = "$key=:$key";

            if ($value === NULL) {
                $object[$key]='NULL';
            }
        }

        $sets_s = implode(',',$sets);
        $query = "UPDATE $table SET $sets_s WHERE $where";

        $q = $this->db->prepare($query);
        $q->execute($object);

        if ($q->errorCode() != \PDO::ERR_NONE) {
            $info = $q->errorInfo();
            throw new \PDOException($info[2]);
        }

        return $q->rowCount();
    }

    //Delete('table', 'id = 2')
    public function Delete($table, $where) {

        $query = "DELETE FROM $table WHERE $where";
        $q = $this->db->prepare($query);
        $q->execute();

        if ($q->errorCode() != \PDO::ERR_NONE) {
            $info = $q->errorInfo();
            throw new \PDOException($info[2]);
        }

        return $q->rowCount();
    }

    public function Password ($name, $password) {

        return strrev(md5($name)) . md5($password);
    }
}

// пример использования
// $obj = School\models\SQL::Instance()->insert("Users", ['login'=> 'Alex', 'fio'=>'Alexandr Baukov']);
// $odj = School\models\SQL::Instance()->Select('Users', 'id', 3);
// $obj = School\models\SQL::Instance()->Update('Users', ['access_id' => 4], 'id = 3')
// $odj = School\models\SQL::Instance()->Delete('Users', 'id = 3');
//