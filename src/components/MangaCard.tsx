import Manga from "../hooks/mangaInf";
import { Card, CardBody, Heading, Image, Link, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  manga: Manga;
}

const MangaCard = ({ manga }: Props) => {
  const { url, title, images } = manga;
  const {
    webp: { image_url },
  }: any = images;

  return (
    <>
      <Card borderRadius={10} key={uuidv4()}>
        <Image src={image_url} />
        <CardBody>
          <Link href={url} fontSize="2xl" isExternal>
            {title}
          </Link>
        </CardBody>
      </Card>
    </>
  );
};

export default MangaCard;
