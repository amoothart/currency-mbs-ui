# Build Stage 1
FROM node:18 AS appbuild
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

# Build Stage 2
FROM nginx
COPY --from=appbuild /usr/src/app/build/ /usr/share/nginx/html