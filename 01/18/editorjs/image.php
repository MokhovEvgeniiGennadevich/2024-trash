<?php

// file_put_contents("files.json", json_encode($_FILES));

if (isset($_FILES['image']["tmp_name"]) !== false) {
  $ext = pathinfo($_FILES['image']["name"], PATHINFO_EXTENSION);

  $target_file = date('Y-m-d-H-i-s') . '.' . $ext;
  $result = move_uploaded_file($_FILES['image']["tmp_name"], $target_file);

  if (!$result) {
    print_r($result);
  }

  $data = array(
    "success" => 1,
    "file" => [
        "url" => "http://localhost:3001/" . $target_file
    ],
  );
} else {
  $data = array(
    "success" => 0,
  );
}



Header("application/json; charset=utf-8");
echo json_encode($data);
