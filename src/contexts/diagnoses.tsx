import { createContext, ReactNode } from "react";
import useDiagnoses from "../hooks/useDiagnoses";
import { Diagnose } from "../types";

interface ProviderProps {
  children: ReactNode;
}

interface ContextProps {
  diagnoses: Diagnose[];
}

export const DiagnosesContext = createContext<ContextProps>({
  diagnoses: []
});

const DiagnosesProvider = ({ children }: ProviderProps) => {
  const [diagnoses] = useDiagnoses();

  return (
    <DiagnosesContext.Provider
      value={{ diagnoses }}
    >
      {children}
    </DiagnosesContext.Provider>
  );
};

export default DiagnosesProvider;