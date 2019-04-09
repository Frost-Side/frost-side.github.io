<?
    $host = 'localhost';
    $db   = 'id8196163_orders';
    $user = 'id8196163_root';
    $pass = 'Dthibyf<snbz321!!!';
    $charset = 'utf8';

    try {
        $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);

        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // prepare sql and bind parameters
        $stmt = $conn->prepare("INSERT INTO call_orders (user_firstName, user_phoneNumber)
        VALUES (:user_firstName, :user_phoneNumber)");
        $stmt->bindParam(':user_firstName', $user_firstName);
        $stmt->bindParam(':stu_email', $user_phoneNumber);

        // insert a row
        $user_firstName = $_POST['name'];
        $user_phoneNumber = $_POST['telephone'];
        $stmt->execute();

        echo "New records created successfully";
    }
    catch(PDOException $e)
    {
        echo "Error: " . $e->getMessage();
    }
    $conn = null;
?>