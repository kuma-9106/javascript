document.addEventListener('DOMContentLoaded', function() {

    let btn = document.querySelectorAll('.btn');
    
    btn.addEventListener('click', e => {
      var target = e.target.data;
      console(target);
    });

  });