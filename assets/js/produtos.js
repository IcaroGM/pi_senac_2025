document.addEventListener("DOMContentLoaded", async () => {
  const tabelaBody = document.querySelector("tbody");

  try {
    const response = await fetch("http://localhost:3005/api/produtos", {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Erro ao carregar produtos");
    }

    const produtos = await response.json();

    tabelaBody.innerHTML = ""; // limpa a tabela inicial

    produtos.forEach((p) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td><img class="lapiz" src="../assets/img/editar.png" alt="Editar"></td>
        <td>${p.codigo}</td>
        <td>${p.nome}</td>
        <td>R$ ${parseFloat(p.preco).toFixed(2)}</td>
        <td>${p.tamanho}</td>
        <td>${p.grupo || "-"}</td>
        <td>${p.setor || "-"}</td>
      `;

      tabelaBody.appendChild(tr);
    });
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
  }
});
