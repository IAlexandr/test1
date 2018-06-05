FROM node:10.1.0-alpine

ARG DIR=/home/test1
ADD package.json $DIR/
WORKDIR $DIR

COPY . $DIR

CMD ["node", "index.js"]
