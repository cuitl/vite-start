# vite 项目配置

## 配置 eslint + prettier

配置参考: [vite-vue2-windicss-starter](https://github.com/lstoeferle/vite-vue2-windicss-starter)

[eslint](https://eslint.org/docs/user-guide/configuring/) & prettier 相关插件

```json
  "devDependencies": {
    // eslint dep
    "eslint": "^7.29.0",
    // eslint parser 解析器
    "babel-eslint": "^10.1.0",
    // prettier dep
    "prettier": "^2.3.1",

    // vue-cli dep for eslint & prettier config
    "@vue/eslint-config-prettier": "^6.0.0",
    // 解决 eslint & prettier 冲突
    "eslint-plugin-prettier": "^3.4.0",

    "eslint-plugin-markdown": "^2.2.0",
    "eslint-plugin-vue": "^7.11.1",
  },
```

.eslintrc.js 配置

```js
// .eslintrc.js
module.exports = {
  plugins: [],
  extends: [
    // eslint-plugin-vue & essential prop in configs
    'plugin:vue/essential',
    // eslint-recommended.js in eslint/config
    'eslint:recommended',
    // @vue = @scope 命名空间
    // = @vue/eslint-config-prettier
    '@vue/prettier',
    // eslint-plugin-markdown & recommended prop in configs
    'plugin:markdown/recommended'
  ],
  parserOptions: {
    // ecmaVersion: 2020,
    // 解析器
    parser: 'babel-eslint'
  }
}
```

.eslintrc.js 配置文件配置解析:

- [plugins](https://eslint.org/docs/user-guide/configuring/plugins#configuring-plugins) eslint 插件，内部配置名称简写，最终拼写为：eslint-plugin-{name}

  ```js
  // plugins: ['react']
  // => eslint-plugin-react
  // 若 plugins: ['react', 'eslint-plugin-vue']
  // => eslint-plugin-react, eslint-plugin-vue

  // source in getModulesList which in eslint\lib\init\config-initializer.js
  ```

- extends 继承相关配置 和 插件配置

  - 以 [eslint:](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) 开头的配置, 包括两个：eslint:recommended, eslint:all

    ```js
    // 以 eslint: 开头的配置
    // eslint:recommended 对应 eslint\conf\eslint-recommended.js
    // eslint:all 对应 eslint\conf\eslint-all.js
    // source in _loadExtendedBuiltInConfig from @eslint\eslintrc\lib\config-array-factory.js
    ```

  - 以 [plugin:](https://eslint.org/docs/user-guide/configuring/configuration-files#using-a-configuration-from-a-plugin) 开头的配置

    ```js
    // plugin:vue/essential => `plugin:${plugin.id}/${configName}`
    // configName 对应 plugin 下的规则配置文件、规则数据
    // => eslint-plugin-vue && get the essential in configs
    // eslint-plugin-vue\lib\configs\essential.js
    // source in _loadExtendedPluginConfig which from @eslint\eslintrc\lib\config-array-factory.js
    ```

  - 其它配置 name || @scope/name
    ```js
    // extends: ['@vue/prettier', 'test']
    // => @vue/eslint-config-prettier, eslint-config-test
    // source in getModulesList which in eslint\lib\init\config-initializer.js
    ```

## 配置 husky 和 lint-staged

- [husky](https://typicode.github.io/husky/#/)
- [lint-staged](https://github.com/okonet/lint-staged)

```bash
  # husky config
  npx husky-init && npm install

  # lint-staged config
  npx mrm@2 lint-staged
```

PS: lint-staged 安装需要先配置 eslint、prettier
