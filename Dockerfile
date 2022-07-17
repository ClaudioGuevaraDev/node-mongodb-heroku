FROM node:16

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install 

COPY . .

RUN npm run build 

ENV PORT=4000

EXPOSE 4000

CMD [ "npm", "start" ]