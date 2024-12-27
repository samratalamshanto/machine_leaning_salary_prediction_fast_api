# Fetching the latest node image on alpine linux
FROM node:alpine AS development

ARG REACT_APP_baseUrl
ENV REACT_APP_baseUrl=$REACT_APP_baseUrl

EXPOSE 3000

WORKDIR /react-app
COPY  ./UI/web-app/package*.json /react-app
RUN npm install

COPY . .
CMD ["npm","start"]