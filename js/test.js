document.addEventListener('DOMContentLoaded', function() {

    let btns = document.querySelectorAll('.btn');
    
    for(var i = 0; i < btns.length; i++){
        btns[i].addEventListener('click',function(){
            alert('クリックされたよ！');
            this.style.color = 'red';
        },false);
    }

  });