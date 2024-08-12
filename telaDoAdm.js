

  const firebaseConfig = {
    apiKey: "AIzaSyDTr24X4XFjomYeO-0z_wZl-tQVBsY2fh4",
    authDomain: "mercearia-de-tia-elza.firebaseapp.com",
    projectId: "mercearia-de-tia-elza",
    storageBucket: "mercearia-de-tia-elza.appspot.com",
    messagingSenderId: "573764124231",
    appId: "1:573764124231:web:c9ec9b7e74f4b8d976bb62",
    measurementId: "G-8YGW1S3742"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const bd = app.firestore();
const menu_geral=document.querySelector('.menu_geral')
let botao_menu=document.getElementById('botao_menu')
let menu_adicionar=document.getElementById('menu_adicionar')
let nomeDoProduto=document.getElementById('nomeDoProduto')
let localDosProdutos=document.querySelector('.localDosProdutos')
let produtos=document.querySelector('.produtos')
let paragrafoPreco=document.getElementById('paragrafoPreco')
let precoDoProduto=document.getElementById('precoDoProduto')
let produtoTitulo=document.getElementById('produtoTitulo')
let menuEditar=document.querySelector('.menuEditar')
let insta=document.querySelector('.insta')
let title=document.getElementById('title')
let botao_checkbox=document.getElementById("botao_checkbox")
let simboloDoWtsap=document.getElementById('simboloDoWtsap')
let input=document.getElementById('inputFile').value
const inputFile=document.querySelector('#inputFile');
let botao_excluir=document.getElementById("botao_excluir")
let botao_sairDoMenu_adicionar=document.getElementById('botao_sairDoMenu_adicionar')
let botao_adicionar=document.getElementById('botao_adicionar')//Variável do botão adicionar que está no  menu principal
let botao_concluir=document.getElementById('botao_concluir')
let botao_editar=document.getElementById('botao_editar')
let botao_concluir_editar=document.getElementById('botao_concluir_editar')
let botao_sairDoMenu_editar=document.getElementById('botao_sairDoMenu_editar')


 let imagemSrc=''
menu_adicionar.style.display='none'
menuEditar.style.display='none'


class Produto {
   constructor(nomeDoProduto,preco,imagemSrc){
       this.nomeDoProduto = nomeDoProduto;
       this.preco = preco;
       this.imagemSrc=imagemSrc
       
   }
   getNomeDoProduto(){
       return this.nomeDoProduto;
   }
   setNomeDoProduto(novoNomeDoProduto){
      this.nomeDoProduto = novoNomeDoProduto;
  }
   getPreco(){
       return this.preco;
   }
   setpreco(novoPreco){
       this.novoPreco = novoPreco;
   }
   getImagemSrc(){
    return this.imagemSrc;
   }
   setImagemSrc(novaImagemSrc){
    this.imagemSrc=novaImagemSrc;
   }
   info(){
      console.log(this.nomeDoProduto+"\n"+this.preco);
   }
   criarProduto(){
            
            let produtoTitulo = document.createElement('div');
            produtoTitulo.setAttribute('class',"produtoTitulo");
            let titleProduto=document.createElement('h1');
            titleProduto.setAttribute('id',"titleProduto");
            titleProduto.textContent = this.nomeDoProduto;
            produtoTitulo.appendChild(titleProduto);
            let checkboxNova=document.createElement('input');
            checkboxNova.setAttribute('class','botao_checkbox');
            checkboxNova.setAttribute('type','checkbox');
            produtoTitulo.appendChild(checkboxNova);

            
            const imgAdicionada = document.createElement("img");
            imgAdicionada.setAttribute('id', 'imgProduto');
            let br = document.createElement('br');
            let preco = document.createElement('p');
             preco.setAttribute('id',"paragrafoPreco");
             
             preco.textContent='R$'+" "+this.preco;
          

            const divProduto = document.createElement("div");
            divProduto.setAttribute('class', 'produtos');
            divProduto.appendChild(produtoTitulo);
            divProduto.setAttribute('data-id', this.id);/////// // Adiciona o data-id
            divProduto.appendChild(br);
            imgAdicionada.src = this.imagemSrc;
            divProduto.appendChild(imgAdicionada);
            divProduto.appendChild(preco)

            localDosProdutos.appendChild(divProduto);
         };
         
        }
    

        function CriacaoDoProdutoEtapa1() {
            // Captura o nome e preço do produto
            let nome = document.getElementById('nomeDoProduto').value;
            let preco = document.getElementById('preco').value; // Corrigido para usar 'precoDoProduto'
        
            if (imagemSrc !== "" && preco !== "" && nome !== "") {
                let produto = new Produto(nome, preco, imagemSrc);
                const listaRef = bd.collection('produtos');
        
                listaRef.add({
                    preco: produto.getPreco(), // Corrigido para usar 'getPreco'
                    nomeDoProduto: produto.getNomeDoProduto(),
                    imagemSrc: produto.getImagemSrc(),
                }).then((docRef) => {///////
                    produto.id = docRef.id;////////
                    produto.criarProduto();     
                }).catch((error) => {
                    console.error('Erro ao adicionar produto:', error);
                });
            } else {
                alert('Certifique-se de preencher todos os campos!');
            }
            imagemSrc = "";
            inputFile.value = '';
        }

  
  function pegarUrlDaImg(e){
    const inputTarget= e.target; //Obtem  o elemento em que o evento ocorreu
    const file=inputTarget.files[0];// Obtém  arquivo
 
      const reader= new FileReader();//Vai ler o arquivo 

  //Assim que a leitura do arquivo for conluída irá executar essa função.
       reader.addEventListener('load',function(e){
          const readerTarget= e.target;

        if(file){
           imagemSrc=readerTarget.result; //Pega o resultado do readerTarget
        }
        else{
           alert('Coloque uma imagem ')
        }
       })
       reader.readAsDataURL(file)
  }


   function aparecerMenuAdicionar(){
      menu_geral.classList.remove('menu_animacao');
        menu_adicionar.style.display="inline";
      
     }
     
     



function menu_principal_Aparecer (){

    menu_geral.classList.add('menu_animacao')//Adiciona a classe menu_animacao ao menu_geral , fazendo com que crie o a animação de ir para o lado 
  
    }
    
    function menu_principal_Sumir(){
       menu_geral.classList.remove('menu_animacao');
 
    }
       function sairMenuAdiocionar(){
        menu_adicionar.style.display='none';
      
         
        
   }
   function irParaWtsap(){
    window.location.href='https://wa.me/553399613873'
   }
   function irParaInsta(){
      window.location.href='https://www.instagram.com/elzaenxovais_?igsh=MWxxbHZnc2Nza294Zg=='
   }

   
   
        
   function excluirSelecionados() {
    const checkboxes = document.querySelectorAll('.botao_checkbox:checked');
    if (checkboxes.length === 0) {
        alert('Nenhum produto selecionado para exclusão.');
        return;
    }

    checkboxes.forEach(checkbox => {
        const produtoDiv = checkbox.closest('.produtos');
        const produtoId = produtoDiv.dataset.id; // Verifique se o ID está correto

        console.log('ID do produto a ser excluído:', produtoId); // Adicione este log para verificar o ID

        if (confirm('Deseja remover este produto da lista de produtos disponíveis?')) {
            bd.collection('produtos').doc(produtoId).delete().then(() => {
                console.log('Produto excluído com sucesso');
                localDosProdutos.removeChild(produtoDiv); // Remove o produto do DOM
                alert('Produto removido com sucesso');
            }).catch((error) => {
                console.error('Erro ao remover produto:', error);
                alert('Erro ao remover produto: ' + error.message);
            });
        }
    });
}



  function menuEditarAparecer(){
     menuEditar.style.display='inline';
     menu_geral.classList.remove('menu_animacao');
  }
  function menuEditarSumir(){
    menuEditar.style.display='none';
 

  }


  function editar() {
    const checkbox = document.querySelector('.botao_checkbox:checked');

    if (checkbox) {
        const produtoDiv = checkbox.closest('.produtos');

        if (produtoDiv) {       
            let novoNomeDoProduto = document.getElementById('novoNomeDoProduto').value.trim();
            let novoPreco = document.getElementById('novoPreco').value.trim();

            console.log('Valor lido do campo Nome do Produto:', novoNomeDoProduto);
            console.log('Valor lido do campo Preço:', novoPreco);

            if (!novoNomeDoProduto || !novoPreco) {
                console.error('Nome ou preço do produto não fornecido.');
                return;
            }

            let h1 = produtoDiv.querySelector('#titleProduto'); // Ajuste o seletor para corresponder ao ID real
            let p = produtoDiv.querySelector('#paragrafoPreco'); // Ajuste o seletor para corresponder ao ID real

            if (h1) {
                h1.textContent = novoNomeDoProduto;
            } else {
                console.error('Elemento para o título do produto não encontrado.');
            }

            if (p) {
                p.textContent = 'R$ ' + novoPreco;
            } else {
                console.error('Elemento para o preço do produto não encontrado.');
            }

            console.log('Novo Nome do Produto:', novoNomeDoProduto);
            console.log('Novo Preço:', novoPreco);

            let produtoId = produtoDiv.getAttribute('data-id'); // Use getAttribute para obter o data-id
            if (produtoId) {
                bd.collection('produtos').doc(produtoId).update({
                    nomeDoProduto: novoNomeDoProduto, // Certifique-se de que o nome do campo no Firestore está correto
                    preco: novoPreco
                }).then(() => {
                    console.log('Produto atualizado no Firestore.');
                }).catch(error => {
                    console.error('Erro ao atualizar produto no Firestore:', error);
                });
            } else {
                console.error('ID do produto não encontrado.');
            }
        } else {
            console.error('Elemento .produtos não encontrado.');
        }
    } else {
        console.error('Nenhum checkbox está selecionado.');
    }
}
 
   botao_menu.addEventListener('click',menu_principal_Aparecer)
   
  botao_adicionar.addEventListener('click',aparecerMenuAdicionar)
   title.addEventListener('click',menu_principal_Sumir)
  botao_excluir.addEventListener('click',excluirSelecionados)
   inputFile.addEventListener('change', pegarUrlDaImg); // Alterado para criarProduto
  simboloDoWtsap.addEventListener('click',irParaWtsap)
  insta.addEventListener('click',irParaInsta)
   botao_sairDoMenu_adicionar.addEventListener('click',sairMenuAdiocionar)
   botao_concluir.addEventListener('click',CriacaoDoProdutoEtapa1)
   botao_editar.addEventListener('click',menuEditarAparecer)
   botao_sairDoMenu_editar.addEventListener('click',menuEditarSumir)
   botao_concluir_editar.addEventListener('click',editar)
   
   
   let url = document.getElementById('inputFile');
   
   










   ///////////////////////////////////////////////////////
   window.onload = function() {
    bd.collection('produtos').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const dados = doc.data();
            let produto = new Produto(dados.nomeDoProduto, dados.preco, dados.imagemSrc);
            produto.id = doc.id;

            // Criar elementos do DOM para exibir o produto
            let produtoTitulo = document.createElement('div');
            produtoTitulo.setAttribute('class', "produtoTitulo");

            let titleProduto = document.createElement('h1');
            titleProduto.setAttribute('id', "titleProduto");
            titleProduto.textContent = produto.getNomeDoProduto();
            produtoTitulo.appendChild(titleProduto);

            let checkboxNova = document.createElement('input');
            checkboxNova.setAttribute('class', 'botao_checkbox');
            checkboxNova.setAttribute('type', 'checkbox');
            produtoTitulo.appendChild(checkboxNova);

            const imgAdicionada = document.createElement("img");
            imgAdicionada.setAttribute('id', 'imgProduto');
            imgAdicionada.src = produto.getImagemSrc();

            let br = document.createElement('br');

            let preco = document.createElement('p');
            preco.setAttribute('id', "paragrafoPreco");
            preco.textContent = 'R$ ' + produto.getPreco();

            const divProduto = document.createElement("div");
            divProduto.setAttribute('class', 'produtos');
            divProduto.setAttribute('data-id', produto.id); /////////// Defina corretamente o data-id
            divProduto.appendChild(produtoTitulo);
            divProduto.appendChild(br);
            divProduto.appendChild(imgAdicionada);
            divProduto.appendChild(preco);

            localDosProdutos.appendChild(divProduto);
        });
    }).catch((error) => {
        window.alert('Não foi possível carregar os produtos: ' + error.message);
    });
}


