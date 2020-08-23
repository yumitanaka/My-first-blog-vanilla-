const App = {
  init: function () {
    console.log("Start");

    //Roteador
    const url = new URL(window.location.href);
    console.log('url...', url);
    //Pesquisar url ao atualizar pagina
    window.onload = function () {
      //alert("Page is loaded");
      var id = url.searchParams.get("id");
      var edit = url.searchParams.get("edit");
      var add = url.searchParams.get("add");
      console.log("id:" + id + "-" + " Edit:" + edit + "-" + " Add:" + add);

<<<<<<< HEAD
      if ((id == null) && (edit == null) && (add == null)) { //Ao carregar a pagina iniciar, renderiza primeiro post
        //alert("(id == null) && (edit == null) && (add == null)");
=======
      if ((id == null) && (edit == null) && (add == null)) { //Ao carregar a página iniciar, renderiza primeiro post
>>>>>>> d75a0aa... Final Commit.
        id = 0;
        const json = localStorage.getItem("StorageKey");
        const storageKey = JSON.parse(json);
        var filter = storageKey[id];
        App.store.divId = id;
        console.log('el.id showPostsList', id);
        App.store.selectPost = filter["id"];
        console.log('App.store.selectPost showPostsList', App.store.selectPost);
        App.controller.renderPostContent();

      } else if ((id != null) && (edit == null) && (add == null)) { //Renderizar post por seu id
        //alert("(id != null) && (edit == null) && (add == null)");
        const json = localStorage.getItem("StorageKey");
        const storageKey = JSON.parse(json);
        var filter = storageKey[id];
        App.store.divId = id;
        console.log('el.id showPostsList', id);
        App.store.selectPost = filter["id"];
        console.log('App.store.selectPost showPostsList', App.store.selectPost);
        App.controller.renderPostContent();

      } else if ((id != null) && (edit != null) && (add == null)) { //Renderiza pagina de criar novo post
        //alert("(id != null) && (edit != null) && (add == null)");
        const json = localStorage.getItem("StorageKey");
        const storageKey = JSON.parse(json);
        var filter = storageKey[id];
        App.store.divId = id;
        console.log('el.id showPostsList', id);
        App.store.selectPost = filter["id"];
        console.log('App.store.selectPost showPostsList', App.store.selectPost);
        App.controller.updatePost();

      } else if ((id == null) & (edit == null) & (add != null)) { //Renderiza pagina de edição de post
        //alert("(id == null) & (edit == null) & (add != null)");
        App.controller.renderPostInput();
      }
    },

      this.controller.loadPosts(); //Carregar os posts do localStorage. Caso ñ tenha, add como array vazio

    this.components.createComponents();
    App.events.botaoPostagem();
    App.events.facebookIcon();
    App.events.instagramIcon();
    App.events.linkedinIcon();
    App.events.Botao();
    App.events.BotaoEdit();
    App.events.BotaoDelete();
    App.events.BotaoAlterar();


    console.log("After start", this);


    //this.store.posts.push( { id: 1, title: "Título 1", body: "Corpo 1" });
    this.controller.dumpPosts();
    this.controller.showPostsList();
  },

  events: {
    //Função mouseOver e mouseOut - Botao postagem
    botaoPostagem: function () {
      App.components.botaoPostagem.onmouseover = function () {
        App.components.botaoPostagem.style.borderColor = "silver";
      };

      App.components.botaoPostagem.onmouseout = function () {
        App.components.botaoPostagem.style.borderColor = "gray";
      };

      //Função onclick para renderizar div p/ postagem - Botao postagem
      App.components.botaoPostagem.onclick = function () {
        App.controller.renderPostInput(); //funcao que vai renderizar o conteudo de criação do post (titulo e body)
        App.controller.addUrlPostInput();
      };
    },

    //Função mouseOver e mouseOut - facebookIcon
    facebookIcon: function () {
      App.components.facebookIcon.onmouseover = function () {
        App.components.facebookIcon.style.opacity = "1.0";
        App.components.facebookIcon.style.cursor = "hand";
      };

      App.components.facebookIcon.onmouseout = function () {
        App.components.facebookIcon.style.opacity = "0.7";
        App.components.facebookIcon.style.cursor = "pointer";
      };
      //Função Onclick  
      App.components.facebookIcon.onclick = function () {
        window.open("https://www.facebook.com/tanakayuuuu");
      };
    },

    //Função mouseOver e mouseOut - instagramIcon
    instagramIcon: function () {
      App.components.instagramIcon.onmouseover = function () {
        App.components.instagramIcon.style.opacity = "1.0";
        App.components.instagramIcon.style.cursor = "hand";
      };

      App.components.instagramIcon.onmouseout = function () {
        App.components.instagramIcon.style.opacity = "0.7";
        App.components.instagramIcon.style.cursor = "pointer";
      };
      //Função Onclick
      App.components.instagramIcon.onclick = function () {
        window.open("https://www.instagram.com/summersnow64/?hl=en");
      };
    },

    //Função mouseOver e mouseOut - linkedinIcon
    linkedinIcon: function () {
      App.components.linkedinIcon.onmouseover = function () {
        App.components.linkedinIcon.style.opacity = "1.0";
        App.components.linkedinIcon.style.cursor = "hand";
      };

      App.components.linkedinIcon.onmouseout = function () {
        App.components.linkedinIcon.style.opacity = "0.7";
        App.components.linkedinIcon.style.cursor = "pointer";
      };
      //Função Onclick
      App.components.linkedinIcon.onclick = function () {
        window.open("https://www.linkedin.com/in/elise-yumi-tanaka/");
      };
    },

    //-------------CRUD---------------//
    Botao: function () {
      //Função mouseOver e mouseOut 
      App.components.Botao.onmouseover = function () {
        App.components.Botao.style.borderColor = "silver";
        App.components.Botao.style.cursor = "hand";

      };

      App.components.Botao.onmouseout = function () {
        App.components.Botao.style.borderColor = "gray";
        App.components.Botao.style.cursor = "pointer";
      };

      //Função CRUD - Create e Save
      App.components.Botao.onclick = function () {
        //App.controller.createPost(); //função criar post
        App.controller.savePost(); //função salvar post
      };
    },

    BotaoEdit: function () {
      //Função mouseOver e mouseOut 
      App.components.BotaoEdit.onmouseover = function () {
        App.components.BotaoEdit.style.borderColor = "silver";
        App.components.BotaoEdit.style.cursor = "hand";

      };

      App.components.BotaoEdit.onmouseout = function () {
        App.components.BotaoEdit.style.borderColor = "gray";
        App.components.BotaoEdit.style.cursor = "pointer";
      };

      //Função CRUD - Update
      App.components.BotaoEdit.onclick = function () {
        //App.controller.createPost(); //função criar post
        App.controller.updatePost(); //função salvar post
      };
    },

    BotaoDelete: function () {
      //Função mouseOver e mouseOut 
      App.components.BotaoDelete.onmouseover = function () {
        App.components.BotaoDelete.style.borderColor = "silver";
        App.components.BotaoDelete.style.cursor = "hand";

      };

      App.components.BotaoDelete.onmouseout = function () {
        App.components.BotaoDelete.style.borderColor = "gray";
        App.components.BotaoDelete.style.cursor = "pointer";
      };

      //Função CRUD - Update
      App.components.BotaoDelete.onclick = function () {
        App.controller.deletePost(); //função salvar post
      };
    },

    BotaoAlterar: function () {
      //Função mouseOver e mouseOut 
      App.components.BotaoAlterar.onmouseover = function () {
        App.components.BotaoAlterar.style.borderColor = "silver";
        App.components.BotaoAlterar.style.cursor = "hand";

      };

      App.components.BotaoAlterar.onmouseout = function () {
        App.components.BotaoAlterar.style.borderColor = "gray";
        App.components.BotaoAlterar.style.cursor = "pointer";
      };

      //Função CRUD - Update
      App.components.BotaoAlterar.onclick = function () {
        App.controller.saveUpdatePost();
      };
    },
  },

  store: {
    storageKey: "StorageKey",

    posts: [],

    selectPost: null,
    divId: null,

  },

  controller: {

    loadPosts: function () { //Storage = string 

      let storage = window.localStorage.getItem(App.store.storageKey); //Pega itens do storage

      if (!storage) {
        stogare = "[]"
        window.localStorage.setItem(App.store.storageKey, storage);
      }
      App.store.posts = JSON.parse(storage); //JSON.parse Transformar de string para Json
    },

    dumpPosts: function () {
      window.localStorage.setItem(App.store.storageKey, JSON.stringify(App.store.posts));//Add tud que estiver em store:posts em storage como string
    },

    showPostsList: function () {
      const posts = App.store.posts;
      const selectPost = App.store.selectPost;
      const json = localStorage.getItem("StorageKey");
      const storageKey = JSON.parse(json);
      console.log('storageKey', storageKey);


      for (var i = 0; i < storageKey.length; i++) {
        var obj = storageKey[i];
        const el = document.createElement("div");
        el.id = i;
        el.style.textAlign = "left";
        el.style.marginTop = "8px";
        el.style.marginLeft = "15px";
        el.innerHTML = obj.title;
        App.components.menu.appendChild(el);

        //Evento ao clicar no post
        el.onclick = function () {
          var filter = storageKey[el.id];
          App.store.divId = el.id;
          console.log('el.id showPostsList', el.id);
          App.store.selectPost = filter["id"];
          console.log('App.store.selectPost showPostsList', App.store.selectPost);

          App.controller.urlShowPostsList();
          App.controller.renderPostContent();
        };
      };
    },


    savePost: function () //Função criar/salvar post
    {
      const posts = App.store.posts;
      var id = App.store.posts.length + 1;

      const max = Math.max.apply(null, posts.map(item => item.id));
      //console.log("maximum...",max);

      id = max + 1;
      //console.log("id = aux...", id);

      const newPost = {
        id,
        title: App.components.tituloInput.value,
        body: App.components.painelInput.value
      }

      App.store.posts.push(newPost);

      App.components.tituloInput.value = "";
      App.components.painelInput.value = "";


      const el = document.createElement("div"); //Função para adicionar titulo ao painel esquerdo
      el.id = App.store.posts.length; //Setar id para elementos divs (el)
      el.style.textAlign = "left";
      el.style.marginTop = "8px";
      el.style.marginLeft = "15px";
      el.innerHTML = newPost.title;
      App.components.menuPosts[newPost.id] = el;
      //Evento ao clicar no post
      el.onclick = function () {
        console.log('newPost click...', newPost);
        App.store.selectPost = newPost.id;
        App.store.divId = el.id;
        App.controller.renderPostContent();
        console.log('App.store.selectPost click...', App.store.selectPost);
      }

      App.components.menu.appendChild(el);

      App.controller.dumpPosts();
      App.controller.urlShowPostsList();
      App.controller.urlReset(); //Atualiza url para o primeiro Post
      window.location.reload(true); //Atualiza posts e localstorage
    },

    showPosts: function () {
      //Mostrar postagens
      App.components.divTextoBlog.style.display = "block";
      App.components.divConteudo.style.height = "70%";
      App.components.divTituloPost.style.display = "block";
      App.components.divTituloPost.style.display = "block";
      App.components.divConteudo.style.display = "block";
      App.components.divCont.style.display = "block";
      App.components.BotaoEdit.style.display = "inline-block";
      App.components.BotaoDelete.style.display = "inline-block";
    },

    hidePosts: function () {
      //Esconder criacao de post/elementos com display none
      App.components.tituloInput.style.display = "none";
      App.components.painelInput.style.display = "none";
      App.components.Botao.style.display = "none";
      App.components.BotaoAlterar.style.display = "none";

    },

    renderPostContent: function () {
      const posts = App.store.posts;
      const selectPost = App.store.selectPost;
      App.controller.showPosts();
      App.controller.hidePosts();

      console.log('selectPost renderPostContent', selectPost);
      //Buscar o post, como voce ja tem o selectPost (id). App.store.posts o obj do post. (.filter)
      const filtrado = posts.filter(function (select) {
        return select.id == selectPost;
      })
      console.log('filtrado...', filtrado);

      App.components.divTituloPost.innerHTML = filtrado[0].title; // post.title
      App.components.divCont.innerHTML = filtrado[0].body; // post.body

    },

    urlShowPostsList: function () { //Roteador
      const x = App.store.divId;

      history.pushState({ id: x }, "id", "?id=" + x);
    },


    renderPostInput: function () {
      //Mostrar criacao de post/elementos
      App.components.divTextoBlog.style.display = "none";
      App.components.divConteudo.style.display = "inline-block";
      App.components.divConteudo.style.height = "82%";
      //Esconder postagens
      App.components.divCont.style.display = "none";
      App.components.tituloInput.style.display = "inline-block";
      App.components.painelInput.style.display = "inline-block";
      App.components.divBotao.style.display = "inline-block";
      App.components.Botao.style.display = "inline-block";
      App.components.BotaoEdit.style.display = "none";
      App.components.BotaoDelete.style.display = "none";
      App.components.BotaoAlterar.style.display = "none";
      App.components.tituloInput.value = "";
      App.components.painelInput.value = "";
      App.controller.addUrlPostInput();
    },

    addUrlPostInput: function () { //Roteador

      history.pushState({ add: true }, "add", "?add=true");

    },

    renderPostInputEdit: function () {
      //Mostrar criacao de post/elementos
      App.components.divTextoBlog.style.display = "none";
      App.components.divConteudo.style.display = "inline-block";
      App.components.divConteudo.style.height = "82%";
      App.components.BotaoAlterar.style.display = "inline-block";
      //Esconder postagens
      App.components.divCont.style.display = "none";
      App.components.tituloInput.style.display = "inline-block";
      App.components.painelInput.style.display = "inline-block";
      App.components.divBotao.style.display = "inline-block";
      App.components.Botao.style.display = "none";
      App.components.BotaoEdit.style.display = "none";
      App.components.BotaoDelete.style.display = "none";
    },

    updatePost: function () //Editar o conteudo postado
    {
      App.controller.urlUpdatePost();
      App.controller.renderPostInputEdit();
      const posts = App.store.posts;
      const selectPost = App.store.selectPost;


      //Buscar o post, como voce ja tem o selectPost (id). App.store.posts o obj do post. (.filter)
      const filtrado = posts.filter(function (select) {
        return select.id == selectPost;
      })
      console.log('updatePost filtrado...', filtrado);

      App.components.tituloInput.value = filtrado[0].title; // post.title
      App.components.painelInput.value = filtrado[0].body; // post.body

      App.controller.dumpPosts();

    },

    urlUpdatePost: function () { //Roteador
      const x = App.store.divId;

      history.pushState({ id: x, add: true }, "id&add", "?id=" + x + "&edit=true");
    },

    saveUpdatePost: function () {
      const posts = App.store.posts;
      const selectPost = App.store.selectPost;
      const divId = App.store.divId;

      console.log('selectPost saveUpdatePost', selectPost);

      for (var i = 0; i < posts.length; i++) {
        var obj = posts[i];
        if (obj.id == selectPost) {
          obj.title = App.components.tituloInput.value;
          obj.body = App.components.painelInput.value;
          break;
        }
      };


      document.getElementById(divId).innerHTML = obj.title;
      console.log("getElementById(divId)..", divId);

      App.controller.dumpPosts();
      App.controller.urlReset();
      window.location.reload(true);
    },


    deletePost: function () //Deletar o post
    {
      const posts = App.store.posts;
      const selectPost = App.store.selectPost;
      const position = selectPost;
      const divId = App.store.divId;

      var titulo = "";

      console.log('position...', position);

      for (var i = 0; i < posts.length; i++) {
        var obj = posts[i];
        if (obj.id == selectPost) {
          titulo = obj.title;
          break;
        }
      };

      var removeIndex = posts.map(function (item) { return item.title; }).indexOf(titulo); //Deletar pelo título do post

      // remove object
      posts.splice(removeIndex, 1);
      App.controller.renderAposDelete();
      console.log('posts...', posts);

      var node = document.getElementById(divId);
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }

      App.controller.dumpPosts();
    },

    renderAposDelete: function () {
      const posts = App.store.posts;
      const selectPost = App.store.selectPost;
      const divId = App.store.divId;

      document.getElementById(divId).style.display = "none";
      App.controller.urlReset();
      window.location.reload(true);

    },

    urlReset: function () { //Roteador
      const x = 0;

      history.pushState({ id: x, add: true }, "id", "?id=" + x);
    },

  },

  router: {
    routes: []
  },

  components: {
    app: null,
    menu: null,
    menuPosts: {}, //objeto

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
      this.PainelTop.style.height = "45%";
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
      this.titulo.style.height = "20%";
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
      this.PainelBottom.style.top = "5%";
      this.PainelBottom.style.textAlign = "center";
      //this.PainelBottom.style.backgroundColor = "pink"; //Remover
      this.painelEsquerdo.appendChild(this.PainelBottom);
      //Adicionando DIV para lista de posts
      this.menu = document.createElement("div");
      this.menu.style.height = "30%";
      this.menu.style.fontFamily = "arial";
      this.menu.style.fontSize = "12px";
      //this.menu.style.backgroundColor = "yellow"; //Remover
      this.menu.style.overflowY = "scroll";
      this.PainelBottom.appendChild(this.menu);
      //Adicionando texto descritivo do blog
      //Texto
      this.textoDescritivo = document.createElement("div");
      this.textoDescritivo.style.width = "100%";
      this.textoDescritivo.style.height = "20%";
      this.textoDescritivo.style.maxWidth = "100%";
      this.textoDescritivo.style.textAlign = "center";
      this.textoDescritivo.style.fontFamily = "arial";
      this.textoDescritivo.style.marginTop = "10%";
      this.textoDescritivo.style.fontSize = "12px";
      //this.textoDescritivo.style.backgroundColor = "purple"; //Remover
      this.PainelBottom.appendChild(this.textoDescritivo);
      this.texto2 = document.createTextNode("A blog page made with javascript, react and vue.js.");
      this.textoDescritivo.appendChild(this.texto2);

      //Adicionar botão de Postagem
      this.botaoPostagem = document.createElement("button");
      this.botaoPostagem.style.height = "36px";
      this.botaoPostagem.style.border = "1px solid #f2f2f2";
      this.botaoPostagem.style.borderRadius = "4px";
      this.botaoPostagem.style.fontFamily = "arial";
      this.botaoPostagem.style.borderColor = "gray";  //Remover
      this.conteudoNovo3 = document.createTextNode("Criar/Editar Post");
      this.botaoPostagem.appendChild(this.conteudoNovo3);
      this.PainelBottom.appendChild(this.botaoPostagem);
      //App.events.botaoPostagem();

      //Adicionando icones
      this.icones = document.createElement("div");
      this.icones.style.width = "100%";
      this.icones.style.height = "30%";
      this.icones.style.maxWidth = "100%";
      this.icones.style.lineHeight = "100px";
      this.icones.style.textAlign = "center";
      this.icones.style.marginTop = "5%";
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
      this.icones.appendChild(this.facebookIcon);
      //App.events.facebookIcon();

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
      //App.events.instagramIcon();


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
      //App.events.linkedinIcon();


      //Painel lateral direito
      this.painelDireito = document.createElement("div");
      this.painelDireito.style.width = "75%";
      this.painelDireito.style.height = "100%";
      this.painelDireito.style.position = "fixed";
      this.painelDireito.style.zIndex = "1";
      //this.painelDireito.style.top = "5%";
      this.painelDireito.style.overflowX = "hidden";
      this.painelDireito.style.maxWidth = "75%";
      //this.painelDireito.style.display = "inline-block";
      //this.painelDireito.style.backgroundColor = "silver";//Remover
      this.painelDireito.style.right = "0";
      this.app.appendChild(this.painelDireito);
      //Adicionando DIV para titulo do post
      this.divTextoBlog = document.createElement("div");
      this.divTextoBlog.style.width = "95%";
      this.divTextoBlog.style.height = "2%";
      this.divTextoBlog.style.maxWidth = "100%";
      this.divTextoBlog.style.lineHeight = "50%";
      this.divTextoBlog.style.textAlign = "left";
      this.divTextoBlog.style.padding = "20px";
      this.divTextoBlog.style.marginTop = "20px";
      this.divTextoBlog.style.fontFamily = "georgia";
      this.divTextoBlog.style.fontSize = "30px";
      //this.divTextoBlog.style.backgroundColor = "gray"; //Remover
      this.painelDireito.appendChild(this.divTextoBlog);
      //Titulo do post
      this.divTituloPost = document.createElement("div");
      this.divTextoBlog.appendChild(this.divTituloPost);
      this.tituloPost = document.createTextNode("TITLE");
      this.divTituloPost.appendChild(this.tituloPost);

      //Adicionando DIV para Conteudo do post
      this.divConteudo = document.createElement("div");
      this.divConteudo.style.width = "95%";
      this.divConteudo.style.height = "75%";
      this.divConteudo.style.maxWidth = "100%";
      this.divConteudo.style.textAlign = "left";
      this.divConteudo.style.padding = "20px";
      this.divConteudo.style.marginTop = "10px";
      this.divConteudo.style.fontFamily = "georgia";
      this.divConteudo.style.fontSize = "20px";
      //this.divConteudo.style.backgroundColor = "yellow"; //Remover
      this.painelDireito.appendChild(this.divConteudo);

      //Conteudo do post <<--
      this.divCont = document.createElement("div");
      this.divConteudo.appendChild(this.divCont);
      this.Conteudo = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tellus nec enim tincidunt gravida ut a nulla. Nullam eu sem fringilla, aliquet justo vel, tempor sapien. Fusce sit amet sagittis tortor. Sed vel leo sapien. Phasellus ac elementum tellus, ut imperdiet odio. Proin ultrices, tellus id tincidunt luctus, augue justo gravida nibh, non suscipit elit orci eu orci. Duis et velit convallis, efficitur neque vitae, luctus nulla. Morbi eget efficitur ex, eu condimentum turpis. Nulla scelerisque cursus mauris, viverra scelerisque tortor auctor vestibulum. Nam vitae quam sit amet lacus porta scelerisque. Nam fringilla ante in arcu maximus commodo. Nulla accumsan nulla ante, vitae scelerisque lectus scelerisque quis. Etiam facilisis, arcu eu eleifend euismod, erat risus egestas turpis, eu facilisis augue erat eget dui. Nulla id est sit amet tortor viverra porta at iaculis arcu. Quisque eu rutrum urna, in suscipit ipsum. Ut ac aliquet purus. Vestibulum faucibus libero id justo tempor vestibulum. Suspendisse eu pharetra purus, in euismod tortor.");
      this.divCont.appendChild(this.Conteudo);

      //Input titulo
      this.tituloInput = document.createElement("input");
      this.tituloInput.style.width = "100%";
      this.tituloInput.style.height = "5%";
      this.tituloInput.style.border = "1px solid #d0d0d0";
      this.tituloInput.style.marginBottom = "10px";
      this.tituloInput.style.outline = "0";
      this.tituloInput.style.boxShadow = "0 0 0 0 rgba(136, 136, 136, 0)";
      this.tituloInput.style.fontSize = "small";
      this.tituloInput.style.transition = "box-shadow .3s";
      this.tituloInput.style.display = "none";
      this.divConteudo.appendChild(this.tituloInput);

      //Input de texto
      this.painelInput = document.createElement("input");
      this.painelInput.style.width = "100%";
      this.painelInput.style.height = "90%";
      this.painelInput.style.border = "1px solid #d0d0d0";
      this.painelInput.style.outline = "0";
      this.painelInput.style.boxShadow = "0 0 0 0 rgba(136, 136, 136, 0)";
      this.painelInput.style.fontSize = "small";
      this.painelInput.style.transition = "box-shadow .3s";
      this.painelInput.style.display = "none";
      this.divConteudo.appendChild(this.painelInput);

      //DIV botão enviar
      this.divBotao = document.createElement("div");
      //Setar estilo da div
      this.divBotao.style.textAlign = "center";
      this.divBotao.style.height = "10%";
      this.divBotao.style.width = "99%";
      this.divBotao.style.display = "inline-block";
      //this.divBotao.style.backgroundColor = "blue";
      this.divBotao.style.display = "none";
      this.painelDireito.appendChild(this.divBotao);

      //Botao enviar
      this.Botao = document.createElement("button");
      this.Botao.style.height = "36px";
      this.Botao.style.border = "1px solid #f2f2f2";
      this.Botao.style.borderRadius = "4px";
      this.Botao.style.display = "inline-block";
      this.textoBotao = document.createTextNode("Enviar Postagem");
      this.Botao.style.marginTop = "2%";
      this.Botao.appendChild(this.textoBotao);
      //this.BotaoEdit.style.display = "none";
      this.divBotao.appendChild(this.Botao);

      /*--------Criar botoes editar e excluir----------*/
      //Botão de Edição
      this.BotaoEdit = document.createElement("button");
      this.BotaoEdit.style.height = "36px";
      this.BotaoEdit.style.border = "1px solid #f2f2f2";
      this.BotaoEdit.style.borderRadius = "4px";
      this.textoBotaoEdit = document.createTextNode("Editar Postagem");
      this.BotaoEdit.appendChild(this.textoBotaoEdit);
      this.divBotao.appendChild(this.BotaoEdit);


      this.BotaoDelete = document.createElement("button");
      this.BotaoDelete.style.height = "36px";
      this.BotaoDelete.style.border = "1px solid #f2f2f2";
      this.BotaoDelete.style.borderRadius = "4px";
      this.BotaoDelete.style.marginLeft = "20px";
      this.BotaoDelete.style.marginTop = "2%";
      this.textoBotaoDelete = document.createTextNode("Deletar Postagem");
      this.BotaoDelete.appendChild(this.textoBotaoDelete);
      this.divBotao.appendChild(this.BotaoDelete);

      //Botao enviar edição
      this.BotaoAlterar = document.createElement("button");
      this.BotaoAlterar.style.height = "36px";
      this.BotaoAlterar.style.border = "1px solid #f2f2f2";
      this.BotaoAlterar.style.borderRadius = "4px";
      this.BotaoAlterar.style.display = "inline-block";
      this.textoBotaoAlterar = document.createTextNode("Alterar Postagem");
      this.BotaoAlterar.style.marginTop = "2%";
      this.BotaoAlterar.appendChild(this.textoBotaoAlterar);
      this.divBotao.appendChild(this.BotaoAlterar);
    },
  },
};

App.init();