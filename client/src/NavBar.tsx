import { FaFilm } from "react-icons/fa6";
import { PiFilmSlateBold } from "react-icons/pi";
import { Button, Box, Flex, Stack, Image } from "@chakra-ui/react";
import { SearchBar } from "./SearchBar";

interface NavBarProps {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({ data, setData, search, setSearch }) => {
  const fetchMovies = () => {
    console.log("Getting top movies");

    const apiServer = "http://localhost:3500";

    fetch(`${apiServer}/get-top-movies`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Value", data);

        setData(data.results);
      });
  };

  const fetchTrending = () => {
    console.log("Fetching trending movies..");

    const apiServer = "http://localhost:3500";

    fetch(`${apiServer}/trending`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Value", data);

        setData(data.results);
      });
  };

  return (
    <Box
      pt={3}
      pl={6}
      pr={6}
      maxW="bg"
      borderWidth="1.5px"
      borderRadius="xl"
      overflow="hidden"
    >
      <Flex align={"center"} justifyContent={"space-between"}>
        <Box>
          <Image
            padding={1}
            mt={-2}
            ml={-1}
            mb={1.4}
            src="/new-icon.jpg"
            alt="icon"
            boxSize="100px" // Optional: Set the size of the image container
            objectFit="cover"
          />
        </Box>

        <Box width={650}>
          <Stack spacing={1.5} direction={"row"} align={"center"} m={"0.5rem"}>
            <Button
              rightIcon={<FaFilm />}
              boxShadow="lg"
              size="md"
              colorScheme="blue"
              variant="solid"
              onClick={fetchMovies}
            >
              Popular
            </Button>

            <Button
              rightIcon={<PiFilmSlateBold />}
              size="md"
              colorScheme="blue"
              variant="solid"
              boxShadow="lg"
              onClick={fetchTrending}
            >
              Trending
            </Button>

            <SearchBar
              data={data}
              setData={setData}
              search={search}
              setSearch={setSearch}
            />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
