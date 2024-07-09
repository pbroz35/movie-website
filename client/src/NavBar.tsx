import { useState } from "react";
import {  ButtonGroup } from "@chakra-ui/react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Box,
  Heading,
  Flex,
  Spacer,
  Stack,
} from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { SearchBar } from "./components/SearchBar";



const NavBar = ({ data, setData, search, setSearch }) => {
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

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log("set search");
  };

  const fetchSearch = () => {
    console.log("Getting results for:", search);

    const apiServer = "http://localhost:3500";

    fetch(`${apiServer}/get-search?query=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Value", data);

        setData(data.results);

        console.log("Fetched search from server.");
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  return (


    <Box pt={3} pl={6} pr={6} maxW='bg' borderWidth='1.5px' borderRadius='xl' overflow='hidden' >
    <Flex align={"center-align"} justifyContent={"space-between"}>
      <Box>
        <Image padding={1} mt={-2} ml={-1} mb={1.4}
          src="/new-icon.jpg"
          alt="icon"
          boxSize="100px" // Optional: Set the size of the image container
          objectFit="cover"
        />
      </Box>

      <Box width={525}>
        <Stack spacing={3} direction={"row"} align={"center"} m={"0.5rem"}>

          <Button colorScheme="blue" variant='outline' onClick={() => {
              if (data.length === 0) {
                fetchMovies();
              } else {
                setData([]);
              }
            }}>Popular</Button>

          <Button colorScheme="blue" variant='outline'>Trending</Button>

          <SearchBar></SearchBar>
          
        </Stack>
      </Box>
    </Flex>
  </Box>

  )}

export default NavBar;
