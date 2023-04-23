import { useState } from "react";
import { RoughSVG } from "react-rough-fiber";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

export default ({ onClick }: Props) => {
  const [full, setFull] = useState(false);

  const onHeartClick = () => {
    setFull(!full);
    onClick();
  };

  if (full) {
    return (
      <RoughSVG>
        <AiFillHeart color="#ff6b81" size={"50px"} onClick={onHeartClick} />
      </RoughSVG>
    );
  } else {
    return (
      <RoughSVG>
        <AiOutlineHeart color="#ff6b81" size={"50px"} onClick={onHeartClick} />
      </RoughSVG>
    );
  }
};
