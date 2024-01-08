import { useEffect, useState } from "react";
import { Diagnose } from "../types";
import diagnoseService from "../services/diagnoses";

const useDiagnoses = () => {
  const [diagnoses, setDiagnoses] = useState<Diagnose[]>([]);

  useEffect(() => {
    const fetchDiagnoseList = async () => {
      const diagnoses = await diagnoseService.getAll();
      setDiagnoses(diagnoses);
    };
    void fetchDiagnoseList();
  }, []);

  return [diagnoses];
};

export default useDiagnoses;