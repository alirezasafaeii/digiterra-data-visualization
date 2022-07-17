// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/generalComponents/layout/Layout";
import { MqttProvider } from "./mqttProvider/MqttProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <MqttProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </MqttProvider>
    </BrowserRouter>
  );
}

export default App;
