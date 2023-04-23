import { useState } from "react";
interface Props {
  children: string;
  maxChars?: number;
}

export const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }
  const [isExpand, setIsExpand] = useState(false);
  const text = isExpand ? children : children.substring(0, maxChars);
  return (
    <div>
      <p>{text}...</p>
      <button
        className="btn btn-primary"
        onClick={() => setIsExpand(!isExpand)}
      >
        {isExpand ? "less" : "more"}
      </button>
    </div>
  );
};
