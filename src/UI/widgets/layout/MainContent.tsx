import { baseClasses } from "../../../constants";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

const MainContent = () => {
  return (
    <div className={baseClasses.mainContent}>
      <TopBar />
      <div className={baseClasses.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;
