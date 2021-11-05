export default function formatDateTime(ts) {
  const date = new Date(ts);
  const dateString = date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const timeString = date.toLocaleTimeString('en');
  return `${dateString}, ${timeString}`;
}
