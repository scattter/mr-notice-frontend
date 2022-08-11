module.exports = {
  tabWidth: 2,
  // 语句的末尾不加分号
  semi: false,
  // 单行代码字符数限制
  printWidth: 80,
  // 使用单引号
  singleQuote: true,
  //仅仅当必须的时候才会加上双引号
  quoteProps: 'as-needed',
  //在括号和对象的文字之间加上一个空格
  bracketSpacing: true,
  // 当箭头函数中只有一个参数的时候忽略括弧
  arrowParens: 'avoid',
  // vue template 中的结束标签结尾尖括号掉到了下一行
  htmlWhitespaceSensitivity: 'strict',
  // .vue 文件，不缩进 <script> 和 <style> 里的内容
  vueIndentScriptAndStyle: false,
}
