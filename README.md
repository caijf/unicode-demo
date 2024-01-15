# unicode-demo

unicode 演示

## 进制相关

```javascript
// 二进制
0b11111111; // 255
// 八进制
0o377; // 255
// 十进制
255;
// 十六进制
0xff; // 255
```

## 编码相关

```javascript
// 指定 UTF-16 码元序列创建的字符串
String.fromCodePoint('0x20bb7'); // '𠮷'

// 字符的 Unicode 码位值
'𠮷'.codePointAt(); // 134071

// 转为十六进制
(134071).toString(16); // 20bb7

// 其他进制转十进制
parseInt('20bb7', 16); // 134071
parseInt('11111111', 2); // 255
```

### 正则表达式中的 unicode 编码

```javascript
var str = 'asd乃阿当123安迪asd123啊那的';
str.match(/[\u0000-\u00ff]/g); //单字节字符
//["a", "s", "d", "1", "2", "3", "a", "s", "d", "1", "2", "3"]

str.match(/[\x00-\xff]/g); //单字节字符
//["a", "s", "d", "1", "2", "3", "a", "s", "d", "1", "2", "3"]

str.match(/[\u0100-\uffff]/g); //双字节字符
//["乃", "阿", "当", "安", "迪", "啊", "那", "的"]

// 单字节可以使用 \x 加2位16进制数标记，或使用 \u 加4位16进制数
('\x41'); // A
('\u0041'); // A

// U+0000 到 U+FFFF 范围内的码位，即整个基本平面。
// 其他的所有辅助平面，需要4个以上的十六进制来表示它们的码位，在ECMAScript 6中引入了新的转义序列：Unicode 码位转义
('\u{1F4A9}'); // '💩'

// 为了兼容 ECMAScript 5和更旧的环境，可以使用代理对
('\uD83D\uDCA9'); // '💩'
```

## 参考

- [字符编码 unicode 及其在javascript 中的使用](https://www.cnblogs.com/ecalf/archive/2012/09/04/unicode.html)
- [JavaScript 如何正确处理 Unicode 编码问题！](https://segmentfault.com/a/1190000017782406)
- [UTF-16 字符、Unicode 码位和字素簇](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_%E5%AD%97%E7%AC%A6%E3%80%81unicode_%E7%A0%81%E4%BD%8D%E5%92%8C%E5%AD%97%E7%B4%A0%E7%B0%87)
- [String.prototype.codePointAt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
- [String.fromCharCode()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
- <https://www.fileformat.info/info/unicode/char/search.htm>
