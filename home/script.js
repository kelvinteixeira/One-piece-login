if (localStorage.getItem('token') == null) {
    alert('Você não está logado!')
    window.location.href = '../index.html'
}

function logout() {
    localStorage.removeItem('token')
    window.location.href = '../index.html'
}