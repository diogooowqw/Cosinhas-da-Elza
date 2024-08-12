

let cadastrar=document.querySelector('.cadastrar')

function cadastrarUsuario(){
   window.location='cadastrar.html'
}

cadastrar.addEventListener('click',cadastrarUsuario)





  // Função para logar usuário
document.getElementById('login-btn').addEventListener ('click', () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword (email, password)
    .then((userCredential) => {
    // Redireciona para a página do jogo
    if(email=='diogosouzalmeida2@gmail.com' && password){
      window.location.href = 'telaDoClient.html'
    }
    else{
 window.location.href='telaDoClient.html'
    }
   
    })
    .catch((error) => {
    alert('Erro ao logar: ' + error.message);
    });
    });
