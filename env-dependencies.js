const execSync = require('child_process').execSync
const pkg = require('./package.json')

if (!pkg.envDependencies) {
	process.exit(0)
}

let env = Object.assign({}, process.env)

if (typeof pkg.envDependencies.localJSON === 'string') {
	try {
		Object.assign(env, require(pkg.envDependencies.localJSON))
	} catch (err) {
		console.log(`Could not read or parse pkg.envDependencies.localJSON. Processing with env only.`)
	}
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
