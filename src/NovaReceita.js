import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NovaReceita = () => {

    const [titulo, setTitulo] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [modoPreparo, setModoPreparo] = useState('');
    const [dificuldade, setDificuldade] = useState('Médio');
    const [imagem, setImagem] = useState('');
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();

    const handleNovaReceita = (e) =>{
        e.preventDefault();
        const receita = {titulo, ingredientes, modoPreparo, dificuldade, imagem};
        setCarregando(true);
        fetch("http://localhost:8000/Receitas", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(receita)
        }).then((e)=>{
            console.log(e);
            setCarregando(false);
            navigate('/');
            
        })
    }


  return (
    <div className="novaReceita">
      <h1>Crie uma nova receita</h1>
      <form onSubmit={handleNovaReceita}>
        <label>Nome da receita</label>
        <input type="text" 
        required 
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Ingredientes</label>
        <textarea required
        value={ingredientes}
        onChange={(e) => setIngredientes(e.target.value)}
        >
        </textarea>

        <label>Modo de preparo</label>
        <textarea required
        value={modoPreparo}
        onChange={(e) => setModoPreparo(e.target.value)}
        >
        </textarea>

        <label>Dificuldade da receita</label>
        <select
        required
        value={dificuldade}
        onChange={(e) => setDificuldade(e.target.value)}>
          <option value="Fácil">Fácil</option>
          <option value="Médio">Médio</option>
          <option value="Difícil">Difícil</option>
        </select>

        <label>Caminho da imagem</label>
        <input 
        type="text" 
        required 
        value={imagem}
        onChange={(e)=> setImagem(e.target.value)}
        />
        
        {!carregando && <button>Adicionar receita</button>}
        {carregando &&<button disabled>Adicionando...</button>}
        
      </form>
    </div>
  );
};

export default NovaReceita;
