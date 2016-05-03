#UIkit for Applications
Use to creat DB applications

*This is extension of [UIKit](http://getuikit.com/) you can create nd support easly and quickly DB applications.*

## Installation
```html
<head>
    ...
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.25.0/css/uikit.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.25.0/js/uikit.min.js"></script>
    ...
</head>
<body>
    ...
    <script src="js/application.js"></script>
</body>
```

## Initializing of data
HTML pages are cached, so the data that must be filled to withdraw with ajax request.

### HTML
```html
<select data-get="filte.to.json"></select>
...
<input data-get="file.to.vlue">
...
<textarea data-get="file.to.value"></textarea>
```

### JSON
```javascript
{ 
    data : [
        {
            id : 1, 
            text : "The text goes here",
            name : "OR The text is here"
        },{
            id : 2,
            text : "Second text",
            fieldname : "Some outher data. All data is place in 'data-json' as json"
        }
    ]
}
```

## FORM
## Init

## Submit
All forms are offset by AJAX and always sent via POST
```html
<form action="url.to.submit" data-trigger="name-of-trigger-after-submit"></form>
```
```php
<?php
$ret = array();
$post = filter_var_array($_POST,array(
    'name'=>FILTER_SANITIZE_STRING,
    'id_parent'=>FILTER_VALIDATE_INT,
    'pos'=>FILTER_VALIDATE_INT,
    'description'=>FILTER_SANITIZE_STRING,
    'tags' => FILTER_SANITIZE_STRING
));

if(!$post['name']) $ret['required'][] = 'name';
//if(!$post['id_parent']) $ret['required'][] = 'id_parent';
if(!$post['description']) $ret['required'][] = 'description';
if(!$post['tags']) $ret['required'][] = 'tags';

if(!isset($ret['required'])){
    $sets = array_keys($post);
    $dbh = new PDO('sqlite:'.DB_DIR.'products');
    $sth = $dbh->prepare("INSERT INTO categories (".implode(',', $sets).") VALUES (:".implode(", :", $sets).")");
    $sth->execute($post);
    $_REQUEST['id'] = $dbh->lastInsertId();
    include 'prepareCategories.php';
    include 'getCategories.php';
    $ret['success'] = 'Category with id='.$_REQUEST['id'].' added.';
}

return json_encode($ret);

```
