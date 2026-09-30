# [JHMural](https://jhmuralproject.com/)
We paint murals on lonely walls of Jackson Heights, Queens.

<img src="./public/logo.svg" alt="JHMural Log" width="100%">

## Events

`/events` lists visible exhibitions from the shared backend, including manual
entries created in the admin portal. The month picker covers the current month
and the next two. Exhibitions appear in every month their date range overlaps;
entries that started earlier are labeled "Ongoing". Entries without a start date
are omitted; a missing end date is treated as a single-day event.

Set `NEXT_PUBLIC_API_BASE_URL` at build time to call the backend directly from
the browser (the backend must allow the site's origin). Alternatively, leave it
unset and set `API_BASE_URL` on the Next.js server at runtime; `/api/exhibitions`
then proxies public exhibition reads. For local development, put
`API_BASE_URL=http://localhost:8000` in `.env.local` and run the backend and
`npm run dev`. Missing backend configuration returns a recoverable service error.

Run `node --test tests/*.test.mjs` for calendar and API fallback regression checks,
and `npm run build` to verify the production bundle.
