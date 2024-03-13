export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    rootDir: 'lib',
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': 'jest-transform-stub',
        '^@app/(.*)$': '<rootDir>/$1',
        '\\.(css)$': 'identity-obj-proxy',
        'goldex-icon-library': 'identity-obj-proxy',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!goldex-icon-library)'
    ]
}