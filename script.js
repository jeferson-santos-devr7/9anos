// Ação do Botão Inicial (Capa)
document.getElementById('btn-entrar').addEventListener('click', function() {
  document.getElementById('capa-inicial').classList.add('oculto');
  document.getElementById('conteudo-site').classList.remove('oculto');
});

// Contador de dias juntos
const inicio = new Date(2017, 6, 22); 
const hoje = new Date();
const diffMs = hoje - inicio;
const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
const elementoDias = document.getElementById('dias');
if (elementoDias) {
  elementoDias.textContent = dias.toLocaleString('pt-BR');
}

// Dicionário opcional para legendas especiais em fotos específicas
const legendasPersonalizadas = {
  "2017/1700.jpg": "O início de tudo",
  "2026/2600.jpg": "9 anos depois ❤️"
};

// Função para injetar as imagens de cada pasta de ano dinamicamente com suporte a Lightbox
function carregarFotosAno(ano, listaDeArquivos) {
  const container = document.getElementById(`galeria-${ano}`);
  if (container) {
    listaDeArquivos.forEach(arquivo => {
      const caminho = `img/${ano}/${arquivo}`;
      const img = document.createElement('img');
      img.src = caminho;
      img.alt = `Foto ${ano}`;
      img.loading = 'lazy';
      
      // Evento de clique para abrir o Lightbox
      img.addEventListener('click', function() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxLegenda = document.getElementById('lightbox-legenda');
        
        lightboxImg.src = caminho;
        lightboxLegenda.textContent = legendasPersonalizadas[caminho] || `Momento de ${ano}`;
        lightbox.classList.remove('oculto');
      });

      container.appendChild(img);
    });
  }
}

// Inserção das fotos correspondentes exatamente aos arquivos existentes
carregarFotosAno(2017, ['1700.jpg', '1701.jpg', '1702.jpg', '1703.jpg']);
carregarFotosAno(2018, ['1800.jpg', '1801.jpg', '1802.jpg', '1803.jpg']);
carregarFotosAno(2019, ['1900.jpg', '1901.jpg', '1902.jpg', '1903.jpg']);
carregarFotosAno(2020, ['2000.jpg', '2001.jpg', '2002.jpg']);
carregarFotosAno(2021, ['2100.jpg', '2102.jpg', '2103.jpg']);
carregarFotosAno(2022, ['2200.jpg', '2201.jpg', '2202.jpg', '2203.jpg']);
carregarFotosAno(2023, ['2300.jpg', '2301.jpg', '2302.jpg']);
carregarFotosAno(2024, ['2400.jpg', '2401.jpg', '2402.jpg']);
carregarFotosAno(2025, ['2500.jpg', '2502.jpg', '2503.jpg']);
carregarFotosAno(2026, ['2600.jpg', '2601.jpg', '2602.jpg']);

// Fechar Lightbox
const lightbox = document.getElementById('lightbox');
document.getElementById('lightbox-fechar').addEventListener('click', function() {
  lightbox.classList.add('oculto');
});
lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    lightbox.classList.add('oculto');
  }
});

// Ação do Botão Surpresa Secreta
document.getElementById('btn-surpresa').addEventListener('click', function() {
  const mensagem = document.getElementById('mensagem-secreta');
  mensagem.classList.toggle('oculto');
  this.textContent = mensagem.classList.contains('oculto') ? '💌 Uma última coisinha...' : 'Esconder mensagem ✨';
});

// Efeito de animação suave ao rolar a página (Scroll Reveal)
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});