export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const day = d.getDate();
  const month = d.toLocaleDateString("ru-RU", {
    month: "short",
  });
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1, -1);
  return `${day} ${capitalizedMonth}`;
}