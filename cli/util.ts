/**
 * disable all extension then enable selected extension
 * @returns
 */
export async function enableExtensions(selectedExtensions: Array<string>) {
  // TODO: need to figure out later, vs-code do not have that ability now
}

export async function getAllVSCodeExtensions() {
  const p = Deno.run({
    cmd: ["code", "--list-extensions"],
    stderr: "piped",
    stdout: "piped",
  });

  const [status, stdout, stderr] = await Promise.all([
    p.status(),
    p.output(),
    p.stderrOutput(),
  ]);
  p.close();

  const errorString = new TextDecoder().decode(stderr);
  if (!status.success) {
    throw new Error(errorString);
  }

  const extensionsString = new TextDecoder().decode(stdout);
  const extensions = extensionsString.trim().split("\n");

  return {
    status,
    errorString,
    extensions,
  };
}

const DATA_DIR = "./cli/data";

export async function getAllPresets() {
  const p = Deno.run({
    cmd: ["ls", DATA_DIR],
    stderr: "piped",
    stdout: "piped",
  });

  const [status, stdout, stderr] = await Promise.all([
    p.status(),
    p.output(),
    p.stderrOutput(),
  ]);
  p.close();

  const errorString = new TextDecoder().decode(stderr);
  if (!status.success) {
    throw new Error(errorString);
  }

  const extensionsString = new TextDecoder().decode(stdout);
  const presets = extensionsString
    .trim()
    .split("\n")
    .map((name) => name.replace(".json", ""));

  return {
    status,
    errorString,
    presets,
  };
}

export function writeJson(name: string, data: Record<string, any>): string {
  try {
    Deno.writeTextFileSync(
      DATA_DIR + "/" + name + ".json",
      JSON.stringify(data)
    );

    return "Written to " + DATA_DIR;
  } catch (e) {
    return e.message;
  }
}

export async function readJson(name: string) {
  try {
    const text = await Deno.readTextFile(DATA_DIR + "/" + name + ".json");

    return text;
  } catch (e) {
    return e.message;
  }
}
