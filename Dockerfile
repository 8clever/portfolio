from node:dubnium-alpine
workdir /app
copy . .
run npm ci
run npm build
expose 3000
cmd npm start -p 3000
