import { Button, Card, CardBody, CardFooter, Divider, Heading, Image, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";

const ListaReceitas = ({ receitas, titulo, }) => {

  const toast = useToast();

  return (
    <div>
      <Heading> {titulo}</Heading>
      <SimpleGrid minChildWidth={"300px"} p={"20px"} spacing={5}>
        {receitas.map((receita) => (
          <Card key={receita.id} borderTop={"8px"} borderColor={"#BF6262"} bg={"rgba(107, 81, 81, .1) "} >
            <CardBody>

              <Image src={receita.imagem} alt=""></Image>
              <Heading as={"h3"} size={"lg"}>{receita.titulo}</Heading>
              <Text>{receita.resumo}</Text>

            </CardBody>
            <Divider borderColor={"gray.200"}/>
            <CardFooter>
              <Link to={`Receita/${receita.id}`}>
                <Button bg={"#BF6262"}>Ver detalhes</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </div>

  );
};

export default ListaReceitas;


