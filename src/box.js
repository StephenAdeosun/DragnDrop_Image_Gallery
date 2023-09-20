import {    Box ,Button,Text,Heading} from "@chakra-ui/react"

function    Gallery() {
    return (
        <Box maxWidth="400px" color={'black'} margin="0 auto">
        <Heading as="h1" size="xl" textAlign="center" color="teal.500">
            Welcome to Chakra UI
        </Heading>
        <Text fontSize="xl" textAlign="center" mt={4}>
            Start editing to see some magic happen!
        </Text>
        <Button mt={4} colorScheme="teal" type="submit">
            Log In
        </Button>
        </Box>
    );
    }
    export default Gallery;