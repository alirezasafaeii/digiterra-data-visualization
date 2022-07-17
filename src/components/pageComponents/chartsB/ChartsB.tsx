import { FC, useContext } from "react";
import { MqttContext } from "../../../mqttProvider/MqttProvider";

const ChartsB: FC = () => {
  const { message } = useContext(MqttContext);

  return <div>Welcome to ChartsB Page! {message}</div>;
};

export default ChartsB;
