import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  let navigate = useNavigate();

  return (
    <div className={`w-full flex p-8`}>
      <div className="flex justify-center w-full">
        <div className="w-full m-6 block rounded-lg shadow-lg bg-white max-w-sm">
          <h1 className={`flex justify-center item-center text-1xl font-bold text-blue-400`}>Welcome to Home Page!</h1>
          <div className={`flex justify-center`}>
            <button
              onClick={() => navigate("/chartsA")}
              type="button"
              className="m-3 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Charts A
            </button>
            <button
              onClick={() => navigate("/chartsB")}
              type="button"
              className="m-3 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Charts B
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
