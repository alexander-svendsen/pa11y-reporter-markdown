// Pa11y version support
const supports = '^8.0.0 || ^8.0.0-alpha || ^8.0.0-beta';

// Output the welcome message once Pa11y begins testing
const begin = () => {
  return ""
};

const error = (message: string) => {
  return ""
};

const debug = (message: string) => {
  return ""
};

const info = (message: string) => {
  return ""
};

const results = (result: string) => {
  return ""
};

// kan jeg få til å både exporte objectet og en function her?
// jeg både ståtter pally og pally-ci ?
export {supports, begin, error, debug, info, results}
