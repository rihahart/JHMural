import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/app/_utilities/eventDates.js", import.meta.url), "utf8");
const { getMonthOptions, exhibitionOccursInMonth, formatEventDateRange } =
  await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);
const september = { year: 2026, month: 8 };

test("month options roll across December into the next year", () => {
  assert.deepEqual(getMonthOptions(new Date(2026, 11, 31)).map(m => m.key), ["2026-12", "2027-01", "2027-02"]);
});

test("ongoing exhibitions include both boundary days and exclude outside months", () => {
  for (const [start_date, end_date, expected] of [
    ["2026-08-01", "2026-09-01", true],
    ["2026-09-30", "2026-10-20", true],
    ["2026-08-01", "2026-08-31", false],
    ["2026-10-01", "2026-10-20", false],
    ["2026-01-01", "2027-01-01", true],
    ["2026-09-05", null, true],
    ["2026-08-05", null, false],
    [null, "2026-09-20", false],
    ["invalid", null, false],
  ]) {
    assert.equal(exhibitionOccursInMonth({ start_date, end_date }, september), expected, `${start_date} – ${end_date}`);
  }
});

test("date formatting preserves calendar dates and handles undated entries", () => {
  assert.equal(formatEventDateRange("2026-09-01", "2026-09-01"), "Sep 1");
  assert.equal(formatEventDateRange("2026-09-01", "2026-10-02"), "Sep 1 - Oct 2");
  assert.equal(formatEventDateRange(null, null), "Date to be announced");
});
