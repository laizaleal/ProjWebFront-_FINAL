function exibirMensagem(maravilha) {
    alert("Você está visitando " + maravilha + "!");
}
document.querySelectorAll('.maravilha-link').forEach(function(link) {
    link.addEventListener('click', function() {
        var maravilha = link.textContent;
        exibirMensagem(maravilha);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Elementos da página
  const body = document.body;
  const button = document.getElementById("bd-theme");
  const themeText = document.getElementById("bd-theme-text");

  // Verifique o tema atual no localStorage ou use o tema padrão (auto)
  const currentTheme = localStorage.getItem("theme") || "auto";

  // Função para alternar entre os temas e ícones
  function toggleTheme(theme) {
    body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Atualize o texto do botão e o ícone
    if (theme === "light") {
      themeText.textContent = "Toggle theme (Light)";
      button.querySelector("use").setAttribute("href", "#sun-fill");
    } else if (theme === "dark") {
      themeText.textContent = "Toggle theme (Dark)";
      button.querySelector("use").setAttribute("href", "#moon-stars-fill");
    } else {
      themeText.textContent = "Toggle theme (Auto)";
      button.querySelector("use").setAttribute("href", "#moon-stars-fill");
    }
  }

  // Adicione um ouvinte de evento para o botão
  button.addEventListener("click", function () {
    if (body.getAttribute("data-theme") === "dark") {
      toggleTheme("light");
    } else {
      toggleTheme("dark");
    }
  });

  // Inicialize o tema com base no valor atual
  toggleTheme(currentTheme);
});


/*-----função Navbar----*/



function pesquisar() {
  var termoPesquisa = document.getElementById('searchbar').value.toLowerCase();

  var maravilhas = {
      'chichén itzá': 'chichenitza.html',
      'coliseu': 'coliseu.html',
      'cristo redentor': 'cristo.html',
      'machu picchu': 'machupicchu.html',
      'muralha da china': 'muralhadachina.html',
      'ruinas de petra': 'ruinaspetra.html',
      'taj mahal': 'tajmahal.html',
      'cristo': 'cristo.html',
      'chichen': 'chichenitza.html',
      'machu': 'machupicchu.html',
      'muralha': 'muralhadachina.html',
      'taj': 'tajmahal.html',
      'mahal': 'tajmahal.html',
      'ruinas': 'ruinaspetra.html',
      'brasil': 'cristo.html',
      'china': 'muralhadachina.html',
      'jordania': 'ruinaspetra.html',
      'itália': 'coliseu.html',
      'jordânia': 'ruinaspetra.html',
      'italia': 'coliseu.html',
      'méxico': 'chichenitza.html',
      'mexico': 'chichenitza.html',
      'peru': 'machupicchu.html',
      'índia': 'tajmahal.html',
      'india': 'tajmahal.html',
  };

  if (maravilhas.hasOwnProperty(termoPesquisa)) {
          var urlDaPagina = maravilhas[termoPesquisa];

      window.location.href = urlDaPagina;
  } else {
      alert('Maravilha não encontrada!');
  }
}



