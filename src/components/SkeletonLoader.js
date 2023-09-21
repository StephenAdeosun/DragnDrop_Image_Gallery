
// src/pages/Signup.tsx
import {Link as ChakraLink} from '@chakra-ui/react';
import React from 'react';
import { Form, Link } from 'react-router-dom';
import './Signup.css';
import {
  Box,

  Heading,
  Input,
  Button,
  Text,
  VStack,
  Center,
} from '@chakra-ui/react';

const Signup: React.FC = () => {
  return (
    <Center height="100vh" backgroundColor='black'>
      <Box
        borderWidth="1px"
        
        p="0" 
        width="90%"
        maxWidth={{ md: '70%' }} 
        height="80vh" 
        boxShadow="0 4px 24px rgb(257, 87, 0, 0.4);" 
        display="flex"
        border="0px solid #e2e8f0"	
        flexDirection={{ base: 'column', xl: 'row' }}
        justifyContent="center" 
      >

        <Box
          display={{ base: 'none', xl: 'block' }}
          width="50%" // Set the image container width to 50%
          marginRight={{ base: '0', md: '8' }}
        >
          <img
            src="https://scissors2.vercel.app/assets/register%20svg.jpg" // Replace with your image URL
            alt="Signup"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Use object-fit: cover
          />
        </Box>

        <Box flex="1" p="2">
          
            <Heading size="lg" color='orange'>Login</Heading>
            <form onSubmit={handleLogin}>
              <VStack spacing="3">
            <FormControl isInvalid={!!error}>
            <Input placeholder="Username" color='white' focusBorderColor="grey" borderColor='grey'
            value={password}
            onChange={(e) => setEmail(e.target.value)}
            
            />
          </FormControl>
           <FormControl isInvalid={!!error}>  
            <Input  type="password" color='white' focusBorderColor="grey" borderColor='grey'
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
         
        </FormControl> 
         </VStack>
        </form>
        
        </Box>
      </Box>
    </Center>
  );
};

export default Signup;