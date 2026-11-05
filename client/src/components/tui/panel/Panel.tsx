

export interface PanelProps {
  title?: string;
  children: React.ReactNode;
}


export const Panel = ({ title, children }: PanelProps) => (
  <div className="tui-block">
    {title && <div className="tui-block-title a-keyword">{title}</div>}
    <div className="tui-block-content">{children}</div>
  </div>
);
