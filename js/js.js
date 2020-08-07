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
      this.app.style.left = "0";
      //this.app.style.backgroundColor = "gray";  //Remover
      document.body.appendChild(this.app);

      //Painel lateral esquerdo 
      this.painelEsquerdo = document.createElement("div");
      this.painelEsquerdo.style.width = "25%";
      this.painelEsquerdo.style.height = "100%";
      this.painelEsquerdo.style.position = "fixed";
      this.painelEsquerdo.style.zIndex = "1";
      this.painelEsquerdo.style.top = "5%";
      this.painelEsquerdo.style.overflowX = "hidden";
      //this.painelEsquerdo.style.maxWidth="400px";
      //this.painelEsquerdo.style.backgroundColor = "pink"; //Remover
      this.painelEsquerdo.style.left = "0";
      this.app.appendChild(this.painelEsquerdo);

      //Centralizando elementos do painel
      //Painel Top
      this.PainelTop = document.createElement("div");
      this.PainelTop.style.width = "100%";
      this.PainelTop.style.height = "50%";
      this.PainelTop.style.marginTop = "0%";
      this.PainelTop.style.maxWidth = "100%";
      //this.PainelTop.style.backgroundColor = "red";  //Remover
      this.painelEsquerdo.appendChild(this.PainelTop);
      //Adicionando elementos ao Painel Top 
      //Foto do Perfil
      this.foto = document.createElement("img");
      this.foto.style.width = "60%";
      this.foto.style.height = "auto";
      this.foto.style.position = "relative";
      this.foto.style.top = "20%";
      this.foto.style.left = "20%";
      this.foto.style.borderRadius = "50%";
      this.foto.src = 'assets/Biba_1.png';
      this.PainelTop.appendChild(this.foto);
      //Titulo
      this.titulo = document.createElement("div");
      this.titulo.style.width = "100%";
      this.titulo.style.height = "30%";
      this.titulo.style.maxWidth = "100%";
      this.titulo.style.lineHeight = "100px";
      this.titulo.style.textAlign = "center";
      this.titulo.style.fontFamily = "georgia";
      this.titulo.style.fontSize = "30px";
      //this.titulo.style.backgroundColor = "blue";  //Remover
      this.PainelTop.appendChild(this.titulo);
      //Adicionar texto
      this.texto1 = document.createTextNode("My First Blog");
      this.titulo.appendChild(this.texto1);


      //Painel Bottom
      this.PainelBottom = document.createElement("div");
      this.PainelBottom.style.width = "100%"
      this.PainelBottom.style.height = "50%";
      this.PainelBottom.style.top = "15%";
      this.PainelBottom.style.textAlign = "center";
      //this.PainelBottom.style.backgroundColor = "pink"; //Remover 
      this.painelEsquerdo.appendChild(this.PainelBottom);
      //Adicionando texto descritivo
      //Texto
      this.textoDescritivo = document.createElement("div");
      this.textoDescritivo.style.width = "100%";
      this.textoDescritivo.style.height = "60%";
      this.textoDescritivo.style.maxWidth = "100%";
      this.textoDescritivo.style.lineHeight = "100px";
      this.textoDescritivo.style.textAlign = "center";
      this.textoDescritivo.style.fontFamily = "arial";
      this.textoDescritivo.style.fontSize = "12px";
      //this.textoDescritivo.style.backgroundColor = "gray"; //Remover 
      this.PainelBottom.appendChild(this.textoDescritivo);
      this.texto2 = document.createTextNode("A blog page made with javascript, react and vue.js.");
      this.textoDescritivo.appendChild(this.texto2);

      //Adicionar botão de Postagem
      this.botaoPostagem = document.createElement("button");
      this.botaoPostagem.style.height = "36px";
      this.botaoPostagem.style.border = "1px solid #f2f2f2";
      this.botaoPostagem.style.borderRadius = "4px";
      this.botaoPostagem.style.fontFamily = "arial";
      this.botaoPostagem.style.borderColor = "gray";
      this.conteudoNovo3 = document.createTextNode("Criar novo post");
      this.botaoPostagem.appendChild(this.conteudoNovo3);
      this.textoDescritivo.appendChild(this.botaoPostagem);
      //Função mouseOver e mouseOut
      this.botaoPostagem.onmouseover = function () {
        console.log(this);//Remover
        //this.style.borderColor = "red";
      };

      this.botaoPostagem.onmouseout = function () {
        console.log(this);//Remover
        //this.style.borderColor = "white";
      };


      //Adicionando icones
      this.icones = document.createElement("div");
      this.icones.style.width = "100%";
      this.icones.style.height = "30%";
      this.icones.style.maxWidth = "100%";
      this.icones.style.lineHeight = "100px";
      this.icones.style.textAlign = "center";
      //this.titulo.style.backgroundColor = "blue";  //Remover
      this.PainelBottom.appendChild(this.icones);
      //Icone Facebook
      this.facebookIcon = document.createElement("img");
      this.facebookIcon.style.height = "50%";
      this.facebookIcon.style.opacity = "0.6";
      this.facebookIcon.style.position = "relative";
      this.facebookIcon.style.top = "20%";
      this.facebookIcon.style.transform = "translateY(-20%)";
      this.facebookIcon.style.marginRight = "15px";
      this.facebookIcon.src = 'assets/facebook.png';
      //Função mouseOver e mouseOut
      this.facebookIcon.onmouseover = function () {
        console.log(this);//Remover
        this.style.opacity = "1.0";
        this.style.cursor = "hand";
      };

      this.facebookIcon.onmouseout = function () {
        this.style.opacity = "0.7";
        this.style.cursor = "pointer";
      };

      //Função Onclick
      this.facebookIcon.onclick = function () {
        console.log(this);//Remove
        window.open("https://www.facebook.com/tanakayuuuu");
      };
      this.icones.appendChild(this.facebookIcon);

      //Icone Instagram 
      this.instagramIcon = document.createElement("img");
      this.instagramIcon.style.height = "50%";
      this.instagramIcon.style.opacity = "0.6";
      this.instagramIcon.style.position = "relative";
      this.instagramIcon.style.top = "20%";
      this.instagramIcon.style.transform = "translateY(-20%)";
      this.instagramIcon.style.marginRight = "15px";
      this.instagramIcon.src = 'assets/instagram.png';
      this.icones.appendChild(this.instagramIcon);
      //Função mouseOver e mouseOut
      this.instagramIcon.onmouseover = function () {
        console.log(this);//Remover
        this.style.opacity = "1.0";
        this.style.cursor = "hand";
      };

      this.instagramIcon.onmouseout = function () {
        this.style.opacity = "0.7";
        this.style.cursor = "pointer";
      };

      //Função Onclick
      this.instagramIcon.onclick = function () {
        console.log(this);//Remove
        window.open("https://www.instagram.com/summersnow64/?hl=en");
      };

      this.icones.appendChild(this.instagramIcon);

      //Icone Linkedin
      this.linkedinIcon = document.createElement("img");
      this.linkedinIcon.style.height = "50%";
      this.linkedinIcon.style.opacity = "0.6";
      this.linkedinIcon.style.position = "relative";
      this.linkedinIcon.style.top = "20%";
      this.linkedinIcon.style.transform = "translateY(-20%)";
      this.linkedinIcon.style.marginRight = "15px";
      this.linkedinIcon.src = 'assets/linkedin.png';
      this.icones.appendChild(this.linkedinIcon);
      //Função mouseOver e mouseOut
      this.linkedinIcon.onmouseover = function () {
        console.log(this);//Remover
        this.style.opacity = "1.0";
        this.style.cursor = "hand";
      };

      this.linkedinIcon.onmouseout = function () {
        this.style.opacity = "0.7";
        this.style.cursor = "pointer";
      };

      //Função Onclick
      this.linkedinIcon.onclick = function () {
        console.log(this);//Remove
        window.open("https://www.linkedin.com/in/elise-yumi-tanaka/");
      };

      this.icones.appendChild(this.linkedinIcon);


      //Painel lateral direito
      this.painelDireito = document.createElement("div");
      this.painelDireito.style.width = "75%";
      this.painelDireito.style.height = "100%";
      this.painelDireito.style.position = "fixed";
      this.painelDireito.style.zIndex = "1";
      //this.painelDireito.style.top = "5%";
      this.painelDireito.style.overflowX = "hidden";
      this.painelDireito.style.maxWidth = "75%";
      //this.painelDireito.style.backgroundColor = "silver";//Remover
      this.painelDireito.style.right = "0";
      this.app.appendChild(this.painelDireito);
      //Adicionando DIV para titulo do post
      this.divTextoBlog = document.createElement("div");
      this.divTextoBlog.style.width = "90%";
      this.divTextoBlog.style.height = "2%";
      this.divTextoBlog.style.maxWidth = "100%";
      this.divTextoBlog.style.lineHeight = "50%";
      this.divTextoBlog.style.textAlign = "left";
      this.divTextoBlog.style.padding = "20px";
      this.divTextoBlog.style.marginTop = "20px";
      this.divTextoBlog.style.fontFamily = "georgia";
      this.divTextoBlog.style.fontSize = "30px";
      this.divTextoBlog.style.backgroundColor = "pink"; //Remover 
      this.painelDireito.appendChild(this.divTextoBlog);
      //Titulo do post
      this.tituloPost = document.createElement("h2");
      this.tituloPost = document.createTextNode("TITLE");
      this.divTextoBlog.appendChild(this.tituloPost);

      //Adicionando DIV para titulo/data do post
      this.divTituloDescricao = document.createElement("div");
      this.divTituloDescricao.style.width = "90%";
      this.divTituloDescricao.style.height = "1%";
      this.divTituloDescricao.style.lineHeight = "50%";
      this.divTituloDescricao.style.maxWidth = "100%";
      //this.divTituloDescricao.style.lineHeight = "100px";
      this.divTituloDescricao.style.textAlign = "left";
      this.divTituloDescricao.style.padding = "20px";
      this.divTituloDescricao.style.marginTop = "5px";
      this.divTituloDescricao.style.fontFamily = "georgia";
      this.divTituloDescricao.style.fontSize = "12px";
      this.divTituloDescricao.style.backgroundColor = "orange"; //Remover 
      this.painelDireito.appendChild(this.divTituloDescricao);
      //Titulo/data do post
      this.tituloDescricao = document.createElement("h5");
      this.tituloDescricao = document.createTextNode("Title description, Aug 6, 2020");
      this.divTituloDescricao.appendChild(this.tituloDescricao);

      //Adicionando DIV para Conteudo do post
      this.divConteudo = document.createElement("div");
      this.divConteudo.style.width = "90%";
      this.divConteudo.style.height = "70%";
      this.divConteudo.style.maxWidth = "100%";
      this.divConteudo.style.textAlign = "left";
      this.divConteudo.style.padding = "20px";
      this.divConteudo.style.marginTop = "20px";
      this.divConteudo.style.fontFamily = "georgia";
      this.divConteudo.style.fontSize = "20px";
      this.divConteudo.style.backgroundColor = "pink"; //Remover 
      this.painelDireito.appendChild(this.divConteudo);

      //Conteudo do post <<--
      //this.Conteudo = document.createElement("p");
      //this.Conteudo = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tellus nec enim tincidunt gravida ut a nulla. Nullam eu sem fringilla, aliquet justo vel, tempor sapien. Fusce sit amet sagittis tortor. Sed vel leo sapien. Phasellus ac elementum tellus, ut imperdiet odio. Proin ultrices, tellus id tincidunt luctus, augue justo gravida nibh, non suscipit elit orci eu orci. Duis et velit convallis, efficitur neque vitae, luctus nulla. Morbi eget efficitur ex, eu condimentum turpis. Nulla scelerisque cursus mauris, viverra scelerisque tortor auctor vestibulum. Nam vitae quam sit amet lacus porta scelerisque. Nam fringilla ante in arcu maximus commodo. Nulla accumsan nulla ante, vitae scelerisque lectus scelerisque quis. Etiam facilisis, arcu eu eleifend euismod, erat risus egestas turpis, eu facilisis augue erat eget dui. Nulla id est sit amet tortor viverra porta at iaculis arcu. Quisque eu rutrum urna, in suscipit ipsum. Ut ac aliquet purus. Vestibulum faucibus libero id justo tempor vestibulum. Suspendisse eu pharetra purus, in euismod tortor.");
      //this.divConteudo.appendChild(this.Conteudo);


      //DIV Input de texto
      //this.divPainelInput = document.createElement("div");
      //Setar estilo da div
      //this.divPainelInput.style.textAlign = "text-top";
      //this.divPainelInput.style.justifyContent = "center";
      //this.divPainelInput.style.height = "90%";
      //this.divPainelInput.style.width = "100%";
      //this.divPainelInput.style.lineHeight="0px";
      //this.divPainelInput.style.display = "flex";
      //this.divPainelInput.style.flexDirection = "colum";
      //this.divPainelInput.style.alignItems = "center";
      //this.divPainelInput.style.backgroundColor = "yellow";
      //this.divConteudo.appendChild(this.divPainelInput);

      //Input titulo
      this.tituloInput = document.createElement("input");
      this.tituloInput.style.width = "100%";
      this.tituloInput.style.height = "5%";
      this.tituloInput.style.border = "1px solid #d0d0d0";
      this.tituloInput.style.marginBottom="10px";
      this.tituloInput.style.outline = "0";
      this.tituloInput.style.boxShadow = "0 0 0 0 rgba(136, 136, 136, 0)";
      this.tituloInput.style.fontSize = "small";
      this.tituloInput.style.transition = "box-shadow .3s";
      this.divConteudo.appendChild(this.tituloInput);

      //Input de texto
      this.painelInput = document.createElement("input");
      this.painelInput.style.width = "100%";
      this.painelInput.style.height = "80%";
      this.painelInput.style.border = "1px solid #d0d0d0";
      this.painelInput.style.outline = "0";
      this.painelInput.style.boxShadow = "0 0 0 0 rgba(136, 136, 136, 0)";
      this.painelInput.style.fontSize = "small";
      this.painelInput.style.transition = "box-shadow .3s";
      this.divConteudo.appendChild(this.painelInput);

      //DIV botão enviar
      this.divBotao = document.createElement("div");
      //Setar estilo da div
      this.divBotao.style.textAlign = "center";
      this.divBotao.style.justifyContent = "center";
      this.divBotao.style.height = "12%";
      this.divBotao.style.width = "100%";
      this.divBotao.style.display = "flex";
      this.divBotao.style.flexDirection = "colum";
      this.divBotao.style.alignItems = "center";
      this.divConteudo.appendChild(this.divBotao);
      //Botao enviar
      this.Botao = document.createElement("button");
      this.Botao.style.height="36px";
      this.Botao.style.border= "1px solid #f2f2f2";
      this.Botao.style.borderRadius= "4px";
      this.textoBotao = document.createTextNode("Enviar Postagem");
      this.Botao.appendChild(this.textoBotao);
      this.divBotao.appendChild(this.Botao);
      
    },




  },
};


App.init();