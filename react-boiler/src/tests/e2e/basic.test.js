import puppeteer from 'puppeteer';

const {
  REACT_SERVER_URL,
  headless, args, pageDimensions,
} = require('./config');

describe('Basic tests', () => {
  let browser;
  let context;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless, args });
  });

  beforeEach(async () => {
    context = await browser.createIncognitoBrowserContext();
    page = await context.newPage();
    await page.setViewport({
      width: pageDimensions.width,
      height: pageDimensions.height,
      deviceScaleFactor: 1,
    });
  });

  afterEach((async () => {
    await context.close();
  }));

  afterAll(() => browser.close());

  it('Navigate to /', async () => {
    await page.goto(`${REACT_SERVER_URL}/`);
    expect(page.url()).toBe(`${REACT_SERVER_URL}/`);
  });
});
