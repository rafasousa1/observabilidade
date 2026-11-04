FROM node:alpine

WORKDIR /var/nodeapp

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

USER node

CMD ["npm", "start"]