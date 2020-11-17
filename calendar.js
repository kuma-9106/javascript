  function calendar() {
      
    "use strict";
    
    var calendarEl = document.getElementById('calendar');
    var calendarNode = new FullCalendar.Calendar(calendarEl, {
      
      themeSystem: 'bootstrap4',
          header: {
            left: 'today,prev,next',
            center: 'title',
            right: 'custom1'
          },
          customButtons: {
            custom1: {
              text: 'カレンダーコピー',
              click: function click() {}
            }
          },
          events: [{
            start: '2020-10-01',
            customer: true,
            supplier: true
          }, {
            start: '2020-09-02',
            customer: true,
            supplier: true
          }, {
            start: '2020-09-03',
            customer: true,
            supplier: true
          }, {
            start: '2020-09-04',
            customer: true,
            supplier: true
          }, {
            start: '2020-09-05',
            customer: true,
            supplier: true
          }, {
            start: '2020-09-06',
            customer: true,
            supplier: true
          }, {
            start: '2020-09-07',
            customer: true,
            supplier: false
          }],
          eventAfterRender: function eventAfterRender(event, element) {
            var customerFlug = '';
            var supplierFlug = '';
            var contentNo = 0;
            var content = document.querySelectorAll('.fc-content-skeleton table thead tr td:not(.fc-other-month)');
            var contentNode = Array.prototype.slice.call(content, 0);
            contentNode.forEach(function (elems) {
              var elem = elems;
              contentNo += 1;

              if ((event.customer === true || event.supplier === true) && event.start._i === elem.getAttribute('data-date')) {
                customerFlug = event.customer;
                supplierFlug = event.supplier;
                elem.textContent = null;
                elem.insertAdjacentHTML('beforeend', ConstantsDom.calendarCheck(contentNo, customerFlug, supplierFlug));
              }
            });
          },
          eventAfterAllRender: function eventAfterAllRender(view) {
            // カレンダーコピ(button)
            var copyBtn = document.querySelector('.fc-custom1-button');
            copyBtn.classList.add('js-modal');
            Conversion.attributes(copyBtn, {
              'data-modal': '{"body":"js-modal-calendar-copy", "title": "カレンダーコピー", "style": "290px"}',
              'data-toggle': 'modal',
              'data-target': '.js-modal-content'
            }); // Next(button)

            var nextBtn = document.querySelector('.fc-next-button');
            var nowYear = new Date().getFullYear();
            var nowMonth = new Date().getMonth() + 1;
            var calendarNow = new Date(view.intervalStart._i);
            var calendarYear = calendarNow.getFullYear();
            var calendarMonth = calendarNow.getMonth() + 1;
            var nowTime = new Date(nowYear, nowMonth).getTime();
            var calendarTime = new Date(calendarYear, calendarMonth).getTime();

            if (nowTime === calendarTime) {
              nextBtn.disabled = 'true';
            } else {
              nextBtn.disabled = '';
            } // Event枠描画


            var contentNo = 0;
            var content = document.querySelectorAll('.fc-content-skeleton table thead tr td:not(.fc-other-month)');
            var contentNode = Array.prototype.slice.call(content, 0);
            contentNode.forEach(function (elem) {
              contentNo += 1;

              if (!elem.querySelector('.js-calendar-check-wrap')) {
                elem.insertAdjacentHTML('beforeend', ConstantsDom.calendarCheck(contentNo, false, false));
              }
            });
          }
        
    });

    // calendarNode.render();
    
    alert('test');
    
    
    

  }
  
  calendar();