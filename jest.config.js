module.exports = {
    "roots": [
      "<rootDir>/src/07-withTypeScript"
    ],
    testMatch: [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)?$": "ts-jest"
    },
  }