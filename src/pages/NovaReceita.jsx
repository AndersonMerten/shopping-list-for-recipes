import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NovaReceita = () => {

    const [titulo, setTitulo] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [modoPreparo, setModoPreparo] = useState('');
    const [resumo, setResumo] = useState('');
    const [imagem, setImagem] = useState('');
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();

    const handleNovaReceita = (e) =>{
        e.preventDefault();
        const receita = {titulo, ingredientes, modoPreparo, resumo, imagem};
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
      <Heading>Crie uma nova receita</Heading>
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

        <label>Resumo</label>
        <input type="text" 
        required 
        value={resumo}
        onChange={(e) => setResumo(e.target.value)}
        />

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
