// Pa11y version support
import {Result} from "./types";

const supports = '^8.0.0 || ^8.0.0-alpha || ^8.0.0-beta';

const error = (message: string) => {
  return message;
};

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

const results = (result: Result) => {
  const date = formatDate(new Date());
  const pageUrl = result.pageUrl;
  const error = result.issues.filter(issue => issue.type === 'error');
  const warning = result.issues.filter(issue => issue.type === 'warning');
  const notice = result.issues.filter(issue => issue.type === 'notice');

  const details = result.issues.map(issue =>
    `## **${issue.type}:** ${issue.message}\n` +
    `${issue.code}\n` +
    `${issue.context} (select with "${issue.selector})"\n\n`
  ).join(``)

  return `# Accessibility Report For ${pageUrl}` +
    `\n` +
    `## Summary\n` +
    `Generated at: ${date}\n` +
    `\n` +
    `${error.length} Errors\n` +
    `${warning.length} Warnings\n` +
    `${notice.length} Notices\n` +
    `\n` +
    `## Details\n` +
    `${details}`
};

// kan jeg få til å både exporte objectet og en function her?
// jeg både ståtter pally og pally-ci ?
export {supports, error, results}
