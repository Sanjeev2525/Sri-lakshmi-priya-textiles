FROM node:20-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install # -g npm@9.6.1
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# FROM nginx:1.22.1
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/build .
# ENTRYPOINT ["nginx","-g","daemon off;"]