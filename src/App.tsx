import { Grid, GridItem, Heading, PropsOf, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MangaGrid from "./components/MangaGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Manga } from "./hooks/useMangas";

const selectedManga: Manga = { title: "Kaguya-Hime", genre: "romance" };

const genreIchoose: Genre = { type: "Action" };

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
          <GenreList
            mangaTitle={selectedManga}
            onSelectedGrenre={setSelectedGrenre}
          ></GenreList>
        </GridItem>
        <GridItem className="mangasList" area="main">
          <Heading paddingLeft={2}>Mangas</Heading>
          <MangaGrid
            allManga={selectedManga}
            onMangaDisplayed={setSelectedGrenre}
            genreSelectedGrid={selectedgrenre}
          ></MangaGrid>
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
