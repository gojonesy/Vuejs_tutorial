new Vue({
  el: '#vue-app',
  data: {
    age: 37,
    x: 0,
    y: 0,
  },
  methods: {
    add: function(years){
      this.age+=years;
    },
    subtract: function(years){
      this.age-=years;
    },
    updateXY: function(event){
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});
