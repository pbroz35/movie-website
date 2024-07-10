
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
  Button
} from '@chakra-ui/react'




const CardContainer = ({data}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const sayHello = (movieOver) =>
  {
    console.log("Hello");
    console.log(movieOver);

  }


  return (
    <ul className="popular-movies-text">
      {data
        .filter(movie => movie.backdrop_path) // Filter out movies with null backdrop_path
        .map((movie) => (
          <li key={movie.id} className="movie-item">
            <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} onClick={onOpen}/>
            <div className="movie-title">{movie.title}</div>
          </li>
        ))}

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </ul>
  );
}
export default CardContainer;
