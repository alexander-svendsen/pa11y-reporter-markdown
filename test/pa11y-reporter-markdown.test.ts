import * as markdownReporter from "../src/pa11y-reporter-markdown";
const semver = require('semver')

/**
 * Dummy test
 */
describe("pa11y-reporter-markdown", () => {
  it("must have the properties: supports, begin, error, debug, info, result", () => {
    expect(markdownReporter).toHaveProperty("supports")
    expect(markdownReporter).toHaveProperty("error")
    expect(markdownReporter).toHaveProperty("results")
  });

  it("has set supports to a valid pa11y version", () => {
    expect(semver.satisfies('8.2.0', markdownReporter.supports)).toBeTruthy()
    expect(semver.satisfies('8.1.0', markdownReporter.supports)).toBeTruthy()
    expect(semver.satisfies('9.0.0', markdownReporter.supports)).toBeFalsy()
  });
});
