module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": 'vue-eslint-parser', // 新增
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": '@typescript-eslint/parser', // 新增
        "project": ['./tsconfig.json', './tsconfig.node.json'], // 新增
        "extraFileExtensions": ['.vue'], // 新增
        "tsconfigRootDir": __dirname, // 新增
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        // 添加组件命名忽略规则
        "vue/multi-word-component-names": ["error",{
            "ignores": ["index"]  //在这个数组中加入需要忽略的组件名
        }]
    }
}
