const REACT_SERVER_URL = 'http://localhost:3005';
const headless = true;
const timeout = 10000;
const longTimeout = 55000;
jest.setTimeout(timeout);

const pageDimensions = {
  width: 1300,
  height: 600,
};

const args = [
  '--disable-gpu',
  '--disable-dev-shm-usage',
  '--no-sandbox',
  '--disable-setuid-sandbox',
  '--no-first-run',
  '--no-zygote',
  '--disable-accelerated-2d-canvas',
  '--use-fake-ui-for-media-stream',
  '--use-fake-device-for-media-stream',
];

module.exports = {
  REACT_SERVER_URL,
  headless,
  args,
  pageDimensions,
  longTimeout,
};
