module.exports = {
  	root: true,
  	env: {
        browser: true,
    	node: true,
  	},
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    globals: {
        NodeJS: 'readonly',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts']
            },
        },
        react: {
            version: '0.0.0',
        },
    },
    rules: {
        'no-console': 2,
        'no-debugger': 2,
		// 缩进4空格
        indent: ['error', 4, { "SwitchCase": 1 }],
        // 允许new以小写开头或大写开头的函数调用运算符
        // 允许在没有new运算符的情况下调用以大写开头的函数
        'new-cap': ['error', { newIsCap: false, capIsNew: false }],
        // 行最大字数限制
        'max-len': ['error', { code: 120 }],
        // 换行风格
        'linebreak-style':[0, 'error'],
        // 分号
        semi:[2, 'never'],
		// 花括号约定
        curly: 'off',
        // 禁止外部作用域中声明的隐藏变量
        'no-shadow': 'off',
		// 对原生对象做扩展
		'no-extend-native': 'off',
        // 禁止 ++
        'no-plusplus': 'off',
        // 箭头函数省略return
        'arrow-body-style': 'off',
        // 禁止使用 ts-ignore
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/prefer-default-export': 'off',
        // 关闭类型推断
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always',
        }],
        'import/extensions': ['error', 'never'],
        // 箭头函数参数括号
        'arrow-parens': ['error', 'as-needed'],
        'func-names': ['error', 'never'],
        // 换行符在操作符之后
        'operator-linebreak': ['error', 'after'],
        // this别名
        '@typescript-eslint/no-this-alias': ['error', {
            allowedNames: ['context', 'self'],
        }],
    },
}
