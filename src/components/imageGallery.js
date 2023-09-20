
// import React, { useState } from "react";
// import { Box, Center, Grid, GridItem, Input, Text } from "@chakra-ui/react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const initialImages = [
//   { id: 1, url: "https://images.pexels.com/photos/18288717/pexels-photo-18288717/free-photo-of-island-seen-from-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", tags: ["nature", "landscape"] },
//   { id: 2, url: "https://images.pexels.com/photos/18288717/pexels-photo-18288717/free-photo-of-island-seen-from-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", tags: ["architecture", "city"] },
 
// ];

// const ImageGallery = () => {
//   const [images, setImages] = useState(initialImages);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const updatedImages = [...images];
//     const [reorderedImage] = updatedImages.splice(result.source.index, 1);
//     updatedImages.splice(result.destination.index, 0, reorderedImage);

//     setImages(updatedImages);
//   };

//   const filteredImages = images.filter((image) =>
//     image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <Box p={4}>
//       <Center>
//         <Input
//           type="text"
//           placeholder="Search by tag"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </Center>

//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="image-gallery" direction="horizontal">
//           {(provided) => (
//             <Grid
//               templateColumns="repeat(3, 1fr)"
//               my="6"
//               gap={4}
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {filteredImages.map((image, index) => (
//                 <Draggable key={image.id} draggableId={image.id} index={index}>
//                   {(provided) => (
//                     <GridItem
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <Box borderRadius="md" overflow="hidden">
//                         <img src={image.url} alt={`Image ${image.id}`} width="100%" />
//                       </Box>
//                       <Text mt={2} textAlign="center">
//                         {image.tags.join(", ")}
//                       </Text>
//                     </GridItem>
//                   )}
//                 </Draggable>
//               ))}
//             </Grid>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </Box>
//   );
// };

// export default ImageGallery;


// import React, { useState } from "react";
// import { Box, Center, Grid, GridItem, Input, Text } from "@chakra-ui/react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const initialImages = [
//   { id: 1, url: "https://images.pexels.com/photos/18288717/pexels-photo-18288717/free-photo-of-island-seen-from-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", tags: ["nature", "landscape"] },
//   { id: 2, url: "https://images.pexels.com/photos/18288717/pexels-photo-18288717/free-photo-of-island-seen-from-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", tags: ["architecture", "city"] },
 
// ];

// const ImageGallery = () => {
//   const [images, setImages] = useState(initialImages);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const updatedImages = [...images];
//     const [reorderedImage] = updatedImages.splice(result.source.index, 1);
//     updatedImages.splice(result.destination.index, 0, reorderedImage);

//     setImages(updatedImages);
//   };

//   const filteredImages = images.filter((image) =>
//     image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <Box p={4}>
//       <Center>
//         <Input
//           type="text"
//           placeholder="Search by tag"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </Center>

//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="image-gallery" direction="horizontal">
//           {(provided) => (
//             <Grid
//               templateColumns="repeat(3, 1fr)"
//               my="6"
//               gap={4}
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {filteredImages.map((image, index) => (
//                 <Draggable key={image.id} draggableId={image.id} index={index}>
//                   {(provided) => (
//                     <GridItem
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <Box borderRadius="md" overflow="hidden">
//                         <img src={image.url} alt={`Image ${image.id}`} width="100%" />
//                       </Box>
//                       <Text mt={2} textAlign="center">
//                         {image.tags.join(", ")}
//                       </Text>
//                     </GridItem>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </Grid>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </Box>
//   );
// };

// export default ImageGallery;
