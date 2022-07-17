import { createContext, FC, ReactNode, useState, useEffect } from "react";
import mqtt from "precompiled-mqtt";

type MqttContextType = {
  message: number[];
};

export const MqttContext = createContext<MqttContextType>({
  message: [],
});

interface IMqttProviderProps {
  children: ReactNode;
}

let host = "ws://138.68.8.53:8000/mqtt";
let clientId = "digiterra-coding-task-1";
export const MqttProvider: FC<IMqttProviderProps> = ({ children }) => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const options = {
      keepalive: 30,
      clientId: clientId,
      protocolId: "MQTT",
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      will: {
        topic: "WillMsg",
        payload: "Connection Closed abnormally..!",
        qos: 0,
        retain: false,
      },
      rejectUnauthorized: false,
    };

    console.log("connecting mqtt client");
    const client = mqtt.connect(host, options);

    client.on("error", (err: any) => {
      console.log(err);
      client.end();
    });

    client.on("connect", () => {
      console.log("client connected:" + clientId);
      client.subscribe("$SYS", { qos: 0 });
      client.publish("$SYS", "wss secure connection demo...!", {
        qos: 0,
        retain: false,
      });
    });

    client.on("message", (topic: any, message: any, packet: any) => {
      setMessage(message);
    });

    client.on("close", () => {
      console.log(clientId + " disconnected");
    });
  }, []);

  return (
    <MqttContext.Provider
      value={{
        message,
      }}
    >
      {children}
    </MqttContext.Provider>
  );
};
