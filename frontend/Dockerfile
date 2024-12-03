FROM node:18

WORKDIR /app

COPY . /app/

RUN npm install && npm cache clean --force

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
