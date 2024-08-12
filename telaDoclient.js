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




let botao_carrinho=document.getElementById('botao_carrinho')
let back_carrinho=document.querySelector('.back_carrinho')
let insta=document.querySelector('.insta')
let simboloDoWtsap=document.getElementById('simboloDoWtsap')
let botao_sairDo_carrinho=document.getElementById('botao_sairDo_carrinho')


let localDosProdutos = document.querySelector('.localDosProdutos');



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
               let carrinho=document.createElement('img')
               carrinho.src=function editar() {
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
               let titleProduto=document.createElement('h1');
               titleProduto.setAttribute('id',"titleProduto");
               titleProduto.textContent = this.nomeDoProduto;
              
               const imgAdicionada = document.createElement("img");
               imgAdicionada.setAttribute('id', 'imgProduto');
               let br = document.createElement('br');
               let preco = document.createElement('p');
                preco.setAttribute('id',"paragrafoPreco");
                
                preco.textContent='R$'+" "+this.preco;
             
   
               const divProduto = document.createElement("div");
               divProduto.setAttribute('class', 'produtos');
               divProduto.appendChild(titleProduto);
               divProduto.setAttribute('data-id', this.id); // Adiciona o ID do produto como data-id
               divProduto.appendChild(br);
               imgAdicionada.src = this.imagemSrc;
               divProduto.appendChild(imgAdicionada);
               divProduto.appendChild(preco)
   
               localDosProdutos.appendChild(divProduto);
            };
            
           }

function sairDocarrinhoProdutos(){
    back_carrinho.classList.remove('back_carrinhoAnimacao')
    botao_carrinho.style.display='inline'
      titleCarrinho.style.display='none'
}
function irParaWtsap(){
    window.location.href='https://wa.me/553399613873'
   }
   function irParaInsta(){
      window.location.href='https://www.instagram.com/elzaenxovais_?igsh=MWxxbHZnc2Nza294Zg=='
   }



simboloDoWtsap.addEventListener('click',irParaWtsap)
insta.addEventListener('click',irParaInsta)







window.onload = function() {
   bd.collection('produtos').get().then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
           const dados = doc.data();
           let produto = new Produto(dados.nomeDoProduto, dados.preco, dados.imagemSrc);
           produto.id = doc.id;


          produto.criarProduto()
       });
   }).catch((error) => {
       window.alert('Não foi possível carregar os produtos: ' + error.message);
   });
};