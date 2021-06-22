if (localStorage.getItem('token') == null) {
    alert('Você não está logado!')
    window.location.href = '../login/index.html'
}

function logout() {
    localStorage.removeItem('token')
    window.location.href = '../login/index.html'
}