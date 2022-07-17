import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ChartsA from "../components/pageComponents/chartsA/ChartsA";
import ChartsB from "../components/pageComponents/chartsB/ChartsB";
import Home from "../components/pageComponents/home/Home";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="chartsA" element={<ChartsA />} />
      <Route path="chartsB" element={<ChartsB />} />
    </Routes>
  );
};

export default AppRouter;
