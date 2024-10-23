import * as markdownReporter from "../src/pa11y-reporter-markdown";
import {Result} from "../src/types";

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

  it("should generate valid markdown", () => {
    const result: Result = {
      pageUrl: "https://www.test.com",
      issues: [
        {
          type: "error",
          message: "Bad color contrast",
          code: "WCAG2.A",
          context: "<div class='haha'>stuff</div>",
          selector: "nav > div > #is"
        },
        {
          type: "warning",
          message: "Badish color contrast",
          code: "WCAG2.AA",
          context: "<div class='FOO'>stuff</div>",
          selector: "nav > div > #is"
        }

      ]
    }
    const finalResult = markdownReporter.results(result)
    expect(finalResult).toContain("# Accessibility Report For https://www.test.com")
    expect(finalResult).toContain("## Summary")
    expect(finalResult).toContain("Generated at: ")

    expect(finalResult).toContain("1 Errors")
    expect(finalResult).toContain("1 Warnings")
    expect(finalResult).toContain("0 Notices")

    expect(finalResult).toContain("## Details")
    expect(finalResult).toContain("### **error:** Bad color contrast")
    expect(finalResult).toContain("WCAG2.A")
    expect(finalResult).toContain("<div class='haha'>stuff</div> (select with: nav > div > #is)")
  });

  it("should handle errors", () => {
    const msgError = "could not generate result"
    const error = markdownReporter.error("could not generate result")

    expect(error).toMatch(msgError)
  });
});
