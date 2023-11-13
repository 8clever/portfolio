from node:hydrogen-alpine
workdir /app
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN apk add make
copy . .
run npm ci
run npm run build
expose 3000
cmd npm start -p 3000
