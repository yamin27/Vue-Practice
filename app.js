/**
 * Created by lafij on 7/11/17.
 */

new Vue({
    el: '#vue-app',

    data: {
        name: '',
        boyos: '',
        post: 'Software Engineer',
        age: 25,
        x:0,
        y:0,
    },

    methods: {
        greet:function(time){
            return 'good ' + time + ' ' + this.name;
        },

        vatman:function(valo){
            return "vatman on fire " + valo;
        },
        add: function (increment) {
            this.age += increment;
        },
        subtruct: function(decrement){
            this.age -= decrement;
        },

        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        click: function(){
            alert('you clicked me');
        },

        logName: function () {
            console.log('your keyup work on name');
        },

        logAge: function () {
            console.log('yoru keyup work on age' );
        }



    },




});