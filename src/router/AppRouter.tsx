import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChartsA from "../components/pageComponents/chartsA/ChartsA";
import ChartsB from "../components/pageComponents/chartsB/ChartsB";
import Home from "../components/pageComponents/home/Home";

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="chartsA" element={<ChartsA />} />
        <Route path="chartsB" element={<ChartsB />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
