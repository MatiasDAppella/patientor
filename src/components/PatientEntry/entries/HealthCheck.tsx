import { HealthCheckEntry } from '../../../types';

interface EntryProps {
  entry: HealthCheckEntry;
}

const HealthCheck = ({ entry }: EntryProps) => {
  return (
    <li>
      <h4>{entry.date}</h4>
      <h4>{entry.description}</h4>

      <h4>{entry.specialist}</h4>
    </li>
  );
};

export default HealthCheck;