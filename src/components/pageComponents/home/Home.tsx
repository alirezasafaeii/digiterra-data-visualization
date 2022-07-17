import { FC } from "react"
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  let navigate = useNavigate();

  return(
    <div>
      Welcome to Home Page!
      <button onClick={() => navigate("/ChartA")}>Charts A</button>
      <button onClick={() => navigate("/chartB")}>Charts B</button>
    </div>
  )
}

export default Home;