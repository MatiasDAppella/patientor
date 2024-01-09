import { Diagnose, HealthCheckEntry } from '../../../types';

interface EntryProps {
  entry: HealthCheckEntry;
  diagnoses: Diagnose[];
}

const HealthCheck = ({ entry, diagnoses }: EntryProps) => {
  return (
    <li className='entry health-check'>
      <div className='info-box'>
        <h4 id='date'>{entry.date}</h4>
        <h4 id='desc'>{entry.description}</h4>
      </div>
      <div className='extra-info'>
        <span>{`Healthcheck rating: ${entry.healthCheckRating}`}</span>
      </div>
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
      <h4>Diagnose by {entry.specialist}</h4>
    </li>
  );
};

export default HealthCheck;