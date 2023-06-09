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
| ```dateFormat(date, [format='yyyy-MM-dd'])```： </br> 将日期格式化为 'yyyy-MM-dd', 'yyyy-MM-dd hh:mm:ss' 等格式，分隔符可替换 | ```date``` *(\*)*：待格式化日期，可被格式化的日期详见 ```toDate``` 方法 </br> ```[format='yyyy-MM-dd']``` *(string)*：目标日期的格式，如：```'yyyy-MM-dd hh:mm:ss S q w W T'``` </br> ```'y+'```：年 </br> ```'M+'```：月 </br> ```'d+'```：日 </br> ```'h+'```：时 </br> ```'m+'```：分 </br> ```'s+'```：秒 </br> ```'S'```：毫秒 </br> ```'q+'```：季度 </br> ```'w'```：周 </br> ```'W'```：大写周 </br> ```'T'```：T | *(string)*：格式化后的日期，若无法格式化将返回空字符串 |
| ```dateGap(startDate, endDate, [opt=])```： </br> 获取两个日期之间的日期(年月) | ```startDate``` *(\*)*：开始日期，支持年-月-日格式，详见 ```toDate``` 方法；支持年-月格式，详见 ```toMonth``` 方法 </br> ```endDate``` *(\*)*：结束日期，支持年-月-日格式，详见 ```toDate``` 方法；支持年-月格式，详见 ```toMonth``` 方法 </br> ```[opt=]``` *(Object)*：选项对象 </br> ```[opt.includeHead=true]``` *(boolean)*：是否包含起始日期 </br> ```[opt.includeTail=true]``` *(boolean)*：是否包含结尾日期 </br> ```[opt.format='yyyy-MM-dd']``` *(string)*：日期格式化 | *(Array\<string\>)*：日期数组，若无法获取，将返回 ```[]``` |
| ```calculateDate(date, num, [fmt=])```： </br> 计算date日期num天(月)之后(前)的日期 | ```date``` *(number \| string \| Date)*：基准日期，若计算月份，格式见 ```toMonth``` 方法，若计算年月日日期，格式见 ```toDate``` 方法 </br> ```num``` *(number)*：天数(月数) </br> ```[fmt=]``` *(string)*：返回的日期格式，默认为yyyy-MM-dd | *(string)*：num天(月)之后的日期，若无法计算，将返回空字符串 |
| ```toDate(params)```： </br> 将参数转化为日期格式 | ```params``` *(\*)*：待转化的数据。</br> ```number``` 类型将会作为时间戳被转化为日期</br> ```string``` 类型支持形如 ```yyyy(\D)?MM(\2)dd( hh:mm:ss)?``` 的格式，如：'2020-07-12'、'20200712'、'2020.07.12'、'2020/07/12'、'2020.07.12 12:23:44'</br> ```Date``` 类型将直接返回 | *(Date)*：转化后的日期，若无法转化或为其他类型将返回 ```Invalid Date``` |
| ```toMonth(params)```： </br> 将参数转化为yyyy-MM格式的年月 | ```params``` *(\*)*：待转化的数据。</br> ```number``` 类型将会被转化为字符串</br> ```string``` 类型支持形如 ```yyyy(\D)?MM``` 的格式，如：'2020-07'、'202007'、'2020.07'、'2020/07' | *(string)*：转化后的年-月，若无法转化或为其他类型将返回空字符串 |
| ```debounce(fn, wait, [immediate=true])```： </br> 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 ```wait``` 毫秒后调用 ```fn``` 方法 | ```fn``` *(Function)*：要防抖动的函数 </br> ```wait``` *(number)*：需要延迟的毫秒数 </br> ```[immediate=true]``` *(boolean)*：首次调用是否立即执行一次 ```fn``` | *(Function)*：返回新的 debounced（防抖动）函数 |
| ```throttle(fn, wait, [immediate=true])```： </br> 创建一个节流函数，在 ```wait``` 秒内最多执行 ```fn``` 一次的函数 | ```fn``` *(Function)*：要节流的函数 </br> ```wait``` *(number)*：需要节流的毫秒数 </br> ```[immediate=true]``` *(boolean)*：首次调用是否立即执行一次 ```fn``` | *(Function)*：返回新的 throttle 函数 |
| ```getUrlParams([variable=])```： </br> 获取url的参数 | ```[variable=]``` *(String)*：要获取的参数名称；也可为空，为空将获取url中的所有参数并返回对象 | *(Object \| String)*：返回指定的url参数值或url所有的参数对象 |
| ```sortCallback([opt=])```： </br> 返回一个方法，该方法为sort函数的入参 | ```[opt=]``` *(Object)*：选项对象 </br> ```[opt.type='desc']``` *(string)*：```desc``` 升序，```ace``` 降序 </br> ```[opt.key]``` *(string \| number \| Symbol)*：当排序数组为 ```Array<Object>``` 时必填，取值为排序字段的键名 | *(Function)*：返回sort排序方法 |
| ```deepClone(obj)```： </br> 深度克隆 | ```obj``` *(\*)*：克隆对象 | *(\*)*：返回结果与obj相同，不包括原型链上的属性 |
| ```getCookie(name)```： </br> 获取cookie | ```name``` *(string)*：cookie键名 | *(string)*：cookie值 |
| ```delCookie(name, [domain=location.hostname])```： </br> 删除cookie | ```name``` *(string)*：cookie键名 </br> ```[domain=location.hostname]``` *(string)*：cookie所在的域 | - |
| ```setCookie(name, value, daysToExpire = 30, [path='/'], [domain=location.hostname])```： </br> 设置cookie | ```name``` *(string)*：cookie键名 </br> ```value``` *(string)*：cookie值 </br> ```[daysToExpire=30]``` *(number)*：cookie过期天数 </br> ```[path='/']``` *(string)*：cookie路径 ```[domain=location.hostname]``` *(string)*：cookie所在的域 | - |
| ```bigNumTransform(num, [opt=])```： </br> 将大数字转化为万/亿的形式 | ```num``` *(number \| string)*：待转化的数 </br> ```[opt=]``` *(Object)*：选项对象 </br> ```[opt.float=2]``` *(number)*：精度 </br> ```[opt.merge=true]``` *(boolean)*：返回结果是否与单位合并，若为 ```false``` 将返回数组 </br> ```[opt.unit=['万', '亿']]``` *(Array\<string\>)*：单位配置 | *(Array\<string\> \| string)*：返回转化后的字符串或字符串数组，若无法转化，将返回 ```'NaN'``` 或 ```['NaN', '']``` |
| ```isObject(variable)```： </br> 判断是否为对象 | ```variable``` *(string)*：待判断的参数 | *(boolean)*：true \| false |
| ```isVaildDate(variable)```： </br> 判断是否为有效的日期 | ```variable``` *(string)*：待判断的参数 | *(boolean)*：true \| false |

## documentation (EN)
| Method & Description     | Parameters     | Returns     |
| -------- | -------- | -------- |
| ```dateFormat(date, [format='yyyy-MM-dd'])```： </br> format date to 'yyyy-MM-dd', 'yyyy-MM-dd hh:mm:ss' etc. ```-``` can be replaced with other characters.If the date can't be formatted, an empty string will be returned.  | ```date``` *(\*)*：date to be formatted.Refer to the ```toDate``` method for details </br> ```format``` *(string)*：format regular like ```'yyyy-MM-dd hh:mm:ss S q w W T'``` </br> ```'y+'```：year </br> ```'M+'```：month </br> ```'d+'```：day </br> ```'h+'```：hour </br> ```'m+'```：minute </br> ```'s+'```：second </br> ```'S'```：milliseconds </br> ```'q+'```：quarter </br> ```'w'```：week </br> ```'W'```：week of CN </br> ```'T'```：T | *(string)*：formatted date |

## Developing

Test single file:
```shell
npm run test:single
# node -v = v16.20.0
```

Configure the name of the test file in the ```.env.json``` file.This file will be created after executing ```npm run test:single``` once.

Test all files:
```shell
npm run test
```

## Building
```shell
npm run build
```
