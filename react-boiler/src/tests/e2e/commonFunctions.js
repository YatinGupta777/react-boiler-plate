const printPuppeteerLogs = (page) => {
  page
    .on('console', (message) => console.log(`console : ${message} ${message.text()}`))
    .on('pageerror', ({ message }) => console.log(` pageerror : ${message}`))
    .on('response',
      async (response) => {
        try {
          const status = response.status();
          const url = response.url();
          const res = await response.json();
          console.log(`${status} ${url} ${res}`);
        } catch (err) {
          console.log(err);
        }
      })
    .on('requestfailed',
      (request) => console.log(`requestfailed : ${request.failure().errorText} ${request.url()}`));
};

module.exports = { printPuppeteerLogs };
