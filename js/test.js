(function(){
    
    'use strict';
    
    var likeComponent = Vue.extend({
       props: ['msg'],
       data: function(){
           return {
               count: 0
           }
       },
       template: '<button @click="countUp">{{ count }} {{ msg }}</button>' ,
       methods: {
           countUp: function(){
               this.count++;
               this.$emit('increment');
           }
       }
    });
    
    var vm = new Vue({
        el: '#app',
        components: {
            'like-component' : likeComponent
        },
        data: {
            total: 0,
            currentTab: 1
        },
        methods: {
            incrementTotal: function(){
                this.total++;
            },
            toggle: function(num){
               this.currentTab = num 
            }
        }
    });
    
    
    
    
    
})();