FROM node:latest

LABEL version="1.0"
LABEL description="game mock frontend container"
LABEL maintainer = ["ahafiz167@gmail.com", "adilsikandar0@gmail.com"]

WORKDIR /app
ADD . .
RUN ls
RUN npm install
COPY . .
CMD ["npm", "start"]
