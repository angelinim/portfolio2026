import './Panel.css';

export interface PanelProps {
  title?: string;
  children: React.ReactNode;
  grow?: boolean;
}

export const Panel = ({ title, children, grow }: PanelProps) => (
  <div className={`tui-block ${grow ? 'tui-flex-1' : ''}`}>
    {title && <div className="tui-block-title a-keyword">{title}</div>}
    <div className="tui-block-content">{children}</div>
  </div>
);
