import { createContext, FC, ReactNode, useState } from "react";

type MqttContextType = {
  state: string | null;
};

export const MqttContext = createContext<MqttContextType>({
  state: null,
});

interface IMqttProviderProps {
  children: ReactNode;
}

export const MqttProvider: FC<IMqttProviderProps> = ({ children }) => {
  const [state, setState] = useState('default State!');

  return (
    <MqttContext.Provider
      value={{
        state,
      }}
    >
      {children}
    </MqttContext.Provider>
  );
};
