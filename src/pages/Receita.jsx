import { useNavigate, useParams } from "react-router-dom";
import { Button, ButtonGroup, FormControl, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Receita = () => {
  let receitaVazia = {
    id: "",
    titulo: "",
    imagem: "",
    ingredientes: "",
    modoPreparo: "",
    resumo: ""
  }


  const { id } = useParams();
  const [receita, setReceita] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [receitaEditada, setReceitaEditada] = useState(receitaVazia);

  useEffect(() =>{
    fetch(`http://localhost:8000/Receitas/${id}`)
    .then( res =>{
      if(!res){
        throw new Error("O link indicado não foi encontrado no servidor, por favor verifique com o suporte!");        
      }
      return res.json();
    }).then( data =>{
      setReceita(data);
      setCarregando(false);  
      setErro(null);
      setReceitaEditada(data);
      
    })
    .catch(err =>{
      setErro(err.message);
      setCarregando(false);
    })
  },[]);


  const handleExcluirReceita = () => {
    fetch(`http://localhost:8000/Receitas/${id}`, {
      method: "DELETE"
    }).then(() => {
      navigate("/");
    })
  }

  const handleEditarReceita = () =>{
    fetch(`http://localhost:8000/Receitas/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(receitaEditada)
    }).then(() => {
      onClose();
      window.location.reload();
    })
  }

  const onInputChange = (e , name) => {

    const val = (e.target && e.target.value) || '';
    let _receitaEditada = { ...receitaEditada };
    _receitaEditada[`${name}`] = val;

    setReceitaEditada(_receitaEditada);
};


  return (
    <div className="Receita">

      {carregando && <div>Carregando sua receita...</div>}
      {erro && <div>{erro}</div>}
      {receita && (
        <article>
          <h1>{receita.titulo}</h1>
          <div className="receita-img">
            <img src={receita.imagem} alt="" />
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
              {receita.modoPreparo.split("\n").map((passo, index) => (
                <li key={index}>{passo.trim()}</li>
              ))}
            </ol>
          </div>
          <ButtonGroup>
            <Button onClick={handleExcluirReceita}>Deletar receita</Button>
            <Button onClick={onOpen}>Editar receita</Button>
          </ButtonGroup>

          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={"xl"}
          >

            <ModalOverlay />
            <ModalContent>
              <ModalHeader> Editar receita</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack alignItems={"baseline"} direction={"column"} >
                  <FormControl mb={"10px"}>
                    <FormLabel htmlFor="titulo">Nome da receita</FormLabel>
                    <Input type='text'
                      id="titulo"
                      value={receitaEditada.titulo}
                      required
                      onChange={(e) => onInputChange(e, 'titulo')}
                      autoFocus/>
                  </FormControl >
                  <FormControl mb={"10px"}>
                    <FormLabel htmlFor="ingredientes">Ingredientes</FormLabel>
                    <Textarea 
                     id="ingredientes"
                     value={receitaEditada.ingredientes}
                     required
                     onChange={(e) => onInputChange(e, 'ingredientes')}
                     autoFocus                    
                    ></Textarea>
                    <FormHelperText>Lembre-se de pressionar Enter após cada ingrediente que você adicionar! :)</FormHelperText>
                  </FormControl>
                  <FormControl mb={"10px"}>
                    <FormLabel htmlFor="modoPreparo">Modo de preparo</FormLabel>
                    <Textarea 
                    id="modoPreparo"
                    value={receitaEditada.modoPreparo}
                    required
                    onChange={(e) => onInputChange(e, 'modoPreparo')}
                    autoFocus 
                    ></Textarea>
                    <FormHelperText>Não esqueça de usar Enter para separar cada instrução! :)</FormHelperText>
                  </FormControl>
                  <FormControl mb={"10px"}>
                    <FormLabel htmlFor="resumo">Resumo da receita</FormLabel>
                    <Input type='text'
                      id="resumo"
                      value={receitaEditada.resumo}
                      required
                      onChange={(e) => onInputChange(e, 'resumo')}
                      autoFocus
                       />
                  </FormControl>
                  <FormControl mb={"10px"}>
                    <FormLabel htmlFor="imagem">Caminho da imagem</FormLabel>
                    <Input type='text'
                      id="imagem"
                      value={receitaEditada.imagem}
                      required
                      onChange={(e) => onInputChange(e, 'imagem')}
                      autoFocus
                       />
                  </FormControl>
                </VStack>
              </ModalBody>
              <ModalFooter>
            <Button type="button" bg={"#EB3E3F"} mr={3} onClick={handleEditarReceita} >
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
            </ModalContent>
          </Modal>
        </article>
      )}
    </div>
  );
};

export default Receita;
