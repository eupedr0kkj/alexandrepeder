function toggleMenu() {
    const nav = document.getElementById('navMenu');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    document.getElementById(sectionId).classList.add('active');

    // Esconde o menu se for mobile
    const nav = document.getElementById('navMenu');
    if (window.innerWidth <= 600) {
        nav.style.display = 'none';
    }
}
