
FROM node:16-alpine
WORKDIR /server
COPY package.json /server
COPY package*.json ./
RUN npm install
COPY . /server
CMD ["node", "server.js"]
EXPOSE 3001
