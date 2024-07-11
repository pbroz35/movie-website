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
} from "@chakra-ui/react";

import { useState } from "react";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string | null;
}

interface CardContainerProps {
  data: Movie[];
}

const CardContainer: React.FC<CardContainerProps> = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [movieTitle, setMovieTitle] = useState<string>("");
  const [movieSummary, setMovieSummary] = useState<string>("");

  const handleOpen = (movie: Movie) => {
    console.log(movie.title);
    console.log(movie.overview);

    setMovieTitle(movie.title);
    setMovieSummary(movie.overview);

    onOpen();
  };

  return (
    <ul className="popular-movies-text">
      {data
        .filter((movie) => movie.backdrop_path) // Filter out movies with null backdrop_path
        .map((movie) => (
          <li key={movie.id} className="movie-item">
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
              onClick={() => handleOpen(movie)}
            />
            <div className="movie-title">{movie.title}</div>
          </li>
        ))}

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{movieTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <b>Summary: </b>
            {movieSummary}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ul>
  );
};

export default CardContainer;
