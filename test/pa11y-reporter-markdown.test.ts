import markdownReporter from "../src/pa11y-reporter-markdown";

/**
 * Dummy test
 */
describe("pa11y-reporter-markdown", () => {
  it("must have the properties: supports, begin, error, debug, info, result", () => {
    expect(markdownReporter).toHaveProperty("supports")
    expect(markdownReporter).toHaveProperty("begin")
    expect(markdownReporter).toHaveProperty("error")
    expect(markdownReporter).toHaveProperty("debug")
    expect(markdownReporter).toHaveProperty("info")
    expect(markdownReporter).toHaveProperty("result")
  });
});
