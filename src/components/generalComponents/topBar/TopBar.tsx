import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TopBar: FC = () => {
  let navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`flex fixed items-center p-3 w-full h-14 bg-blue-100`}>
      <button
        onClick={() => navigate("/home")}
        className={`${
          (location?.pathname === "/home" || location?.pathname === "/") ? "text-blue-700" : "text-slate-800"
        } mx-6 block py-2 pr-4 pl-3 bg-blue-700 rounded bg-transparent p-0`}
      >
        Home
      </button>
      <button
        onClick={() => navigate("/chartsA")}
        className={`${
          location?.pathname === "/chartsA" ? "text-blue-700" : "text-slate-800"
        } mx-6 block py-2 pr-4 pl-3 bg-blue-700 rounded bg-transparent p-0`}
      >
        Charts A
      </button>
      <button
        onClick={() => navigate("/chartsB")}
        className={`${
          location?.pathname === "/chartsB" ? "text-blue-700" : "text-slate-800"
        } mx-6 block py-2 pr-4 pl-3 bg-blue-700 rounded bg-transparent p-0`}
      >
        Charts B
      </button>
    </div>
  );
};

export default TopBar;
