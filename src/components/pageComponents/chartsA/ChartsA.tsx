import { FC, useContext } from "react";
import { MqttContext } from "../../../mqttProvider/MqttProvider";

const ChartsA: FC = () => {
  const { message } = useContext(MqttContext);
  console.log("messageeeeee :>> ", message);

  return (
    <div>
      Welcome to ChartsA Page! { message}
    </div>
  );
};

export default ChartsA;
