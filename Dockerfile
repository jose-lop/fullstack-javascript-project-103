FROM node:18.4.0-alpine3.16

RUN apk update && apk add --no-cache bash make git

WORKDIR /project

COPY . .

RUN npm install

RUN mkdir -p /project/code

CMD ["npm", "test"]
