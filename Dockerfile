FROM node:20.10.0-alpine

WORKDIR /emiliemphotographie

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
