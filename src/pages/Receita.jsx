import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const Receita = () => {
  const { id } = useParams();
  const { data: receita,carregando,erro,} = useFetch(`http://localhost:8000/Receitas/${id}`);
  const navigate = useNavigate();

  const handleExcluirReceita = ()=>{
    fetch(`http://localhost:8000/Receitas/${id}`, {
        method: "DELETE"
    }).then(()=>{
        navigate("/");
    })
  }


  return (
    <div className="Receita">
        
      {carregando && <div>Carregando sua receita...</div>}
      {erro && <div>{erro}</div>}
      {receita && (
        <article>
          <h1>{receita.titulo}</h1>
          <div className="receita-img">
            <img src={receita.imagem} />
          </div>
          <div className="receita-texto">
            <h2>Ingredientes</h2>
            <ul>
              {receita.ingredientes.split("\n").map((ingrediente, index) => (
                <li key={index}>{ingrediente.trim()}</li>
              ))}
            </ul>
            <h2>Modo de preparo</h2>
            <ol>
            {console.log(receita)}

              {receita.modoPreparo.split("\n").map((passo, index) => (
                <li key={index}>{passo.trim()}</li>
              ))}
            </ol>
          </div>
          <button onClick={handleExcluirReceita}>Deletar receita</button>
        </article>
      )}
    </div>
  );
};

export default Receita;
