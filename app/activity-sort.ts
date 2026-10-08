import type { Activity } from "./activity-data";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function dateOrder(date?: string): number {
  if (!date?.trim()) return Number.POSITIVE_INFINITY;
  const month = date.match(/Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/);
  if (!month) return Number.POSITIVE_INFINITY;
  // Month-only dates and ranges use their first month/day.
  const day = date.match(/^\s*(\d{1,2})\b/);
  return months.indexOf(month[0]) * 32 + (day ? Number(day[1]) : 1);
}

export function sortActivitiesByDate(items: readonly Activity[]): Activity[] {
  return [...items].sort((a, b) => {
    const aOrder = dateOrder(a.date);
    const bOrder = dateOrder(b.date);
    return aOrder === bOrder ? 0 : aOrder < bOrder ? -1 : 1;
  });
}
