<p align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
    <h2 align="center">Umob modular utilities</h2>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/mobbbb/umob/node.js.yml?branch=main">
  <img src="https://img.shields.io/npm/v/umob">
  <a href='https://coveralls.io/github/Mobbbb/umob?branch=main'><img src='https://coveralls.io/repos/github/Mobbbb/umob/badge.svg?branch=main' alt='Coverage Status' /></a>
  <img src="https://img.shields.io/npm/l/umob">
</p>

## Using npm
```shell
npm install umob
```
Then, assuming you're using a module-compatible system (like webpack, Rollup etc):
``` javascript
import { debounce } from 'umob'
```

On-demand Import:
``` javascript
import debounce from 'umob/debounce'
```

CommonJS:
``` javascript
const { debounce } = require('umob')
```

## Directly in a browser

``` html
<script src="index.umd.js"></script>
<script>
    Umob.debounce()
</script>
```

A global, Umob, will be created, containing all exports of the module version.

## documentation
| Method     | Description     | Parameters     | Returns     |
| -------- | -------- | -------- | -------- |
| dateFormat | format date to 'yyyy-MM-dd', 'yyyy-MM-dd hh:mm:ss' etc | date: string \| Date </br> format: string  | date: string |

## others

node -v = v16.20.0
