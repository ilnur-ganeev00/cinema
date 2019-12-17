<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Спасибо</title>
</head>
<body>
    <?php if (isset($_GET['clientName'])) { ?>
    Спасибо, <?php echo $_GET['clientName'] ?>. Ваша заявка отправлена 
    <?php } else {  ?>
    <script>
        window.location = '/';
        // console.log('error');
    </script>
    <?php } ?>
</body>
</html>