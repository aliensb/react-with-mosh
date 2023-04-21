interface Props {
  children: string;
  type:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "link";
  onClick: () => void;
}

export default function Button({ children, type, onClick }: Props) {
  return (
    <button type="button" className={"btn btn-" + type} onClick={onClick}>
      {children}
    </button>
  );
}
