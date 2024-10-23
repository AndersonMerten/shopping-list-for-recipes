import { Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex  h="100px" bg="" p="20px" alignItems="center">
      <Heading> Lista de compras das receitas</Heading>
      <Spacer/>
      <ButtonGroup  >
        <Button colorScheme='red'>
          <Link to="/"> Lista de receitas </Link>
        </Button>
        <Button colorScheme='red'>
          <Link to="/NovaReceita"> Nova receita </Link>
        </Button>
        <Button colorScheme='red'>
          <Link to=""> Perfil </Link>
        </Button>
      </ButtonGroup>


    </Flex>





  );
};

export default Navbar;

