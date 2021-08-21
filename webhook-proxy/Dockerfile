FROM node:16

WORKDIR /srv/app

COPY package-lock.json .
COPY package.json .

RUN npm ci

COPY . .

ENTRYPOINT ["npm", "run", "start"]
