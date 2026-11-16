import { Panel } from '../../components/tui/panel/Panel';
import './summaryPage.css';

const fetchInfo = [
  { label: 'Role', value: 'Software Developer' },
  { label: 'Location', value: 'Toronto, On' },
  { label: 'Focus', value: 'backend services' },
  { label: 'Status', value: 'Available for work' },
];

const fetchStack = [
  'TypeScript',
  'NestJS',
  'React',
  'Python',
  'Rust',
  'MQTT',
  'Linux',
];

export const SummaryPage = () => (
  <Panel title="Summary" grow>
    <div className="summary-layout">
      <div className="summary-text">
        <h3 className="summary-name">Michael Angelini</h3>
        <p>
          <strong className="a-string">Software Developer</strong> with
          experience building production systems across automation, networking,
          and backend services in startup and enterprise environments. Most
          recently contributed at a manufacturing startup, engineering
          production-line automation, device-to-cloud communication via{' '}
          <span className="a-keyword">MQTT</span>, and{' '}
          <span className="a-keyword">scalable cloud APIs</span> to improve
          throughput and system reliability. Brings a strong foundation in{' '}
          <span className="a-keyword">
            requirements engineering, critical thinking, and problem solving
          </span>
          .
        </p>

        <section className="summary-fetch">
          <p className="summary-fetch-rule a-comment" aria-hidden="true">
            -----------------
          </p>
          <br></br>
          <dl className="summary-fetch-info">
            {fetchInfo.map(({ label, value }) => (
              <div key={label} className="summary-fetch-row">
                <dt className="a-keyword">{label}:</dt>
                <dd>{value}</dd>
              </div>
            ))}
            <div className="summary-fetch-row">
              <dt className="a-keyword">Stack:</dt>
              <dd>
                <ul className="summary-tags">
                  {fetchStack.map((tech) => (
                    <li key={tech} className="a-string">
                      {tech}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </section>
      </div>

      {/* Placeholder until the real photo is added to client/public/ */}
      <div className="summary-photo">
        <img
          src="/summary-photo-placeholder.svg"
          alt="Photo of Michael Angelini"
        />
      </div>
    </div>
  </Panel>
);
