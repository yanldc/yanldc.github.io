const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const links = [
  { href: 'index.html', label: 'Quem sou' },
  { href: 'formacao.html', label: 'Formação' },
  { href: 'profissional.html', label: 'Profissional' },
  { href: 'desenvolvimento.html', label: 'Desenvolvimento' },
];

const nav = document.getElementById('menu-nav');

nav.innerHTML = `
  <header class="cabecalho">
    <img class="cabecalho-imagem" src="fotos/logo.png" alt="Logo">
    <nav class="cabecalho-menu">
      <ul>
        ${links.map(link => `
          <li>
            <a class="cabecalho-menu-item ${currentPage === link.href ? 'menu-ativo' : ''}" href="${link.href}">
              ${link.label}
            </a>
          </li>
        `).join('')}
      </ul>
    </nav>
  </header>
`;
