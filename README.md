# Welcome to vs-code-preset 👋

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: jellydn](https://img.shields.io/twitter/follow/jellydn.svg?style=social)](https://twitter.com/jellydn)

> Easy to quickly enable/disable VS Code extensions base on your preset

## Install

Step 1: install [deno](deno.land)

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Step 2: clone this repo and run below command

## Usage

```sh
yarn build
```

For example, this is my output.

```sh
arn build
yarn run v1.22.5
$ cd cli && deno compile --unstable --allow-read --allow-env --allow-write --allow-run --allow-net index.ts
Check file:///Users/huynhducdung/Projects/vs-code-preset/cli/index.ts
Bundle file:///Users/huynhducdung/Projects/vs-code-preset/cli/index.ts
Compile file:///Users/huynhducdung/Projects/vs-code-preset/cli/index.ts
Emit cli
✨  Done in 2.69s.
```

Then run the `vs-code-preset` cli tool.

```
./cli/cli -h

  Usage:   vs-code-preset
  Version: v0.1.0

  Description:

    Easy to switch your vs code extensions base on your preset

  Options:

    -h, --help             - Show this help.
    -V, --version          - Show the version number for this program.
    -l, --list             - list all presets.
    -a, --add              - add a new preset.
    -s, --select   [name]  - select an exist preset.
    -e, --editor   [ide]   - the default IDE.                           (Default: "vs-code")

```

## Run tests

```sh
yarn test
```

## Feature

- Add a new preset
- List all presetss
- Select and enable a preset (WIP)

## Author

👤 **Huynh Duc Dung <dung@aircarbon.co>**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

Give a ⭐️ if this project helped you!

[![support us](https://img.shields.io/badge/become-a patreon%20us-orange.svg?cacheSeconds=2592000)](https://www.patreon.com/jellydn)

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
