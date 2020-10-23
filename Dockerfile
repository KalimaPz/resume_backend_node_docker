FROM node:latest
WORKDIR /usr/src/app
RUN mkdir -p models
RUN mkdir -p api
COPY package*.json ./
RUN npm install
COPY index.js ./
COPY ./api/person.js ./api
COPY ./models/person.js ./models
EXPOSE $PORT
CMD [ "node", "index.js" ]