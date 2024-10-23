
import ListaReceitas from "./ListaReceitas";
import useFetch from "../useFetch";

const Home = () => {
  const {data: receitas, carregando, erro} = useFetch ('http://localhost:8000/Receitas');
  

  return (
    <div className="Home">
      {carregando &&<div>Carregando as receitas, aguarde um momento... </div>}
      {receitas &&<ListaReceitas receitas = {receitas} titulo = "Todas as receitas"/>}
      {erro && <div>{erro}</div>}
    </div>
  );
};

export default Home;
