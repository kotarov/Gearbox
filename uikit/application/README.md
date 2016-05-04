# UI Kit for Applications
Use to creat DB applications

*This is extension of [UIKit](http://getuikit.com/). It helps you to create and support easly DB applications.*


## INSTALL
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


## INIT of data
HTML pages are cached, so the data that must be filled to withdraw with ajax request.

### html
```html
<select data-get="filte.to.json"></select>
...
<input data-get="file.to.vlue">
...
<textarea data-get="file.to.value"></textarea>
```

### json
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


## TABLES
Requires jquery dataTable plugin. This triggers are called from forms after submit.

### html
```html
    <table id="table"
        data-trigger-reload="trigger-when-must-reload-alldata" 
        data-trigger-update="trigger-when-must-update-row"
        data-trigger-add="trigger-when-must-add-new"
        data-trigger-delete="trigger-when-must-delete-row" 
    >
    <script> $("#table").dataTable() </script>
    <form id="new-item" data-trigger="trigger-when-must-add-new"></form>
```
### json
```javascript
{ data: [["d1","d2"...],["a1","a2"...]....] }
OR
{ data: [{"key1":"d1", "key2": "d2"...},{"key1":"a1", "key2":"a2"...}....] }
```


## FORM / DIALOG Init
All forms are inside modal dialogs.

### html
```html
<a href="#dialog" data-uk-modal 
    data-populate='{"field":"value",...}' 
    data-get="field1=val1&field2=val2"
> Click me</a>
...
<div id="dialog" class="uk-dialog" data-get="url://of.json.data">
    <div> <span name="id"></span> </div>
    <form>
        <input name="id">
    </form>
</div>
<script>
    $("#dialog").on("populated", function(e,ret){ /* use: ret.data[0] */ });
</script>
```

### json
```javascript
{   data: [{ fieldname1:"data", fieldname2:"data" ... }] }
```

## FORM Submit
All forms are offset by AJAX and always sent via POST. To send files not first screen anything extra.

### html
```html
<div class="uk-modal" data-hide-on-submit>
    <form action="url.to.submit" data-trigger="call-back-trigger">
        <input type="text" name="filename">
        <input type="file" name="file">
        <select type="submit">
            <option> value </option>
        </select>
        <button type="submit"> Submit </button>
    </form>
</div>
```

### json
```javascript
{   success: "Message of success"
    id: 3,
    data: [ { "1","2","3" } ]
}
OR
{   required: ["fieldnme1","fieldname2"] }
OR
{   error: "Error message" }
```


## DEPENDANCES
When the value of control depends on the value of another. Depended values are submitted via GET request if is set attribute "data-get". If there are more depended ids, "data change" is activated following a change in the first.

### html
```html
<select id="tag_id1"></select>
<input data-depends-on="#tag_id1,#tag_id2" data-get="url.of.new.data">
```

### json
```javascript
{ data: [{"id":"d1","text":"d2",...}]  }
```



## SELECT2


```html
 <select class="select2"
  data-ajax--url="ajax.php?f=..."
  data-placeholder="bla bla"
  data-allow-clear="true"
  data-templateSelection='<i class="{{icon}}"> {{text}}'
  data-templateResult
></select>
```

### json
```javascript
{ id: 1, text: "name", icon:"icon" ...}
```



## TOGGLE
Directly to change value without modal

### html
```html
    <a  href="url.of.toggle"
        data-toggle="field"
        dat-post='{"id":"d1","field2":"field2"}' 
        data-trigger="call-back-trigger"
    > Click </a>
```

### json
```javascript
{   
    id:1, 
    data: [{"d1","d2",....}],
    sucess: "Success message"
}
```
