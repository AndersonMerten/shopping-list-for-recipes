import { useEffect, useState } from "react";

const useFetch = (url) =>{

    const [data, setData] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);


    useEffect(() =>{
        fetch(url)
        .then( res =>{
          if(!res){
            throw new Error("O link indicado não foi encontrado no servidor, por favor verifique com o suporte!");        
          }
          return res.json();
        }).then( data =>{
          setData(data);
          setCarregando(false);  
          setErro(null);
        })
        .catch(err =>{
          setErro(err.message);
          setCarregando(false);
        })
      },[url]);
    
      return {data, carregando, erro};

}

export default useFetch;