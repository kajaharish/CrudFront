FROM node:12.2.0

WORKDIR /usr/src/app
COPY package.json .
RUN npm config set https-proxy http://10.211.3.68:8080
RUN npm install
RUN npm install -g @angular/cli@8.3.4
COPY . .
EXPOSE 4200
CMD docker-compose down
CMD ng serve --host 0.0.0.0 --disable-host-check 