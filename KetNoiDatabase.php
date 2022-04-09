<?php

use Model\DB;

include("Model/DB.php");

$DB = new DB();
$result = $DB->GetByQuery("");


?>
<table border="1">
    <tr>
        <td>action</td>
        <td>Mã</td>
        <td>Tên</td>
        <td>Mô Tả</td>
    </tr>
      
</table>