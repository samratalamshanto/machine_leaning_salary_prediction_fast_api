# Fetching the latest node image on alpine linux
FROM node:alpine AS development

ARG REACT_APP_baseUrl
ENV REACT_APP_baseUrl=$REACT_APP_baseUrl

WORKDIR /react-app
COPY  ./UI/web-app/package*.json /react-app
RUN npm install

COPY ./UI/web-app/ .
CMD ["npm","start"]