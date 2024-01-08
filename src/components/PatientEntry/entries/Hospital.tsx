import { Diagnose, HospitalEntry } from '../../../types';

interface EntryProps {
  entry: HospitalEntry;
  diagnoses: Diagnose[];
}

const Hospital = ({ entry, diagnoses }: EntryProps) => {
  return (
    <li>
      <h4>{entry.date}</h4>
      <h4>{entry.description}</h4>
      {
        (entry.diagnosisCodes) && <div>
          <h3>Diagnoses</h3>
          <ul>
          {
            entry.diagnosisCodes?.map(code => {
              const result = diagnoses.find(d => d.code === code);
              return (result)
                ? <li key={code}><strong>{code}</strong> {result.name}</li>
                : <li key={code}><strong>{code}</strong></li>;
            })
          }
        </ul>
        </div>
      }
      <h4>{entry.specialist}</h4>
    </li>
  );
};

export default Hospital;