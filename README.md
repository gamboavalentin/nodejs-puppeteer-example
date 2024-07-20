# NodeJs Puppeteer Example

<div align="center">
  <img width="200"
    src="/assets/Logo.png">
</div>

Test code for the Docker image [gamboavalentin/nodejs-puppeteer](https://hub.docker.com/r/gamboavalentin/nodejs-puppeteer).

> [!IMPORTANT]
> Use the `puppeteer.launch({ headless: true, args: ['--no-sandbox'] }) ` configuration to create a browser object.

__Docker Command ↴__
```
docker build -t nodejs-puppeteer-example .
docker run -d nodejs-puppeteer-example
```

## Puppeteer Example Code → [🔗](https://pptr.dev/#example)