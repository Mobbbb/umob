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

## documentation (CN)
| 方法、描述     | 参数     | 返回     |
| -------- | -------- | -------- |
| ```dateFormat(date, [format='yyyy-MM-dd'])```： </br> 将日期格式化为 'yyyy-MM-dd', 'yyyy-MM-dd hh:mm:ss' 等格式 | ```date``` *(string \| Date \| number)*：待格式化日期 </br> ```format``` *(string)*：目标日期的格式，如：```'yyyy-MM-dd hh:mm:ss S q w W T'``` </br> ```'y+'```：年 </br> ```'M+'```：月 </br> ```'d+'```：日 </br> ```'h+'```：时 </br> ```'m+'```：分 </br> ```'s+'```：秒 </br> ```'S'```：毫秒 </br> ```'q+'```：季度 </br> ```'w'```：周 </br> ```'W'```：大写周 </br> ```'T'```：T | *(string)*：格式化后的日期 |
| ```dateGap(startDate, endDate, [includeHT=true])```： </br> 获取两个日期之间的日期 | ```startDate``` *(string)*：开始日期，格式：```yyyy-MM-dd```、```yyyy-MM```、```yyyy``` </br> ```endDate``` *(string)*：结束日期，格式：```yyyy-MM-dd```、```yyyy-MM```、```yyyy``` </br> ```includeHT``` *(boolean)*：是否包含起止日期 | *(Array<string>)*：日期数组 |
| ```debounce(fn, wait, [immediate=true])```： </br> 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 ```wait``` 毫秒后调用 ```fn``` 方法 | ```fn``` *(Function)*：要防抖动的函数 </br> ```wait``` *(number)*：需要延迟的毫秒数 </br> ```immediate``` *(boolean)*：首次调用是否立即执行一次 ```fn``` | *(Function)*：返回新的 debounced（防抖动）函数 |
| ```throttle(fn, wait, [immediate=true])```： </br> 创建一个节流函数，在 ```wait``` 秒内最多执行 ```fn``` 一次的函数 | ```fn``` *(Function)*：要节流的函数 </br> ```wait``` *(number)*：需要节流的毫秒数 </br> ```immediate``` *(boolean)*：首次调用是否立即执行一次 ```fn``` | *(Function)*：返回新的 throttle 函数 |
| ```getUrlParams([variable=])```： </br> 获取url的参数 | ```variable``` *(String)*：要获取的参数名称；也可为空，为空将获取url中的所有参数并返回对象 | *(Object \| String)*：返回指定的url参数值或url所有的参数对象 |

## documentation (EN)
| Method & Description     | Parameters     | Returns     |
| -------- | -------- | -------- |
| ```dateFormat(date, [format='yyyy-MM-dd'])```： </br> format date to 'yyyy-MM-dd', 'yyyy-MM-dd hh:mm:ss' etc | ```date``` *(string \| Date \| number)*：date to be formatted </br> ```format``` *(string)*：format regular like ```'yyyy-MM-dd hh:mm:ss S q w W T'``` </br> ```'y+'```：year </br> ```'M+'```：month </br> ```'d+'```：day </br> ```'h+'```：hour </br> ```'m+'```：minute </br> ```'s+'```：second </br> ```'S'```：milliseconds </br> ```'q+'```：quarter </br> ```'w'```：week </br> ```'W'```：week of CN </br> ```'T'```：T | *(string)*：formatted date |

## others

node -v = v16.20.0
