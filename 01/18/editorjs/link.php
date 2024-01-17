<?php

$data = array(
  'success' => 1,
  "meta" => [
      "title" => "CodeX Team",
      "description" => "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
      "image" => [
          "url" => "/meta_img.png"
      ]
  ]
);

// $array = [
//   "one" => "text",
//   "array" => [
//     "two" => "text",
//   ]
// ];

Header("application/json; charset=utf-8");
echo json_encode($data);