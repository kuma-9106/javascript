document.addEventListener('DOMContentLoaded', function() {
    
    
    var fullCalendar = this;
    var calendars = document.querySelectorAll('.js-calendar');
    var calendarEl = document.getElementById('calendar');
    var calendarElsNode = '';
    
    if (calendars.length) {
      calendarElsNode = Array.prototype.slice.call(calendars, 0);
      calendars.forEach(function (calendar) {
        var calendarNode = new FullCalendar.Calendar(calendar, {
            themeSystem: 'bootstrap4',
            headerToolbar: {
              left: 'today prev next',
              center: 'title',
              right: false
              },
    //       // customButtons: {
    //       //   custom1: {
    //       //     text: 'カレンダーコピー',
    //       //     click: function click() {}
    //       //   }
    //       // }, 
            locale: 'ja',
            events: [{
              start: '2020-11-01',
              customer: true,
              supplier: true
            }, {
              start: '2020-11-02',
              customer: true,
              supplier: true
            }, {
              start: '2020-11-03',
              customer: true,
              supplier: true
            }, {
              start: '2020-11-04',
              customer: true,
              supplier: true,
              title: 'Happy Bday'
            }, {
              start: '2020-11-11',
              customer: true,
              supplier: true
            }, {
              start: '2020-11-22',
              customer: true,
              supplier: true
            }, {
              start: '2020-11-23',
              customer: true,
              supplier: false
            }],
            selectable: true,
            fixedWeekCount: false,
            dayCellClassNames: 'js-modal',
            eventDidMount: function (event, element) {
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
            eventDidMount: function (view) {
            // // カレンダーコピ(button)
            // var copyBtn = document.querySelector('.fc-custom1-button');
            // copyBtn.classList.add('js-modal');
            // Conversion.attributes(copyBtn, {
            //   'data-modal': '{"body":"js-modal-calendar-copy", "title": "カレンダーコピー", "style": "290px"}',
            //   'data-toggle': 'modal',
            //   'data-target': '.js-modal-content'
            // }); // Next(button)      
            
            //スケジュール追加
                var addSkds = document.querySelectorAll('.fc-daygrid-day-frame');
                addSkds.forEach(function (addSkd){
                  addSkd.setAttribute('data-modal', '{"body":"js-modal-register", "title": "新規追加", "style": "530px"}');
                  addSkd.setAttribute('data-toggle', 'modal');
                  addSkd.setAttribute('data-target', '.js-modal-content');
                });
            
            
            // var weeks = document.querySelectorAll('#calendar .fc-scrollgrid-sync-table tbody tr:last-child');
            //     weeks.forEach(function (week){
            //       week.style.display = 'none';
            //     });
                

            var nextBtn = document.querySelector('.fc-next-button');
            var nowYear = new Date().getFullYear();
            var nowMonth = new Date().getMonth() + 1;
            var calendarNow = new Date(view.intervalStart);
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
        calendarNode.render();
        
      });
    }
    
    let btn = document.querySelectorAll('.btn');
    
    btn.addEventListener('click', e => {
      var target = e.target.data;
      console(target);
    });

  });