<?php
    include(dirname(dirname(__FILE__)).'/init.php'); 

    $file = dirname(dirname(__FILE__)) . '/' . urldecode($_GET['f']);

    if(is_file($file)) {
        
        header('Content-type: application/octet-stream');
        header('Content-Disposition: attachment; filename=mi-iconica-botella.png');
        readfile($file);
        exit();
    }
?>