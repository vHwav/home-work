
    var validID = document.querySelectorAll('.validID');
    var validPWD = document.querySelectorAll('.validPWD');
    var invalid = document.getElementById('ID-invalid');
    var checked = document.getElementById('ID-checked');
    var visible = document.querySelectorAll('.valid-visible');
    var hidden = document.querySelectorAll('.valid-hidden');
    var IDinput = document.getElementById('ID').value;
    var PWDinput = document.getElementById('PWD').value;

    var trueMail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  
    for(var i = 0; i < validID.length; i ++){
        if(trueMail.test(IDinput) === false ){
            invalid.classList.add('action')
        }if(trueMail.test(IDinput) === true){
            checked.classList.add('action')
        }
    }
    

    console.log('a')