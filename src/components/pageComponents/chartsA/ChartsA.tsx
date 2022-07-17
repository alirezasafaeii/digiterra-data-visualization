import { FC, useContext } from "react";
import { MqttContext } from "../../../mqttProvider/MqttProvider";

const ChartsA: FC = () => {
  const { state } = useContext(MqttContext);

  return <div>Welcome to ChartsA Page! {state}</div>;
};

export default ChartsA;
