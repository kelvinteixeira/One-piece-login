let btn = document.querySelector('.fa-eye');
let usuario = document.getElementById('usuario');
let senha = document.getElementById('password')


btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#password');
  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
});


function login() {
  let usuario = document.querySelector('#usuario')
  let password = document.querySelector('#password')

  let msgLogin = document.querySelector('#msgLogin')
  let listaUser = []
  userValid = {
    name: '',
    email: '',
    username: '',
    password: '',
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser.forEach((item) => {
    if (usuario.value == item.usernameStorage && password.value == item.passwordStorage) {
      userValid = {
        name: item.nameStorage,
        email: item.emailStorage,
        username: item.usernameStorage,
        password: item.passwordStorage,
      }
    }
  });

  if (usuario.value == userValid.username && usuario.value != '' && password.value == userValid.password && password.value != '') {
    msgLogin.setAttribute('style', 'display: block; background-color: #bbffbe80; ; color: #00bb00;')
    msgLogin.innerHTML = `Seja bem vindo pirata ${userValid.username}`
    
    setTimeout(() => {
      window.location.href = '../home/index.html'
    }, 3000)
    
    let token = Math.random().toString(12).substr(2)
    localStorage.setItem('token', token)
  } else {
    usuario.setAttribute('style', 'border-color: red')
    password.setAttribute('style', 'border-color: red')
    msgLogin.setAttribute('style', 'display: block')
    msgLogin.innerHTML = 'Usuário ou senha inválidos'
    usuario.focus();
  }

}

