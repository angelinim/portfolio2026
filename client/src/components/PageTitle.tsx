interface PageTitleProps {
  title: string;
}

// Sets the browser tab title (React 19 moves <title> into <head>) and gives the
// page a visually hidden <h1>, so screen readers get a proper heading outline.
export const PageTitle = ({ title }: PageTitleProps) => (
  <>
    <title>{`${title} · Michael Angelini`}</title>
    <h1 className="visually-hidden">{title}</h1>
  </>
);
