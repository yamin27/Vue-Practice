/**
 * Created by lafij on 7/11/17.
 */

new Vue({
    el: '#vue-app',

    data: {
        name: 'Yamin Alam Sarker',
        post: 'Software Engineer'
    },

    methods: {
        greet:function(time){
            return 'good ' + time + ' ' + this.name;
        },

        vatman:function(valo){
            return "vatman on fire " + valo;
        }

    },


});