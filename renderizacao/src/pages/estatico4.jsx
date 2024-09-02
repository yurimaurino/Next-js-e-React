// Esta funcao esta sendo gerada apenas no lado do servidor
export async function getStaticProps() {
  console.log("[SERVER] gerando props para o componente");
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();

  return {
    props: {
      produtos,
    },
  };
}

// Esta funcao representa o componente e gera a pagina estática
export default function Estatico4(props) {
  function renderizarProdutos() {
    return props.produtos.map((produto) => {
      return (
        <li key={produto.id}>
          {produto.id} - {produto.nome} custa o valor de R${produto.preco}
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Estático #04</h1>
      <ul>{renderizarProdutos()}</ul>
    </div>
  );
}
