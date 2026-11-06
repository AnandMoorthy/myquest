<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- Install with `npm ci` from the repo root. Node 20.9+ is required (`.nvmrc` says 20). The default image’s Node 22 works.
- Dev server: `npm run dev` (hostname `0.0.0.0`, port 3000). Open `http://localhost:3000`. Next.js blocks `/_next` dev assets when the browser host is `127.0.0.1`, so motion sections stay at opacity 0 and the hero looks blank. `curl http://127.0.0.1:3000/` still returns the HTML document.
- `npm run build` writes a static export (`output: "export"`). `npm run lint` currently fails on an existing `react-hooks/set-state-in-effect` error in `components/pages/EmailConfirmation.tsx`.
- Waitlist signup calls Supabase only when `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set. Without them, the Coming Soon modal reports that signup is not configured. Those keys are not required to run or build the site.
