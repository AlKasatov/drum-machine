module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleDirectories: ["node_modules", "/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  // Укажите псевдонимы путей, если вы их используете
  moduleNameMapper: {
    "^@src/(.*)$": __dirname + "/src/$1"
  }
};
