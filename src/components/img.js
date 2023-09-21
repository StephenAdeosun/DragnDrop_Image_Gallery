import React, { useState,useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import Loader from 'react-loader-spinner'; 
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Center,
  Box,
  Text,
  Spinner,
  Input,
} from '@chakra-ui/react'
const finalSpaceCharacters = [
  {
    id: '1',
    name: 'Community 1',
    thumb: 'https://images.pexels.com/photos/1013427/pexels-photo-1013427.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    name: 'Household Kitchen',
    thumb: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    name: 'Sparkles',
    thumb: 'https://images.pexels.com/photos/12222247/pexels-photo-12222247.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: '4',
    name: 'Lovers',
    thumb: 'https://images.pexels.com/photos/18357552/pexels-photo-18357552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    name: 'Underground',
    thumb: 'https://images.pexels.com/photos/17152223/pexels-photo-17152223/free-photo-of-light-train-tunnel-architecture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: '6',
    name: 'Flowers',
    thumb: 'https://images.pexels.com/photos/3732658/pexels-photo-3732658.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '7',
    name: 'Mobile Phone',
    thumb: 'https://images.pexels.com/photos/4549408/pexels-photo-4549408.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '8',
    name: 'Car',
    thumb: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '9',
    name: 'Train',
    thumb: 'https://images.pexels.com/photos/5257779/pexels-photo-5257779.jpeg?auto=compress&cs=tinysrgb&w=600'
  },

]

function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [noItemsFound, setNoItemsFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate loading for 1 second

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  const filteredCharacters = characters.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (filteredCharacters.length === 0 && searchQuery !== '') {
      setNoItemsFound(true);
    } else {
      setNoItemsFound(false);
    }
  }, [filteredCharacters, searchQuery]);
  return (
    <div className="App">
      <Center>
       <Input
          type="text"
          my={6}
          focusBorderColor="grey"
          border={'2px solid grey'}
          _placeholder={{color:'black'}}
          color={'black'}
          placeholder="Search characters"
          value={searchQuery}
          w='50%'
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Center>
      <header className="App-header">
        {/* <h1>Final Space Characters</h1> */}
        {isLoading ? (
          <Center>
       <Spinner size="lg" mt='50' color="blue.500" />
       </Center>
        ) : noItemsFound ? (
          <Text color={'black'} mt={12}>No items found.</Text>
        ) : (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters" direction="horizontal">
            {(provided) => (
              <UnorderedList gap={'6'} p={'6'} display={'grid'} 
              gridTemplateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)'}}
              
              
              
              className="characters" {...provided.droppableProps} ref={provided.innerRef}>
              {filteredCharacters.map(({ id, name, thumb }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <ListItem borderRadius={'lg'} boxShadow={'xl'} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div className="characters-thumb">
                          <img src={thumb} alt={`${name} Thumb`} />
                        </div>
                        <Text color={'black'}>
                          {name}
                        </Text>
                      </ListItem>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </UnorderedList>
            )}
          </Droppable>
        </DragDropContext>
      
        )}
      </header>
        <Center>
      <Box>
      <Text color={'black'} mt={12}>Drag and drop the items to reorder the list.</Text>
      </Box>
      </Center>
    </div>
  );
}

export default App;