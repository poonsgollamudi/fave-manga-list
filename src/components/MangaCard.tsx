import { useState } from "react";
import { Manga } from "../hooks/useMangas";
import { Card, CardBody, Heading, Image, Link, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  manga: Manga;
  genreSelect: any;
}

const selectedManga: Manga = { title: "Kaguya-Hime", genre: "romance" };

const MangaCard = ({ manga, genreSelect }: Props) => {
  return (
    <>
      <Card borderRadius={10} key={uuidv4()}>
        <Image src={manga?.images.webp.image_url} />
        <CardBody>
          <Link href={manga?.url} fontSize="2xl" isExternal>
            {manga?.title}
          </Link>
        </CardBody>
      </Card>
    </>
  );
};

export default MangaCard;
