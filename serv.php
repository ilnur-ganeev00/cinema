<?php

// var_dump($_POST);

define('CLIENTS', 'clients.txt');

session_start();

// $test = file(CLIENTS);
// var_dump($test);

if (isset($_FILES)){
    foreach($_FILES as $file);
    saveFile($file);
}

if (validate($_COOKIE)) {
    header('location: /?error_form=Вы уже отправляли форму, не нужно делать это повторно.');
} else {
    if (validate($_POST)) {
    $client = New Client;
    $client->checkData($_POST);
    // var_dump($client);

    $_SESSION['clientName'] = $_POST['clientName'];

    setcookie('clientName', $_POST['clientName']);
    // setcookie('clientName', $_POST['clientName'], time()+60*60*24*30);

    $client->saveToFile();

    header('location: /thanks.php?clientName=' . $_POST['clientName']);

    } else {
        header('location: /?error_name=Не заполнено имя');
    }
}

function saveFile($file){
    $temp_data = explode('.', $file['name']);
    $extenssion = $temp_data[count($temp_data) - 1];
    $name = time() . '.' . $extenssion;
    $dir = __DIR__ . '/uploads/';
    $upload_file = $dir . basename($name);
    move_uploaded_file($file['tmp_name'], $upload_file);
}


function validate($data) {
    if (isset($data['clientName']) && $data['clientName']) {
        return true;
    }
    return false;
}

class Client {
    public $clientName,
    $email,
    $place,
    $some,
    $textarea;


    public function checkData($data) {
        $this->clientName = $data['clientName'];
        if (isset($data['email']) && $data['email']) {
            $this->email = $data['email'];
        }
        if (isset($data['place']) && $data['place']) {
            $this->place = $data['place'];
        }
        if (isset($data['some']) && $data['some']) {
            $this->some = $data['some'];
        }
        if (isset($data['textarea']) && $data['textarea']) {
            $this->textarea = $data['textarea'];
        }

    }

    public function saveToFile(){
        $data = file_get_contents(CLIENTS);
        $new_data = '';
        $new_data .= "\r\n" . 'Имя пользователя: ' . $this->clientName . "\r\n";
        if ($this->email){
            $new_data .= 'Электронная почта: ' . $this->email . "\r\n";
        }
        if ($this->place){
            $new_data .= 'Место: ' . $this->place . "\r\n";
        }
        if ($this->some){
            $new_data .= 'Выбор: ' . $this->some . "\r\n";
        }
        if ($this->textarea){
            $new_data .= 'Комментарий: ' . $this->textarea . "\r\n";
        }
        $new_data .= '________________________________';
        file_put_contents(CLIENTS, $data . $new_data);
    }
}