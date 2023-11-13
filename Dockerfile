from node:hydrogen-alpine
workdir /app
copy . .
run apk add python
run npm ci
run npm run build
expose 3000
cmd npm start -p 3000
