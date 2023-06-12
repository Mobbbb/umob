/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom', 
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    moduleFileExtensions: ["ts", "js"],
    // 配置测试环境ua
    testEnvironmentOptions: {
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    },
}
