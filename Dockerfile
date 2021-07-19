FROM node:16-alpine
WORKDIR /home/node/app
COPY app /home/node/app
RUN npm install
CMD npm run app