FROM gamboavalentin/nodejs-puppeteer:latest

WORKDIR /nodejs-puppeteer

COPY . .
RUN npm install

CMD [ "npm", "start" ]