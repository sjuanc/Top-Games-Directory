import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { platform } from "os";
import React from "react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import MetacriticScore from "./MetacriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <HStack position={"absolute"} right={1} top={1}>
        <MetacriticScore score={game.metacritic} />
      </HStack>
      <CardBody padding={"16px"} position={"relative"}>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
