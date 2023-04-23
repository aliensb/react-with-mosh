import styles from "./Button.module.css";

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
    <button
      type="button"
      className={[styles.btn, styles["btn-" + type]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
