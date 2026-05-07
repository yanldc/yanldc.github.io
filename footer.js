document.addEventListener('DOMContentLoaded', function () {
  const footer = document.getElementById('footer-nav');
  if (!footer) return;

  footer.innerHTML = `
    <footer>
      <div>Desenvolvido por Yan Lemke de Castro</div>
      <div>@yanldc©</div>
      <div>
        <a href="https://www.instagram.com/yanldc/" target="_blank"><img src="fotos/insta.png" width="20" height="20" alt="Instagram"></a>
        <a href="https://www.linkedin.com/in/yan-lemke-de-castro-889151249" target="_blank"><img src="fotos/linkedin.png" width="20" height="20" alt="LinkedIn"></a>
        <a href="https://github.com/yanldc" target="_blank"><img src="fotos/github.png" width="20" height="20" alt="GitHub"></a>
      </div>
    </footer>
  `;
});
