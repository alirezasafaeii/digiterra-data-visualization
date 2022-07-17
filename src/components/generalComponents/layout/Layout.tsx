import { FC, ReactNode } from "react";
import TopBar from "../topBar/TopBar";
import styles from "./layout.module.css";

interface ILayoutProps {
  children: ReactNode;
}
const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <TopBar />
      <div className={styles.layoutContent}>{children}</div>
    </div>
  );
};

export default Layout;
