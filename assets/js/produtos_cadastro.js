document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastro-produto");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // PEGANDO OS CAMPOS
    const dados = {
      codigo: document.getElementById("codBarras").value,
      nome: document.getElementById("nomeProduto").value,
      tamanho: document.getElementById("tamanho").value,
      preco: document.getElementById("preco").value,
    };

    try {
      const response = await fetch("http://localhost:3005/api/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
        credentials: "include",
      });

      const result = await response.json();

      if (!response.ok) {
        alert("Erro ao cadastrar: " + result.message);
        return;
      }

      alert("Produto cadastrado com sucesso!");
      form.reset(); // limpar os campos
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao conectar com a API.");
    }
  });
});
