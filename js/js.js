const App = {
  init: function () {
    console.log("Start");
    this.components.createComponents();

    console.log("After start", this);
  },

  events: {},

  store: {},

  router: {
    routes: []
  },

  components: {
    app: null,

    createComponents: function () {
      //Componente Principal
      this.app = document.createElement("div");
      //Setar estilo da div
      this.app.style.width = "100%";
      this.app.style.height = "100%";
      this.app.style.position = "fixed";
      this.app.style.top = "0";
      this.app.style.backgroundColor = "gray"; //Remover
      document.body.appendChild(this.app);

      //Painel lateral esquerdo
      this.painelEsquerdo = document.createElement("div");
      this.painelEsquerdo.style.width = "30%";
      this.painelEsquerdo.style.height = "100%";
      this.painelEsquerdo.style.position = "fixed";
      this.painelEsquerdo.style.zIndex = "1";
      this.painelEsquerdo.style.top = "0";
      this.painelEsquerdo.style.overflowX = "hidden";
      this.painelEsquerdo.style.backgroundColor = "pink"; //Remover
      this.painelEsquerdo.style.left = "0";
      this.app.appendChild(this.painelEsquerdo);
      //Centralizando elementos do painel
      this.centralizar = document.createElement("div");
      this.centralizar.style.width = "150px";
      this.centralizar.style.borderRadius = "50%";

      //Painel lateral direito
      this.painelDireito = document.createElement("div");
      this.painelDireito.style.width = "70%";
      this.painelDireito.style.height = "100%";
      this.painelDireito.style.position = "fixed";
      this.painelDireito.style.zIndex = "1";
      this.painelDireito.style.top = "0";
      this.painelDireito.style.overflowX = "hidden";
      this.painelDireito.style.backgroundColor = "silver";//Remover
      this.painelDireito.style.right = "0";
      this.app.appendChild(this.painelDireito);
      //Centralizando elementos do painel
      this.centralizar = document.createElement("div");
      this.centralizar.style.width = "150px";
      this.centralizar.style.borderRadius = "50%";

    },




  },
};


App.init();