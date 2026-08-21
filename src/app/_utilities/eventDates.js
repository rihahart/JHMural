
export function parseLocalDate(value) {
  return new Date(`${value}T00:00:00`);
}

export function monthKey(year, month) {
  return `${year}-${String(month).padStart(2, "0")}`;
}

// The current month plus the next two, as the dropdown's fixed 3 options.
export function getMonthOptions(today = new Date()) {
  const options = [];
  for (let i = 0; i < 3; i++) {
    const d = new Date(today.getFullYear(), today.getMonth() + i, 1);
    const year = d.getFullYear();
    const month = d.getMonth(); 
    options.push({
      key: monthKey(year, month + 1),
      year,
      month,
      label: d.toLocaleDateString("en-US", { month: "long" }),
    });
  }
  return options;
}

export function exhibitionMonthKey(exhibition) {
  if (!exhibition.start_date) return null;
  const d = parseLocalDate(exhibition.start_date);
  return monthKey(d.getFullYear(), d.getMonth() + 1);
}

export function dayOfMonth(startDate) {
  return parseLocalDate(startDate).getDate();
}

function formatShortDate(value) {
  return parseLocalDate(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function formatEventDateRange(startDate, endDate) {
  if (!startDate) return "Date to be announced";
  if (endDate && endDate !== startDate) {
    return `${formatShortDate(startDate)} - ${formatShortDate(endDate)}`;
  }
  return formatShortDate(startDate);
}
