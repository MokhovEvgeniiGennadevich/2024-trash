<?php
if (isset($_POST) !== false)  {
  $postData = file_get_contents('php://input');
  $data = json_decode($postData, true);
  file_put_contents('data.json', json_encode($data));
}

Header("application/json; charset=utf-8");
echo json_encode($data);
?>