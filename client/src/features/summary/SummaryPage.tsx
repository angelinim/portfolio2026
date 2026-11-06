import { Panel } from "../../components/tui/panel/Panel";

export const SummaryPage = () => (
  <Panel title="About" grow>
    <h3>Michael Angelini</h3>
    <h4><span className="a-string">Software Developer </span></h4>
    <p>
      with experience building production systems across automation, networking, and backend services in startup and enterprise environments. Most recently contributed at a manufacturing startup, engineering production-line automation, device-to-cloud communication via <span className="a-keyword">MQTT</span>, and <span className="a-keyword"> scalable cloud APIs</span> to improve throughput and system reliability. Brings a strong foundation in <span className="a-keyword">requirements engineering, critical thinking, and problem solving </span>
    </p>
  </Panel>
);
