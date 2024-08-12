// Função para registrar novo usuário
document.getElementById('signup-btn').addEventListener ('click', () =>
    {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword (email, password)
    .then((userCredential) => {
    alert('Usuario cadastrado com sucesso!' );
    window.location='login.html'
    })
    .catch((error) => {
    alert('Erro ao cadastrar usuario: ' + error.message);
    });
    });
    let login=document.querySelector('#login')

    function  loginUsuario (){
        window.location='login.html'
    }
    login.addEventListener('click',loginUsuario)
