import { Link } from "react-router-dom";

const ListaReceitas = ({ receitas, titulo, }) => {
  return (
    <div className="post-list">
      <h1>{titulo}</h1>
      {receitas.map((receita) => (
        <div className="post-preview" key={receita.id}>
          <div className="preview">
            <Link to={`Receita/${receita.id}`}>
            <img className="post-preview-img" src={receita.imagem} alt="" />
            <div className="post-preview-text">
              <h2>{receita.titulo}</h2>
              <p>A dificuldade para fazer essa receita é {receita.dificuldade}</p>
            </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaReceitas;
