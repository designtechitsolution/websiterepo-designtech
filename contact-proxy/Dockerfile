FROM node:18

WORKDIR /Contactproxy

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5001

CMD ["node", "server.js"]
