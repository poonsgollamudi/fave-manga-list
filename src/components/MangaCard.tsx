import { Manga } from "../hooks/useMangas";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  manga: Manga;
}

const MangaCard = ({ manga }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={manga.images.webp.image_url} />
      <CardBody>
        <Heading fontSize="2xl">{manga.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MangaCard;
