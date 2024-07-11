import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";

interface SearchBarProps {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  data,
  setData,
  search,
  setSearch,
}) => {
  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <>
      <InputGroup borderRadius={9} size="md" boxShadow="lg" width={400}>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          type="text"
          placeholder="Find a movie..."
          border="1px solid #949494"
          onChange={updateSearch}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              fetchSearch();
            }
          }}
        />
        <InputRightAddon p={0} border="none">
          <Button
            size="md"
            colorScheme="blue"
            borderLeftRadius={0}
            borderRightRadius={3.3}
            border="1px solid #949494"
            onClick={fetchSearch}
          >
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};
