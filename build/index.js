const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
 
// 构建全量压缩包
let building = ora('building...')
building.start()

const build = async () => {
    const getConfig = require('./webpack.config')
    const config = await getConfig()

    webpack(config, function(err, stats) {
        if (err) throw (err)
        building.stop()
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
        console.log(chalk.cyan('Build complete.\n'))
    })
}

build()
