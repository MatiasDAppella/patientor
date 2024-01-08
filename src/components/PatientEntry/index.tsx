import { Entry } from '../../types';

// Components
import HealthCheck from './entries/HealthCheck';
import Hospital from './entries/Hospital';
import OccupationalHealthcare from './entries/OccupationalHealthcate';

interface EntryProps {
  entry: Entry;
}

const PatientEntry = ({ entry }: EntryProps) => {
  switch (entry.type){
    case ("HealthCheck"):
      return <HealthCheck entry={entry}/>;

    case ("Hospital"):
      return <Hospital entry={entry}/>;

    case ("OccupationalHealthcare"):
      return <OccupationalHealthcare entry={entry}/>;

    default:
      return <li>Non existant type</li>;
  }
};

export default PatientEntry;