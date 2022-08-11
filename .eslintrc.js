module.exports = {
  root: true, // 是否开启 eslint。
  env: {
    // 配置编译器宏环境
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    // ESLint Definition for rule 'import/extensions' was not found
    "plugin:import/recommended",
    // 在此处添加更多通用规则集。
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 解析器选项
    ecmaVersion: 'latest', // 指定要使用的 ECMAScript 语法版本
    parser: '@typescript-eslint/parser', // 可选的。自定义解析器。
    sourceType: 'module', // 默认是 “script”。当代码在 ECMAScript 模块中时其值需设为 “module”。
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'simple-import-sort',
    'eslint-plugin-prettier',
  ],
  rules: {
    // 在此处 覆盖 或 添加 规则设置。
    // 项目导入顺序检测
    'simple-import-sort/imports': 'error',
    'prettier/prettier': 1,
    // Vue: Recommended rules to be closed or modify
    'vue/require-default-prop': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': 0,
    // Vue: Add extra rules
    'vue/custom-event-name-casing': [2, 'camelCase'],
    'vue/no-v-text': 1,
    'vue/padding-line-between-blocks': 1,
    'vue/require-direct-export': 1,
    'vue/multi-word-component-names': 0,
    // Allow @ts-ignore comment
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-explicit-any': 0,
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-param-reassign': 0,
    'prefer-regex-literals': 0,
    'import/no-extraneous-dependencies': 0,
  },
  settings: {
    // 设置别名
    'import/resolver': {
      alias: [['@', './src']],
    },
  },
}
