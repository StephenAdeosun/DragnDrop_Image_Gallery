// src/components/LoginForm.js
import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import Gallery from '../box'
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
    <Box bgColor={'white'} h='100vh'>
      {isLoggedIn ? (
        <Gallery/>
      ) : (
    <Box maxWidth="400px"  color={'black'} margin="0 auto">

      <form onSubmit={handleLogin}>
        <FormControl  isInvalid={!!error}>
          <FormLabel>Email</FormLabel>
          <Input
            // type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}  isInvalid={!!error}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit" isLoading={isLoading}>
          Log In
        </Button>
        <Text color="red.500">{error}</Text>

      </form>
    </Box> )}</Box>
  );
}

export default LoginForm;
