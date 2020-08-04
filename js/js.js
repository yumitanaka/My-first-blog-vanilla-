const App = {
    init: function () {
      console.log("Start");
      this.components.createComponents();
  
      console.log("After start", this);
    },
  /////lalalallaa
  
    events: {},
  
    store: {}, 
  
    router: {
      routes: []
    },
  
    components: {
      app: null,
  
      createComponents: function () {},
    },
  };
  
  
  App.init();