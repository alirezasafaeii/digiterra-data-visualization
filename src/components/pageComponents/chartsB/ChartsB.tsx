import { FC, useContext } from "react";
import { MqttContext } from "../../../mqttProvider/MqttProvider";

const ChartsB: FC = () => {
  const { state } = useContext(MqttContext);

  return <div>Welcome to ChartsB Page! {state}</div>;
};

export default ChartsB;
