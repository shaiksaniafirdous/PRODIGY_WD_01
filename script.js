// script.jss

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
        navbar.style.backgroundColor = '#323232';
    } else {
        navbar.style.backgroundColor = '#161b33';
    }
});