/*window.onload = function() {
    bd.collection('produtos').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const dados = doc.data();
            let produto = new Produto(dados.nomeDoProduto, dados.preco, dados.imagemSrc);
            produto.id = doc.id;

            // Criar elementos do DOM para exibir o produto
            let produtoTitulo = document.createElement('div');
            produtoTitulo.setAttribute('class', "produtoTitulo");

            let titleProduto = document.createElement('h1');
            titleProduto.setAttribute('id', "titleProduto");
            titleProduto.textContent = produto.getNomeDoProduto();
            produtoTitulo.appendChild(titleProduto);

            let checkboxNova = document.createElement('input');
            checkboxNova.setAttribute('class', 'botao_checkbox');
            checkboxNova.setAttribute('type', 'checkbox');
            produtoTitulo.appendChild(checkboxNova);

            const imgAdicionada = document.createElement("img");
            imgAdicionada.setAttribute('id', 'imgProduto');
            imgAdicionada.src = produto.getImagemSrc();

            let br = document.createElement('br');

            let preco = document.createElement('p');
            preco.setAttribute('id', "paragrafoPreco");
            preco.textContent = 'R$ ' + produto.getPreco();

            const divProduto = document.createElement("div");
            divProduto.setAttribute('class', 'produtos');
            divProduto.appendChild(produtoTitulo);
            divProduto.appendChild(br);
            divProduto.appendChild(imgAdicionada);
            divProduto.appendChild(preco);

            localDosProdutos.appendChild(divProduto);
        });
    }).catch((error) => {
        window.alert('Não foi possível carregar os produtos: ' + error.message);
    });
};*/
