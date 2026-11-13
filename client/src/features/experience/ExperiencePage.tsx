import { Panel } from '../../components/tui/panel/Panel';
import './experiencePage.css';
import { experienceList, type Experience } from './experience';
import { useState } from 'react';

const formatMonth = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

export const ExperiencePage = () => {
  // Start with the first company selected so the details panel is never empty
  const [companyId, setCompanyId] = useState<number>(experienceList[0].id);

  function setSelectedId(companyIdNum: number): void {
    setCompanyId(companyIdNum);
  }
  const jobInfo = experienceList.find((job) => job.id === companyId);

  return (
    <div className="experience-split">
      <Panel title="Companies" compact>
        <ul className="company-list">
          {experienceList.map((companyInfo: Experience) => {
            return (
              <li
                className={`experience-item ${companyInfo.id === companyId ? 'selected' : ''}`}
                key={'' + companyInfo.id}
              >
                <button onClick={() => setSelectedId(companyInfo.id)}>
                  {companyInfo.organization}
                </button>
              </li>
            );
          })}
        </ul>
      </Panel>
      <Panel title={jobInfo?.organization} grow>
        {jobInfo && (
          <dl className="experience-details">
            <dt className="a-keyword">Role:</dt>
            <dd className="a-string">{jobInfo.jobTitle}</dd>

            <dt className="a-keyword">Location:</dt>
            <dd>{jobInfo.location}</dd>

            <dt className="a-keyword">Dates:</dt>
            <dd className="a-number">
              {formatMonth(jobInfo.startDate)}
              <span className="a-comment"> – </span>
              {formatMonth(jobInfo.endDate)}
            </dd>

            <dt className="a-keyword">Tech Stack:</dt>
            <dd>
              <ul className="experience-tags">
                {jobInfo.technologiesUtilized.map((tech) => (
                  <li key={tech} className="a-string">
                    {tech}
                  </li>
                ))}
              </ul>
            </dd>

            <dt className="a-keyword">Highlights:</dt>
            <dd>
              <ul className="experience-highlights">
                {jobInfo.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </dd>
          </dl>
        )}
      </Panel>
    </div>
  );
};
