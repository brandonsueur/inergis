import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone.js";

export function formatDate(date: Date | string, format?: string): string {
  if (!date) return "";

  dayjs.locale("fr");
  dayjs.extend(timezone, {
    timeZone: "Europe/Paris",
    keepLocalTime: true,
  });

  return dayjs(date).format(format || "DD/MM/YYYY");
}

export function formatDateTime(date: Date | string): string {
  return formatDate(date, "DD/MM/YYYY HH:mm");
}
export function formatDateTimeWithSeconds(date: Date | string): string {
  return formatDate(date, "DD/MM/YYYY HH:mm:ss");
}
