import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const MetacriticScore = ({ score }: Props) => {
  let color =
    score > 90 ? "red" : score > 80 ? "green" : score > 70 ? "yellow" : "";
  const divStyles = {
    backgroundColor: "#000",
    borderRadius: "10px",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  };
  return (
    <div style={divStyles}>
      <Badge
        fontSize={"16px"}
        paddingX={2}
        borderRadius={"10px"}
        colorScheme={color}
      >
        {score}
      </Badge>
    </div>
  );
};

export default MetacriticScore;
