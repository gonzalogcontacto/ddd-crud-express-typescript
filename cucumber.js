const common = [
  "--require-module ts-node/register", // Load TypeScript module
];

const api_backend = [
  ...common,
  "tests/apps/api/features/**/*.feature",
  "--require tests/apps/api/features/step_definitions/*.steps.ts",
  "--format progress-bar", // Load custom formatter
  //"--format  node_modules/cucumber-pretty", // Load custom formatter
].join(" ");

module.exports = {
  default: api_backend,
};
