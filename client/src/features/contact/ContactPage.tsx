import { Panel } from '../../components/tui/panel/Panel';
import './contactPage.css';

const contacts = [
  {
    label: 'github',
    target: 'my.github.link.here',
    href: 'https://my.github.link.here',
  },
  {
    label: 'linkedin',
    target: 'my.LinkedIn.here',
    href: 'https://my.LinkedIn.here',
  },
  {
    label: 'email',
    target: 'myEmail@email.com',
    href: 'mailto:myEmail@email.com',
  },
];

export const ContactPage = () => (
  <Panel title="Contact" grow>
    <div className="contact-content">
      <section className="contact-block">
        <h3 className="contact-name a-string">Michael Angelini</h3>
        <p>Software Developer</p>
      </section>

      <ul className="contact-links">
        {contacts.map(({ label, target, href }) => (
          <li key={label}>
            <a className="contact-link" href={href}>
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
