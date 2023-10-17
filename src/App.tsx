import { Grid, GridItem, Heading, PropsOf, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MangaGrid from "./components/MangaGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import MangaGridSelected from "./components/MangaGridSelected";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [selectedgrenre, setSelectedGrenre] = useState("");

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "500px , 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem padding={5} area="aside">
          <GenreList onSelectedGrenre={setSelectedGrenre}></GenreList>
        </GridItem>
        <GridItem className="mangasList" area="main">
          <Heading paddingLeft={2}>Mangas</Heading>
          {selectedgrenre === "" ? (
            <MangaGrid
              onMangaDisplayed={setSelectedGrenre}
              genreSelectedGrid={selectedgrenre}
              key={uuidv4()}
            ></MangaGrid>
          ) : (
            <MangaGridSelected
              onMangaDisplayed={setSelectedGrenre}
              genreSelectedGrid={selectedgrenre}
              key={uuidv4()}
            ></MangaGridSelected>
          )}
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
