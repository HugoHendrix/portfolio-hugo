// MENU MOBILE
const toggle = document.querySelector('.menu-toggle');

function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open);
}

toggle.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// LINK DO WHATSAPP
const whatsappNumero = "+5517996781133";
const mensagem = "Olá, gostaria de saber mais sobre os seus serviços.";
const whatsappLink = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagem)}`;

document.querySelectorAll('.whatsappLink').forEach(link => {
    link.href = whatsappLink;
});

// ANO DO RODAPÉ
document.getElementById('ano').textContent = new Date().getFullYear();
