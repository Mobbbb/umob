const fs = require('fs')
const path = require('path')
const package = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

async function getAllFiles(dirPath, fileList = []) {
    const files = await fs.promises.readdir(dirPath)

    for (const file of files) {
        const filePath = path.join(dirPath, file)
        const stat = await fs.promises.stat(filePath)

        if (stat.isDirectory()) {
            await getAllFiles(filePath, fileList)
        } else {
            fileList.push(filePath.replace(/\\/g, '/'))
        }
    }

    return fileList
}

async function getConfig() {
    const entry = {}
    entry[package.name] = path.resolve(rootPath, './build', 'module.js')

    const fileLists = await getAllFiles(path.resolve(rootPath, './src'))
    fileLists.forEach(filePath => {
        const attr = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'))
        entry[attr] = path.resolve(rootPath, './src', `${attr}.js`)
    })

    return {
        mode: 'production',
        entry,
        output: {
            filename: '[name].js',
            path: path.resolve(rootPath, ''),
            library: package.name, // 模块名称
            libraryTarget: 'umd', // 支持CommonJS、AMD, 全局对象
        },
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
            }]
        }
    }
}
 
module.exports = getConfig
