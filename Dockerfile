FROM node:20.10-alpine

WORKDIR /nextapp

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
