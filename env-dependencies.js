const execSync = require('child_process').execSync
const pkg = require('./package.json')
const fs = require('fs')
const path = require('path')
const JSON_FILE_NAME = '.env.json'
const DEFAULT_TEST_FILE_NAME = 'sortCallback'
const filePath = path.join(__dirname, JSON_FILE_NAME) // 文件路径

// 检查文件是否已存在
if (!fs.existsSync(filePath)) {
	const content = {
		TEST_FILE_NAME: DEFAULT_TEST_FILE_NAME,
	}

	const jsonContent = JSON.stringify(content, null, 4)

	try {
		fs.writeFileSync(filePath, jsonContent, 'utf8')
	} catch (err) {
		console.error('写入文件时发生错误：', err)
	}
}

if (!pkg.envDependencies) {
	process.exit(0)
}

let env = Object.assign({}, process.env)

try {
	Object.assign(env, require(`./${JSON_FILE_NAME}`))
} catch (err) {
	console.log(`Could not read or parse 'JSON_FILE_NAME'.`)
}

if (typeof pkg.envDependencies.params === 'undefined') {
	console.log(`pkg.envDependencies.params not found or empty. Passing.`)
	process.exit(0)
}

if (
	!Array.isArray(pkg.envDependencies.params) ||
	!(pkg.envDependencies.params.every(item => typeof item === 'string'))
) {
	throw new Error(`pkg.envDependencies.params should have a signature of String[]`)
}

const parsed = pkg.envDependencies.params.map(item => item.replace(/\${([0-9a-zA-Z_]*)}/g, (_, varName) => {
	if (typeof env[varName] === 'string') {
		return env[varName]
	} else {
		throw new Error(`Could not read env variable ${varName} in params ${item}`)
	}
})).join(' ')

try {
	execSync(parsed, { stdio: [0, 1, 2] })
	process.exit(0)
} catch (err) {}
