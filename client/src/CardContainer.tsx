
//For modal
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

import { useState } from 'react';

const CardContainer = ({data}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [movieTitle, setMovieTitle] = useState('');
  const [movieSummary, setMovieSummary] = useState('');


  const handleOpen = (movie) => {
    console.log(movie.title);
    console.log(movie.overview);

    setMovieTitle(movie.title);
    setMovieSummary(movie.overview);


    onOpen();
  };
  
  return (
    <ul className="popular-movies-text">
      {data
        .filter(movie => movie.backdrop_path) // Filter out movies with null backdrop_path
        .map((movie) => (
          <li key={movie.id} className="movie-item">
            <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} onClick={() => handleOpen(movie)} />
            <div className="movie-title">{movie.title}</div>
          </li>
        ))}

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{movieTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{movieSummary}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </ul>
  );
}
export default CardContainer;
