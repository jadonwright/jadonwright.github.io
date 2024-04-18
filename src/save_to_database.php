<html>
    <head>
    </head>
    <body>
        <?php
            if (empty($_GET["data"]) != true) {
                $file = fopen("data.txt","a");
                if (fwrite($file, $_GET["data"])) {
                    echo "Su" . "ccess!";
                };
                fclose($file);
            }
        ?>
    </body>
</html>