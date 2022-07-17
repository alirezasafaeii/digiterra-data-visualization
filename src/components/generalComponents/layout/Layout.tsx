import { FC, ReactNode } from "react";
import styles from "./layout.module.css";

interface ILayoutProps {
  children: ReactNode;
}
const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.topBar}>TopBar</div>
      <div className={styles.layoutContent}>{children}</div>
    </div>
  );
};

export default Layout;
