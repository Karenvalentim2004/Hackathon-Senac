const formulario = document.getElementById('formulario');
if (formulario) {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
 
    const anuncio = {
      titulo: document.getElementById('titulo').value.trim(),
      descricao: document.getElementById('descricao').value.trim(),
      categoria: document.getElementById('categoria').value.trim(),
      nome: document.getElementById('nome').value.trim(),
      local: document.getElementById('local').value.trim(),
      contato: document.getElementById('contato').value.trim()
    };
 
    const anuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');
    anuncios.unshift(anuncio); 
    localStorage.setItem('anuncios', JSON.stringify(anuncios));
 
    alert('Serviço publicado com sucesso!');
    formulario.reset();
    window.location.href = 'index.html';
  });
}
 

const lista = document.getElementById('lista-anuncios');
if (lista) {
  const anuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');
 
  if (anuncios.length === 0) {
    lista.innerHTML = '<p style="text-align:center">Nenhum anúncio publicado ainda.</p>';
  } else {
    anuncios.forEach((a) => {
      const div = document.createElement('div');
      div.className = 'anuncio';
      div.innerHTML = `
        <h3>${a.titulo}</h3>
        <p><strong>Categoria:</strong> ${a.categoria}</p>
        <p>${a.descricao}</p>
        <p><strong>Anunciante:</strong> ${a.nome}</p>
        <p><strong>Local:</strong> ${a.local}</p>
        <p><strong>Contato:</strong> ${a.contato}</p>
      `;
      lista.appendChild(div);
    });
  }
}