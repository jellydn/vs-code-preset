import { Command, prompt, Input, Checkbox, Confirm, Table } from "./deps.ts";
import {
  getAllVSCodeExtensions,
  enableExtensions,
  getAllPresets,
  writeJson,
  readJson,
} from "./util.ts";

const { options } = await new Command()
  .name("vs-code-preset")
  .option("-l, --list", "list all presets.")
  .option("-a, --add", "add a new preset.")
  .option("-s, --select [name]", "select an exist preset.")
  .option("-e, --editor [ide]", "the default IDE.", { default: "vs-code" })
  .version("0.1.0")
  .description("Easy to switch your vs code extensions base on your preset")
  .parse(Deno.args);

console.warn({ options });

if (options.add) {
  const { extensions } = await getAllVSCodeExtensions();

  const result = await prompt([
    {
      name: "name",
      message: "Choose a preset name",
      type: Input,
    },
    {
      name: "extensions",
      message: "Select your extensions",
      type: Checkbox,
      options: extensions,
    },
  ]);

  if (result.name) writeJson(result.name, result?.extensions ?? []);
}

if (options.list) {
  const { presets } = await getAllPresets();
  const table: Table = Table.from([
    ["ID", "Name"],
    ...presets.map((name, index) => [index + 1, name]),
  ]);

  table.padding(1).indent(2).border(true).render();
}

if (options.select) {
  const file = await readJson(options.select);
  const selectedExtensions: Array<string> = JSON.parse(file);
  const table: Table = Table.from([
    ["ID", "Name"],
    ...selectedExtensions.map((name: any, index: number) => [index + 1, name]),
  ]);
  table.padding(1).indent(2).border(true).render();

  const confirmed: boolean = await Confirm.prompt("Can you confirm?");

  if (confirmed) {
    console.log(JSON.parse(file));
    enableExtensions(selectedExtensions);
  }
}
