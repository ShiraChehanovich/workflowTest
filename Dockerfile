FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm i esbuild --platform=linux-x64

RUN echo "DB_DATABASE=postgres" >> .env && \
    echo "DB_USERNAME=postgres" >> .env && \
    echo "DB_PASSWORD=12345" >> .env && \
    echo "DB_HOST=localhost" >> .env && \
    echo "DB_PORT=5432" >> .env
COPY . .

EXPOSE 3000
RUN npm run build

CMD ["npm", "run", "start"]
