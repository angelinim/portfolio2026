import { Panel } from '../../components/tui/panel/Panel';
import './contactPage.css';

const contacts = [
  {
    label: 'Github',
    target: 'https://github.com/angelinim',
    href: 'https://github.com/angelinim/portfolio2026',
  },
  {
    label: 'LinkedIn',
    target: 'linkedin.com/in/michael-angelini',
    href: 'https://www.linkedin.com/in/michael-angelini-79a94014b/',
  },
  {
    label: 'Email',
    target: 'angelinim62@gmail.com',
    href: 'mailto:angelinim62@gmail.com',
  },
];

export const ContactPage = () => (
  <Panel title="Contact" grow>
    <div className="contact-content">
      <section className="contact-block">
        <h3 className="contact-name a-string">Michael Angelini</h3>
        <p>If you would like to reach out on LinkedIn or by email, or view my ongoing projects, feel free to use the links below</p>
      </section>

      <ul className="contact-links">
        {contacts.map(({ label, target, href }) => (
          <li key={label}>
            <a className="contact-link" target='_blank' href={href}>
              <span className="a-keyword">{label}</span>
              <span className="contact-leader" aria-hidden="true" />
              <span className="a-string">{target}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </Panel>
);
