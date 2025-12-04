// Mock de instrutores (poderia vir de uma API futuramente)
const instrutoresFake = [
    {
        nome: "Carlos Souza",
        cidade: "São Paulo",
        categoria: "B",
        experiencia: "5 anos",
        nota: 4.8,
        valor: 90,
    },
    {
        nome: "Ana Ribeiro",
        cidade: "São Paulo",
        categoria: "A e B",
        experiencia: "8 anos",
        nota: 4.9,
        valor: 50,
    },
    {
        nome: "João Martins",
        cidade: "Guarulhos",
        categoria: "B",
        experiencia: "3 anos",
        nota: 4.6,
        valor: 70,
    },
];

const buscaForm = document.getElementById("busca-form");
const cidadeInput = document.getElementById("cidade");
const resultadosSection = document.getElementById("resultados");
const listaInstrutores = document.getElementById("lista-instrutores");
const contatoForm = document.getElementById("contato-form");

buscaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const termo = cidadeInput.value.trim().toLowerCase();
    if (!termo) return;

    const filtrados = instrutoresFake.filter((inst) =>
        inst.cidade.toLowerCase().includes(termo)
    );

    renderInstrutores(filtrados, termo);
});

function renderInstrutores(lista, termo) {
    listaInstrutores.innerHTML = "";

    if (lista.length === 0) {
        listaInstrutores.innerHTML = `<p>Nenhum instrutor encontrado para "${termo}".</p>`;
    } else {
        lista.forEach((inst) => {
            const card = document.createElement("article");
            card.className = "instructor-card";
            card.innerHTML = `
        <h3>${inst.nome}</h3>
        <p class="instructor-meta">${inst.cidade} • Categoria ${inst.categoria}</p>
        <span class="badge">${inst.experiencia} de experiência</span>
        <br/>
        <span class="badgeValor">Valor por aula: R$${inst.valor}</span>
        <div class="instructor-actions">
          <span>⭐ ${inst.nota.toFixed(1)}</span>
          <button type="button">Ver contato</button>
        </div>
      `;
            listaInstrutores.appendChild(card);
        });
    }

    resultadosSection.classList.remove("hidden");
    resultadosSection.scrollIntoView({ behavior: "smooth" });
}

contatoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Mensagem enviada! Em breve entraremos em contato.");
    contatoForm.reset();
});
