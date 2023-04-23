import { useState } from "react";
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
    return <AiFillHeart color="#ff6b81" size={"20px"} onClick={onHeartClick} />;
  } else {
    return (
      <AiOutlineHeart color="#ff6b81" size={"20px"} onClick={onHeartClick} />
    );
  }
};
