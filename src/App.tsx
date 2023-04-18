import { Card } from "./Components/Card";

import { Layout } from "./Components/Layout";
import { ChakraProvider, Input, Center, Box, Button } from "@chakra-ui/react";
import { login } from "./services/login";


function App() {
  return (
   <ChakraProvider>
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
        <Center>
           <h1>
               Faça o login
          </h1>
         </Center>
            <Input placeholder="email" />
            <Input placeholder="password" type="password" />
            <Center>
              <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                Entrar
              </Button>
            </Center>
        </Box>
        </Box>        
   </ChakraProvider>
  );
}

export default App;
