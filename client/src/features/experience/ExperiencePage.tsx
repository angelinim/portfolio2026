import { Panel } from '../../components/tui/panel/Panel';
import './experiencePage.css';
import { experienceList, type Experience } from './experience';
import { useState } from 'react';

export const ExperiencePage = () => {
  const [companyId, setCompanyId] = useState<number>(0);

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
              <li className="experience-item" key={'' + companyInfo.id}>
                <button onClick={() => setSelectedId(companyInfo.id)}>
                  {companyInfo.organization}
                </button>
              </li>
            );
          })}
        </ul>
      </Panel>
      <Panel title={jobInfo?.organization} grow>
        <p>{jobInfo?.jobTitle}</p>
        <p>{jobInfo?.location}</p>
        <p>
          {jobInfo?.startDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
          })}
        </p>
        <p>
          {jobInfo?.endDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
          })}
        </p>
        {jobInfo?.technologiesUtilized.map((tech) => {
          return (
            <ul>
              <li>{tech}</li>
            </ul>
          );
        })}
        {jobInfo?.highlights.map((hl) => {
          return (
            <ul>
              <li>{hl}</li>
            </ul>
          );
        })}
      </Panel>
    </div>
  );
};
