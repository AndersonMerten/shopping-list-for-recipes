import { useState } from "react";

const Home = () => {
  const [receitas, setReceitas] = useState([
    {
      id: 1,
      imagem: "/images/macarrao.jpg",
      titulo: "Macarrão com carne moída",
      ingredientes: "macarrao e carne moida",
      preparo: "bem fácil",
    },
    {
      id: 2,
      imagem: "/images/frango.jpg",
      titulo: "Frango a passarinho",
      ingredientes: "frango e passarinho",
      preparo: "bem médio",
    },
    {
      id: 3,
      imagem: "/images/churrasco.jpg",
      titulo: "Churrasco a moda da casa",
      ingredientes: "churrasco e casa",
      preparo: "bem dificil",
    },
  ]);

  return (
    <div className="Home">
      {receitas.map((receita) => (
        <div className="post-preview" key={receita.id}>
            <div className="preview">
          <img className="post-preview-img" src={receita.imagem} alt="" />
          <div className="post-preview-text">
            <h2>{receita.titulo}</h2>
            <p>Essa receita é considerada {receita.preparo}</p>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
