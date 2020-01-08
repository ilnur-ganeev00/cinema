<?php

// var_dump($_POST);

session_start();


if (validate($_COOKIE)) {
    header('location: /?error_form=Вы уже отправляли форму, не нужно делать это повторно.');
} else {
    if (validate($_POST)) {
    $client = New Client;
    $client->checkData($_POST);
    // var_dump($client);

    $_SESSION['clientName'] = $_POST['clientName'];

    setcookie('clientName', $_POST['clientName'], time()+60*60*24*30);

    header('location: /thanks.php?clientName=' . $_POST['clientName']);

    } else {
        header('location: /?error_name=Не заполнено имя');
    }
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
}