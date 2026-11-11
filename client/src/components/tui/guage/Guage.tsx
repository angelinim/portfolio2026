interface GaugeProps {
  percentCompleted: number;
}
export const Gauge = ({ percentCompleted }: GaugeProps) => {
  // width of guage in characters
  const width = 10;
  let filledChars = Math.round((percentCompleted / 100) * width);
  filledChars = Math.max(0, Math.min(filledChars, width));
  const emptyChars = width - filledChars;

  return <>{'█'.repeat(filledChars) + '░'.repeat(emptyChars)}</>;
};
