export async function getStaticPaths() {
  const resp = await fetch("http://localhost:3000/api/alunos/tutores");
  const ids = await resp.json();

  const paths = ids.map((id) => {
    return { params: { id: `${id}` } };
  });

  return {
    fallback: true, // false = 404
    paths,
  };
}

export async function getStaticProps({ params }) {
  const resp = await fetch(`http://localhost:3000/api/alunos/${params.id}`);
  const aluno = await resp.json();

  return {
    props: {
      aluno,
    },
  };
}

export default function AlunoPorId(props) {
  const { aluno } = props;
  return (
    <div>
      <h1>Detalhes do Aluno</h1>
      {aluno ? 
        <ul>
          <li>Id do Aluno: {aluno.id}</li>
          <li>Nome do Aluno: {aluno.nome}</li>
          <li>Email do Aluno: {aluno.email}</li>
        </ul>
       : 
        false
      }
    </div>
  );
}
