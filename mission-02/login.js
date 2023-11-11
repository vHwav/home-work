var validItems = document.querySelectorAll('.valid');
var invalid = document.querySelectorAll('.valid-invalid');
var checked = document.querySelectorAll('.valid-checked');
var visible = document.querySelectorAll('.valid-visible');
var hidden = document.querySelectorAll('.valid-hidden');
var IDinput = document.getElementById('ID').value;
var PWDinput = document.getElementById('PWD').value;
var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;


(function () {
   

    if( IDinput === reg_email) {
        checked.addClassName('action');        
    }else{
        invalid.addClassName('action');
    };
    
    console.log('작동은 하니');

});
