const login = document.getElementById('login');
const logout = document.getElementById('logout');
const registrar = document.getElementById('registrar')
const dropdown = document.getElementById('dropdown');

login.addEventListener('click', function() {
    if (login.style.display === 'block') {
        login.style.display = 'none';
        dropdown.style.display = 'block';
        registrar.style.display = 'none';
    } else { 
        login.style.display = 'block';
        logout.style.display = 'none';
    }
})

logout.addEventListener('click', function() {
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        login.style.display = 'block';
        registrar.style.display = 'block';
    } else { 
        dropdown.style.display = 'block';
        login.style.display = 'none';
    }
});