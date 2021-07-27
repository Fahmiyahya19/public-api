<?php

$data = file_get_contents('jajal.json');
$siswa = json_decode($data, true);
var_dump($data);


?>