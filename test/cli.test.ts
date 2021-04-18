import { getAllVSCodeExtensions, getAllPresets } from "../cli/util.ts";
import {
  assertEquals,
  assertArrayIncludes,
} from "https://deno.land/std@0.93.0/testing/asserts.ts";

Deno.test("convert list extension to string array", async () => {
  const { status, errorString, extensions } = await getAllVSCodeExtensions();

  assertEquals(status, { success: true, code: 0 });
  assertEquals("", errorString);
  assertArrayIncludes(extensions, ["vscodevim.vim"]);
});

Deno.test("list all files in the data folders", async () => {
  const { status, errorString, presets } = await getAllPresets();

  assertEquals(status, { success: true, code: 0 });
  assertEquals("", errorString);
  assertEquals(presets, ["deno", "flutter", "go", "react", "svelte"]);
});
