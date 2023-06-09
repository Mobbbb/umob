const resolve = require('@rollup/plugin-node-resolve')
const typescript = require('@rollup/plugin-typescript')
const commonjs = require('@rollup/plugin-commonjs')
const terser = require('@rollup/plugin-terser')

module.exports = [
    {
        input: './src/index.ts',
        output: [
            {
                dir: 'lib',
                format: 'cjs',
                entryFileNames: '[name].cjs.js',
                sourcemap: true, // 是否输出sourcemap
            },
            {
                dir: 'lib',
                format: 'esm',
                entryFileNames: '[name].esm.js',
                sourcemap: true, // 是否输出sourcemap
            },
            {
                dir: 'lib',
                format: 'umd',
                entryFileNames: '[name].umd.js',
                name: 'FE_utils', // umd模块名称，相当于一个命名空间，会自动挂载到window下面
                sourcemap: true,
                plugins: [terser()],
            },
        ],
        plugins: [resolve(), commonjs(), typescript({ module: "ESNext"})],
    }
]
