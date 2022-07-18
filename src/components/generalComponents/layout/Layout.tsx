import { FC, ReactNode } from "react";
import TopBar from "../topBar/TopBar";
import styles from "./layout.module.css";

interface ILayoutProps {
  children: ReactNode;
}
const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    // <div className={styles.layoutContainer}>
    <div className={`flex flex-col w-screen min-h-screen mx-auto`}>
      <TopBar />
      {/* <div className={styles.layoutContent}> */}
      <div className={`w-screen md:w-cs p-4 mx-auto mt-14 min-h-screen max-w-screen-xl bg-slate-50`}>
        {children}
        </div>
    </div>
  );
};

export default Layout;
