import './Panel.css';

export interface PanelProps {
  title?: string;
  children: React.ReactNode;
  grow?: boolean;
  hasTopMargin?: boolean;
}

export const Panel = ({ title, children, grow, hasTopMargin }: PanelProps) => (
  <div
    className={`tui-block ${grow ? 'tui-flex-1' : ''} ${hasTopMargin ? 'top-margin' : ''}`}
  >
    {title && <div className="tui-block-title a-keyword">{title}</div>}
    <div className="tui-block-content">{children}</div>
  </div>
);
