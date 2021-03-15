document.addEventListener('DOMContentLoaded', function() {

    let btn = document.querySelector('.btn');
    
    btn.addEventListener('click', function(e) {
      var target = e.target.data;
      console.log(target);
    });

  });