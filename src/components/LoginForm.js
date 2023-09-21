// src/components/LoginForm.js
import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { Box, Button,   Heading,
  VStack,Image,
  Center,FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import Gallery from './img'
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Start loading
    setError(""); // Clear previous errors

    try {
     
        // Only attempt login if credentials match
        await signInWithEmailAndPassword(auth, email, password);
        // Login successful
        setIsLoggedIn(true);  
        console.log("Login successful");
      
      const noEmail = email === "";
      const noPassword = password === "";
      if (noEmail && noPassword) {
        setError("Please enter email and password");
      } else if (noEmail) {
        setError("Please enter email");
      } else if (noPassword) {
        setError("Please enter password");
      }      
      else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Invalid email or password");
      // console.error(error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <Box bgColor={'white'}>
      {isLoggedIn ? (
        <Gallery/>
      ) : (
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
           
          >
            <Image
              src="https://scissors2.vercel.app/assets/register%20svg.jpg" // Replace with your image URL
              alt="Signup"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Use object-fit: cover
            />
          </Box>
  
          <Box flex="1" p="4" bgColor={'black'}>
            
              <Heading size="lg" color='orange' bgColor={'black'} textAlign={'center'} mb={'8'}>Login</Heading>
              <form onSubmit={handleLogin} bgColor={'black'}>
                <VStack spacing="6" bgColor={'black'} > 
              <FormControl isInvalid={!!error} bgColor={'black'}>
              <Input placeholder="Username" color='white' focusBorderColor="grey" borderColor='grey'
              value={email}
              bgColor={'black'}
              onChange={(e) => setEmail(e.target.value)}
              
              />
            </FormControl>
             <FormControl isInvalid={!!error} bgColor={'black'}>  
              <Input  type="password" color='white' focusBorderColor="grey" borderColor='grey'
                placeholder="Enter your password"
                value={password}
                bgColor={'black'}
                onChange={(e) => setPassword(e.target.value)}
              />
           
          </FormControl> 
          <Button mt={4} w='100%' colorScheme="orange" type="submit" isLoading={isLoading}>
          Log In
        </Button>
        <Text color="red.500">{error}</Text>

           </VStack>

          </form>
          
          </Box>
        </Box>
      </Center>
      )}
      </Box>

     
  )
}

export default LoginForm;



