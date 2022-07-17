import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./topBar.module.css";

const TopBar: FC = () => {
  let navigate = useNavigate();

  return (
      <div className={styles.topBar}>
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/chartsA")}>Charts A</button>
        <button onClick={() => navigate("/chartsB")}>Charts B</button>
      </div>
  );
};

export default TopBar;
