import { useState } from "react";
import { Manga } from "../hooks/useMangas";
import { Card, CardBody, Heading, Image, Link, Text } from "@chakra-ui/react";

interface Props {
  manga: Manga;
  genreSelect: any;
}

const MangaCard = ({ manga, genreSelect }: Props) => {
  let [selectedGenre, setselectedgrenre] = useState<Manga | null>(null);

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
      {manga.genres[0].name === genreSelect && genreSelect ? (
        <Card borderRadius={10} overflow="hidden">
          <Image src={manga.images.webp.image_url} />
          <CardBody>
            <Link href={manga.url} fontSize="2xl" isExternal>
              {manga.title}
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
