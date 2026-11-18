interface GaugeProps {
  percentCompleted: number;
}
export const Gauge = ({ percentCompleted }: GaugeProps) => {
  // width of guage in characters
  const width = 10;
  let filledChars = Math.round((percentCompleted / 100) * width);
  filledChars = Math.max(0, Math.min(filledChars, width));
  const emptyChars = width - filledChars;

  // Decorative: the percentage is shown as text next to the bar, so screen
  // readers skip the block characters
  return (
    <span aria-hidden="true">
      {'█'.repeat(filledChars) + '░'.repeat(emptyChars)}
    </span>
  );
};
