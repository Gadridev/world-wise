import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";
function ButtonBack({ children, type }) {
  const navigate = useNavigate("");
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className={`${styles.btn} ${styles[type]}`}
      >
        {children}
      </button>
    </>
  );
}

export default ButtonBack;
