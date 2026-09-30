import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/app/api/exhibitions/route.js", import.meta.url), "utf8");
const { GET } = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);

test("exhibitions fallback handles configuration, success and upstream failures", async (t) => {
  const originalBase = process.env.API_BASE_URL;
  const originalPublic = process.env.NEXT_PUBLIC_API_BASE_URL;
  t.after(() => {
    for (const [key, value] of [["API_BASE_URL", originalBase], ["NEXT_PUBLIC_API_BASE_URL", originalPublic]]) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  });
  delete process.env.API_BASE_URL;
  delete process.env.NEXT_PUBLIC_API_BASE_URL;
  assert.equal((await GET()).status, 503);

  process.env.API_BASE_URL = "https://backend.example/";
  const entries = [{ id: 1, title: "Exhibition" }];
  const mock = t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(url, "https://backend.example/exhibitions");
    assert.equal(options.cache, "no-store");
    return Response.json(entries);
  });
  assert.deepEqual(await (await GET()).json(), entries);
  mock.mock.mockImplementation(async () => new Response(null, { status: 500 }));
  assert.equal((await GET()).status, 502);
  mock.mock.mockImplementation(async () => Response.json({ invalid: true }));
  assert.equal((await GET()).status, 502);
  mock.mock.mockImplementation(async () => { throw new Error("offline"); });
  assert.equal((await GET()).status, 502);
});
