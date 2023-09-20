import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Center,
  Box,
  Text,
  Input,
  Button,
  FormControl,
} from '@chakra-ui/react'
const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'tag1',
    thumb: 'https://images.pexels.com/photos/18288717/pexels-photo-18288717/free-photo-of-island-seen-from-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'cato',
    name: 'tag2',
    thumb: 'https://images.pexels.com/photos/18288717/pexels-photo-18288717/free-photo-of-island-seen-from-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'kvn',
    name: 'tag3',
    thumb: 'https://images.pexels.com/photos/18288717/pexels-photo-18288717/free-photo-of-island-seen-from-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'mooncake',
    name: 'tag4',
    thumb: 'https://images.pexels.com/photos/18288717/pexels-photo-18288717/free-photo-of-island-seen-from-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'mooncakes',
    name: 'tag5',
    thumb: 'https://images.pexels.com/photos/18288717/pexels-photo-18288717/free-photo-of-island-seen-from-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'mooncakesse',
    name: 'tag6',
    thumb: 'https://images.pexels.com/photos/18288717/pexels-photo-18288717/free-photo-of-island-seen-from-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },

]

function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  const [searchQuery, setSearchQuery] = useState('');
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
  return (
    <div className="App">
      <Center>
       <Input
          type="text"
          placeholder="Search characters"
          value={searchQuery}
          w='50%'
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Center>
      <header className="App-header">
        {/* <h1>Final Space Characters</h1> */}
       
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters" direction="horizontal">
            {(provided) => (
              <UnorderedList gap={'6'} className="characters" {...provided.droppableProps} ref={provided.innerRef}>
              {filteredCharacters.map(({ id, name, thumb }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <ListItem borderRadius={'lg'} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div className="characters-thumb">
                          <img src={thumb} alt={`${name} Thumb`} />
                        </div>
                        <p>
                          {name}
                        </p>
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
      </header>
      
    </div>
  );
}

export default App;