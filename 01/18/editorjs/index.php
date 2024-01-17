<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Editor JS</title>
  <script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
  <script src="https://cdn.jsdelivr.net/npm/@editorjs/header@latest"></script>
  <script src="https://cdn.jsdelivr.net/npm/@editorjs/list@latest"></script>
  <script src="https://cdn.jsdelivr.net/npm/@editorjs/code@latest"></script>
  <script src="https://cdn.jsdelivr.net/npm/@editorjs/link@latest"></script>
  <script src="https://cdn.jsdelivr.net/npm/@editorjs/image@latest"></script>
  <script src="https://cdn.jsdelivr.net/npm/@editorjs/embed@latest"></script>
</head>
<body>
  <div name="editor" id="editor" style="border: 3px solid #ccc;"></div>
  <button onClick="editorSave()">Save</button>

<?php
print_r($_POST);
?>

<script>
// Backend request to load saved data
async function prevData() {
  let result;

  result = await fetch("data.json", {
    method: "GET",
  })
  .then((response) => response.json())
  .then((response) => result = response);

  return result;
}

const editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holder: 'editor',

   onReady: async () => {
      console.log('Editor.js is ready to work!');

      const text = await prevData();

      editor.blocks.render(text);
   },

   /**
    * onChange callback
    */
  //  onChange: (api, event) => {
  //    console.log('Now I know that Editor\'s content changed!', event)
  //  },

  /**
   * Enable autofocus
   */ 
  autofocus: true,

  /**
   * Previously saved data that should be rendered
   */
  // data: jd,

  /** 
   * Available Tools list. 
   * Pass Tool's class or Settings object for each Tool you want to use 
   */ 
  tools: { 
    header: Header, 
    list: List,
    code: CodeTool,
    linkTool: {
      class: LinkTool,
      config: {
        endpoint: '/link.php', // Your backend endpoint for url data fetching,
      }
    },
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: 'http://localhost:3001/image.php', // Your backend file uploader endpoint
        }
      }
    },
    embed: Embed,

  }, 
});


function editorSave() {
  editor.save().then((outputData) => {

  console.log(JSON.stringify(outputData));

  fetch("save.php", {
    method: "POST",
    body: JSON.stringify(outputData),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((response) => response.json())
  .then((json) => console.log(json));

  }).catch((error) => {
    console.log('Saving failed: ', error)
  });
}


</script>

<pre>
<?php
print_r(json_decode(file_get_contents('data.json'), true));
?>
</pre>

</body>
</html>