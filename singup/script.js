let btn = document.querySelector('.fa-eye');
let btnConfirm = document.querySelector('.confirm');

let nome = document.querySelector('#name');
let spanName = document.querySelector('#spanName');
let validName = false;

let email = document.querySelector('#email');
let spanEmail = document.querySelector('#spanEmail');
let validEmail = false;

let username = document.querySelector('#username');
let spanUsername = document.querySelector('#spanUsername');
let validUsername = false;

let passwordSingup = document.querySelector('#passwordSingup');
let spanPasswordSingup = document.querySelector('#spanPasswordSingup');
let validPasswordSingup = false;

let passwordSingupConfirm = document.querySelector('#passwordSingupConfirm');
let spanPasswordSingupConfirm = document.querySelector('#spanPasswordSingupConfirm')
let validPasswordSingupConfirm = false;

let msgError = document.getElementById('msgError')
let msgSuccess = document.getElementById('msgSuccess')

nome.addEventListener('keyup', () => {
  if (nome.value.length < 3) {
    nome.setAttribute('style', 'border-color: red');
    spanName.setAttribute('style', 'display: block');
    validName = false;
  } else {
    nome.setAttribute('style', 'border-color: green');
    spanName.setAttribute('style', 'display: none');
    validName = true;
  }
});

email.addEventListener('keyup', () => {
  validacaoEmail(email)
})

username.addEventListener('keyup', () => {
  if (username.value.length <= 4) {
    username.setAttribute('style', 'border-color: red');
    spanUsername.setAttribute('style', 'display: block');
    validUsername = false;
  } else {
    username.setAttribute('style', 'border-color: green');
    spanUsername.setAttribute('style', 'display: none');
    validUsername = true;
  }
});

passwordSingup.addEventListener('keyup', () => {
  if (passwordSingup.value.length <= 5) {
    passwordSingup.setAttribute('style', 'border-color: red');
    spanPasswordSingup.setAttribute('style', 'display: block');
    validPasswordSingup = false;
  } else {
    passwordSingup.setAttribute('style', 'border-color: green');
    spanPasswordSingup.setAttribute('style', 'display: none');
    validPasswordSingup = true;
  }
});

passwordSingupConfirm.addEventListener('keyup', () => {
  if (passwordSingupConfirm.value != passwordSingup.value) {
    passwordSingupConfirm.setAttribute('style', 'border-color: red');
    spanPasswordSingupConfirm.setAttribute('style', 'display: block');
    validPasswordSingupConfirm = false;
  } else {
    passwordSingupConfirm.setAttribute('style', 'border-color: green');
    spanPasswordSingupConfirm.setAttribute('style', 'display: none');
    validPasswordSingupConfirm = true;
  }
});


btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#passwordSingup')
  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
});


btnConfirm.addEventListener('click', () => {
  let inputSenhaConfirm = document.querySelector('#passwordSingupConfirm')
  if (inputSenhaConfirm.getAttribute('type') == 'password') {
    inputSenhaConfirm.setAttribute('type', 'text')
  } else {
    inputSenhaConfirm.setAttribute('type', 'password')
  }
});

function validacaoEmail(email) {
  let usuario = email.value.substring(0, email.value.indexOf("@"));
  let dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length);

  if ((usuario.length >= 1) &&
    (dominio.length >= 3) &&
    (usuario.search("@") == -1) &&
    (dominio.search("@") == -1) &&
    (usuario.search(" ") == -1) &&
    (dominio.search(" ") == -1) &&
    (dominio.search(".") != -1) &&
    (dominio.indexOf(".") >= 1) &&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
      email.setAttribute('style', 'border-color: green')
      spanEmail.setAttribute('style','display: none')
      validEmail = true;
  } else {
    email.setAttribute('style', 'border-color: red')
    spanEmail.setAttribute('style', 'display: block')
    validEmail = false;
  }
}

function singup() {
  if (validName && validEmail && validUsername && validPasswordSingup && validPasswordSingupConfirm) {
    
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = 'Cadastrando usuário...'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML= ''
    
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
    listaUser.push({
      nameStorage: nome.value,
      emailStorage: email.value,
      usernameStorage: username.value,
      passwordStorage: passwordSingup.value,
    })

    localStorage.setItem('listaUser', JSON.stringify(listaUser))


    setTimeout(() => {
      window.location.href = '../index.html'
    }, 3000)
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML= 'Preencha todos os campos corretamente!'
    msgSuccess.setAttribute('style', 'display: none')
    msgSuccess.innerHTML = ''
  }
  
}