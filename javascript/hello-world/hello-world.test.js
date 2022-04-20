import { assertEquals } from "https://deno.land/std@0.135.0/testing/asserts.ts";
import { hello } from "./hello-world.js";

Deno.test("Hello World", () => {
  assertEquals(hello(), "Hello, World!");
});
