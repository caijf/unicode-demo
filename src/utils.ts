// 获取字符串的 unicode 编码
// '安'.charCodeAt(); // 23433 注意输出的是10进制
// String.fromCharCode(23433); // 安

// 如果要使用 \u 表示法，就需要使用 toString 转 16进制，再处理。

// unicode 转字符串
export function unicodeToString(code: string) {
  return JSON.parse(`"\\u${code}"`);
}

// 字符串转 unicode
export function stringToUnicode(str: string) {
  return str.charCodeAt(0).toString(16);
}
