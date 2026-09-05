const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav?.classList.remove('open')));
