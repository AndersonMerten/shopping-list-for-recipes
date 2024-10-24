import { Button, ButtonGroup, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Spacer, Toast, useDisclosure, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

const Navbar = () => {

  const [nome, setNome] = useState("");
  const [CPF, setCPF] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const handleDadosInvalidos = () => {
    toast({
      title: 'Parece que os dados estão incorretos',
      description: "Verifique quais dados estão incorretos e tente novamente!",
      status: 'error',
      duration: 9000,
      isClosable: true,
      containerStyle: {
        textColor: 'red',
        maxWidth: '100%',
      },

    })
  }

  const formataCPF = (val) => {
    let cpf = val.toString();
    cpf = cpf.padStart(11, '0');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');


    setCPF(cpf);

  }

  return (
    <Flex h="100px" bg="" p="20px" alignItems="center">
      <Heading> Lista de compras das receitas</Heading>
      <Spacer />
      <ButtonGroup  >
        <Button bg='#EB3E3F'>
          <Link to="/"> Lista de receitas </Link>
        </Button>
        <Button bg='#EB3E3F'>
          <Link to="/NovaReceita"> Nova receita </Link>
        </Button>
        <Button bg='#EB3E3F' onClick={onOpen}>
          Perfil
        </Button>
      </ButtonGroup>





      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >

        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Crie o seu perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack alignItems={"baseline"} direction={"column"} >
              <FormControl mb={"10px"}>
                <FormLabel htmlFor="nome">Nome</FormLabel>
                <Input type='text'
                  id="nome"
                  value={nome}
                  required
                  onChange={(e) => (setNome(e.target.value))}
                  autoFocus />
              </FormControl >
              <FormControl mb={"10px"}>
                <FormLabel htmlFor="CPF">CPF</FormLabel>
                <Input type='text'
                  id="CPF"
                  value={CPF}
                  disabled
                  autoFocus />
                <Slider defaultValue={60} min={0} max={99999999999} onChange={(val) => formataCPF(val)}>
                  <SliderTrack bg='red.100'>
                    <SliderFilledTrack bg='tomato' />
                  </SliderTrack>
                  <SliderThumb boxSize={6} />
                </Slider>
                <FormHelperText>Dica: Você pode usar as setinhas do teclado :)</FormHelperText>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button type="button" bg={"#EB3E3F"} mr={3} onClick={handleDadosInvalidos} >
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </Flex>





  );
};

export default Navbar;

