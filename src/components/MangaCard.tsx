import { useState } from "react";
import { Manga } from "../hooks/useMangas";
import { Card, CardBody, Heading, Image, Link, Text } from "@chakra-ui/react";

interface Props {
  manga: Manga;
  genreSelect: any;
}

const selectedManga: Manga = { title: "Kaguya-Hime", genre: "romance" };

const MangaCard = ({ manga, genreSelect }: Props) => {
  let [selectedGenre, setselectedgrenre] = useState<Manga | null>(null);

  manga.genres[0].name === genreSelect && genreSelect
    ? (selectedGenre = manga)
    : (selectedGenre = null);

  // function mangaDisplay() {
  //   if (manga.genres[0].name === genreSelect && genreSelect) {
  //     console.log("yes");
  //     setselectedgrenre(manga);
  //     return manga;
  //   } else {
  //     setselectedgrenre(null);
  //     return null;
  //   }
  // }
  // const myfunc = mangaDisplay();
  return (
    <>
      {selectedGenre !== null || genreSelect !== "" ? (
        <Card borderRadius={10}>
          <Image src={selectedGenre?.images.webp.image_url} />
          <CardBody>
            <Link href={selectedGenre?.url} fontSize="2xl" isExternal>
              {selectedGenre?.title}
            </Link>
          </CardBody>
        </Card>
      ) : (
        <Card borderRadius={10} overflow="hidden">
          <Image src={manga.images.webp.image_url} />
          <CardBody>
            <Link href={manga.url} fontSize="2xl" isExternal>
              {manga.title}
            </Link>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default MangaCard;
