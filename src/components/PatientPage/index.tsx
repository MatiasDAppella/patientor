import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Patient } from "../../types";
import patientService from "../../services/patients";

import PatientEntry from "../PatientEntry";
import useDiagnoses from "../../hooks/useDiagnoses";

const PatientPage = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState<Patient|null>(null);
  const [diagnoses] = useDiagnoses();

  useEffect(() => {
    const fetchPatientDetail = async () => {
      if (!id) return;
      const data = await patientService.getDetail(id);
      setPatient(data);
    };
    void fetchPatientDetail();

    return () => setPatient(null);
  }, [id]);

  return (patient) && (
    <main>
      <section id="information">
        <h3>{patient.name}</h3>
        <h4><strong>{patient.gender}</strong></h4>
        <h4>date of birth: {patient.dateOfBirth}</h4>
        <h4>ssn: {patient.ssn}</h4>
        <h4>occupation: {patient.occupation}</h4>
      </section>
      <section id="entries">
        <h3><strong>Entries</strong></h3>
        <ul>
          {
            patient.entries.map(entry =>
              <PatientEntry
                key={entry.id}
                entry={entry}
                diagnoses={diagnoses}
              />
            )
          }
        </ul>
      </section>
    </main>
  );
};

export default PatientPage;