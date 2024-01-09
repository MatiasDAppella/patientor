import { Diagnose, Entry } from '../../types';
import './PatientEntry.css';

// Components
import HealthCheck from './entries/HealthCheck';
import Hospital from './entries/Hospital';
import OccupationalHealthcare from './entries/OccupationalHealthcate';

interface EntryProps {
  entry: Entry;
  diagnoses: Diagnose[];
}

const PatientEntry = ({ entry, diagnoses }: EntryProps) => {
  switch (entry.type){
    case ("HealthCheck"):
      return <HealthCheck entry={entry} diagnoses={diagnoses}/>;

    case ("Hospital"):
      return <Hospital entry={entry} diagnoses={diagnoses}/>;

    case ("OccupationalHealthcare"):
      return <OccupationalHealthcare entry={entry} diagnoses={diagnoses}/>;

    default:
      return <li>Non existant type</li>;
  }
};

export default PatientEntry;